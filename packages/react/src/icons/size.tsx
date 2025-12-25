
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Size: React.FC<IconProps> = ({
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
    <path fill="#000" d="M9.5 5a.5.5 0 0 1 .5.5V6h7v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V7h-7v.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M8 9.5a.5.5 0 0 1-.5.5H7v7h.5a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1H6v-7h-.5a.5.5 0 1 1 0-1h2a.5.5 0 0 1 .5.5m8 0a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 1 0 1 0A1.5 1.5 0 0 0 16.5 9a.5.5 0 0 0-.5.5m-1 0a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5m0 8a.5.5 0 0 1-.5.5h-2a.5.5 0 1 1 0-1h2a.5.5 0 0 1 .5.5m1 0a.5.5 0 0 0 .5.5 1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 0-1 0 .5.5 0 0 1-.5.5.5.5 0 0 0-.5.5m2-3a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 1 0zm-8-4a.5.5 0 1 1-1 0A1.5 1.5 0 0 1 10.5 9a.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5m-1 6a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 9 16.5m.5-1.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5"/>
  </svg>
);

export default Size;
