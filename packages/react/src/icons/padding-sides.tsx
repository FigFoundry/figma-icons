
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const PaddingSides: React.FC<IconProps> = ({
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
    <path fill="#000" d="M8 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm9 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm-8-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1z"/>
  </svg>
);

export default PaddingSides;
