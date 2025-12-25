
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Annotate: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  title,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    aria-hidden={title ? 'false' : 'true'}
    {...props}
  >
    {title && <title>{title}</title>}
    <path fill="#000" fill-rule="evenodd" d="M8.293 15.707a1 1 0 0 1-.274-.903l.5-2.5a1 1 0 0 1 .274-.51l8.146-8.147a1.5 1.5 0 0 1 2.122 0l-.707.707a.5.5 0 0 0-.708 0l-1.042 1.042 2 2 1.042-1.042a.5.5 0 0 0 0-.707l-1.293-1.293.708-.707 1.293 1.293a1.5 1.5 0 0 1 0 2.121l-8.147 8.147a1 1 0 0 1-.511.273l-2.5.5a1 1 0 0 1-.903-.274M9.5 12.5l6.397-6.396 2 2L11.5 14.5 9 15z" clip-rule="evenodd"/><path fill="#000" d="M18 12.45V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5.55a.5.5 0 0 0 0-1H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5.55a.5.5 0 0 0-1 0"/>
  </svg>
);

export default Annotate;
