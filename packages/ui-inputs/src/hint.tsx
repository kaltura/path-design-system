import * as React from 'react';
import { Tooltip } from 'antd';

export type HintDirection = 'top' | 'bottom' | 'right' | 'left';

export interface HintProps {
    direction?: HintDirection;
    maxWidth?: number;
    content?: string | React.ReactNode;
    disabled?: boolean;
    children?: React.ReactNode;
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
        
        const targetOffset = offset(target);
        const arrowOffset = offset(arrow);
        
        if (
            (this.props.placement === 'top' && targetOffset.top < arrowOffset.top)
            || (this.props.placement === 'bottom' && targetOffset.top > arrowOffset.top)
            || (this.props.placement === 'right' && targetOffset.left > arrowOffset.left)
            || (this.props.placement === 'left' && targetOffset.left < arrowOffset.left)
        ) {
            console.warn('Incorrect hint placement was provided. Hiding arrow.');
            arrow.style.display = 'none';
            return;
        }
        
        // Get the rect of the target element.
        const rect = target.getBoundingClientRect();
        
        // Only the top/bottom/left/right placements should be handled
        if (/^(top|bottom)$/.test(placement)) {
            const { left, width } = rect;
            const arrowOffset = left + width / 2 - popup.offsetLeft;
            arrow.style.left = `${arrowOffset}px`;
        } else if (/^(left|right)$/.test(placement)) {
            const { top, height } = rect;
            const arrowOffset = top + height / 2 - popup.offsetTop;
            arrow.style.top = `${arrowOffset}px`;
        }
    };
}

export function Hint(props: HintProps) {
    const { content, children, direction = 'top' } = props;
    return (
        <EnhancedTooltip title={content} placement={direction} autoAdjustOverflow={true} trigger='click'>
            <span>{children}</span>
        </EnhancedTooltip>
    );
}
