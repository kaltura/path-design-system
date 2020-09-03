import React from 'react';

/* eslint-disable-next-line */
export interface PathThemingProps {}

export const PathTheming = (props: PathThemingProps) => {
  return (
    <div>
      <style jsx>{`
        div {
          color: pink;
        }
      `}</style>
      <h1>Welcome to path-theming!</h1>
    </div>
  );
};

export default PathTheming;
