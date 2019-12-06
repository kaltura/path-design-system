/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'rc-trigger';

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
