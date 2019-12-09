/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'rc-trigger' {
  export interface AlignType {
    /**
     * move point of source node to align with point of target node.
     * Such as ['tr','cc'], align top right point of source node with center point of target node.
     * Point can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right) */
    points?: AlignPoint[];
    /**
     * offset source node by offset[0] in x and offset[1] in y.
     * If offset contains percentage string value, it is relative to sourceNode region.
     */
    offset?: number[];
    /**
     * offset target node by offset[0] in x and offset[1] in y.
     * If targetOffset contains percentage string value, it is relative to targetNode region.
     */
    targetOffset?: number[];
    /**
     * If adjustX field is true, will adjust source node in x direction if source node is invisible.
     * If adjustY field is true, will adjust source node in y direction if source node is invisible.
     */
    overflow?: {
      adjustX?: boolean | number;
      adjustY?: boolean | number;
    };
    /**
     * Whether use css right instead of left to position
     */
    useCssRight?: boolean;
    /**
     * Whether use css bottom instead of top to position
     */
    useCssBottom?: boolean;
    /**
     * Whether use css transform instead of left/top/right/bottom to position if browser supports.
     * Defaults to false.
     */
    useCssTransform?: boolean;
  }
  
  export interface BuildInPlacements {
    [placement: string]: AlignType;
  }
  
  export default Trigger;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent }
}

interface Story {
  (): JSX.Element;
  
  story?: {
    title?: string;
    parameters?: {
      docs?: {
        disable?: boolean;
        storyDescription?: string
      };
    }
  };
}
