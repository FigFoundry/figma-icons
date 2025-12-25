
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ConstrVert: React.FC<IconProps> = ({
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
    <path fill="#000" d="M8.5 6.5A.5.5 0 0 1 9 6h5a.5.5 0 0 1 0 1h-2v9h2a.5.5 0 1 1 0 1H9a.5.5 0 0 1 0-1h2V7H9a.5.5 0 0 1-.5-.5"/>
  </svg>
);

export default ConstrVert;
