import * as React from 'react';
import { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import {
  createUseStyles,
  Theme,
  theming
} from '@kaltura-react-ui-kits/path-theming';

export interface HintProps {
    /**
     * Position in which hit can be placed
     */
    direction?: 'top' | 'bottom' | 'right' | 'left';
    /**
     * Max width of hint container. maxWidth: 0 means no restrictions
     */
    maxWidth?: number;
    /**
     * Hint content. Can be string or ReactNode
     */
    content?: string | React.ReactNode;
    /**
     * Prevents hint from being shown
     */
    disabled?: boolean;
    /**
     * Children element that is a target for hint
     */
    children?: React.ReactNode;

    /**
     * ClassName of wrapped element
     */
    className?: string;
}

function offset(el: HTMLElement): { top: number, left: number } {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

class EnhancedTooltip extends Tooltip {
    onPopupAlign = (popup: HTMLElement, align: any) => {
        const placements = this.getPlacements();
        // Get the current placement
        const placement = Object.keys(placements).filter(
            key =>
                placements[key].points[0] === align.points[0] &&
                placements[key].points[1] === align.points[1]
        )[0];
        if (!placement) {
            return;
        }

        //@ts-ignore
        const target = this.tooltip.trigger.getRootDomNode();
        const arrow = popup.querySelector('.ant-tooltip-arrow') as HTMLElement;

        if (!arrow || !target) {
            return;
        }

        const targetPageOffset = offset(target);
        const arrowPageOffset = offset(arrow);

        if (
            (this.props.placement === 'top' && targetPageOffset.top < arrowPageOffset.top)
            || (this.props.placement === 'bottom' && targetPageOffset.top > arrowPageOffset.top)
            || (this.props.placement === 'right' && targetPageOffset.left > arrowPageOffset.left)
            || (this.props.placement === 'left' && targetPageOffset.left < arrowPageOffset.left)
        ) {
            console.warn('Incorrect hint placement was provided. Hiding arrow.');
            arrow.style.display = 'none';
            return;
        }

        // Get the rect of the target element.
        const rect = target.getBoundingClientRect();

        // Only the top/bottom placements should be handled
        if (/^(top|bottom)$/.test(placement)) {
            const { left, width } = rect;
            const arrowOffset = left + width / 2 - popup.offsetLeft;
            arrow.style.left = `${arrowOffset}px`;
        }
    };
}

const useStyles = createUseStyles((theme: Theme) => ({
    'hintContent': {
        fontFamily: theme.hint.fontFamily,
        fontSize: theme.hint.fontSize,
        fontWeight: theme.hint.fontWeight,
        lineHeight: theme.hint.lineHeight,
        display: 'block',
    },
    '@global': {
        '.path.ant-tooltip': { maxWidth: 'unset' },
        '.path .ant-tooltip-arrow': { color: theme.colors.grayscale1 },
        '.path .ant-tooltip-inner': {
            backgroundColor: theme.colors.grayscale1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'unset',
            textAlign: 'center'
        }
    }
}), { theming });

/**
 * The hint is shown on mouse enter, and is hidden on mouse leave
 */
export function Hint(props: HintProps) {
    const { content, children, className, disabled, maxWidth, direction } = props;
    const [visible, setVisible] = useState(false);
    const maxWithValue = !!maxWidth ? `${maxWidth}px` : 'auto';
    const classes = useStyles(props);

    useEffect(() => {
      if (disabled) {
        setVisible(false);
      }
    },
    [disabled]);

    const handleVisibilityChange = (isVisible: boolean) => {
      if (!disabled) {
        setVisible(isVisible);
      }
    };

    const getContent = () => <span className={classes.hintContent} style={{ maxWidth: maxWithValue }}>{content}</span>;
    return (
      <EnhancedTooltip visible={visible}
                       onVisibleChange={handleVisibilityChange}
                       overlay={getContent}
                       overlayClassName='path'
                       placement={direction}
                       autoAdjustOverflow={true}>
        <div className={className}>{children}</div>
      </EnhancedTooltip>
    );
}

Hint.defaultProps = {
  disabled: false,
  maxWidth: 200,
  direction: 'top',
  className: ''
};
