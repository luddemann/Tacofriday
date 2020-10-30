import React, { ReactHTML } from 'react';

type Props<P> = P & {
  text: string;
  as: keyof ReactHTML,
  className: string
}

const Text = <P extends any> ({text, as, className}: Props<P>) => {

  const Component = as;
  return (
    <Component
      dangerouslySetInnerHTML={{
        __html: text
      }}
      className={className}
    />
  );
}

export default Text;