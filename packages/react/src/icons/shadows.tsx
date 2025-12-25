
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Shadows: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" d="M12 18.93a7.002 7.002 0 0 1 0-13.86z"/><path fill="#000" fill-rule="evenodd" d="M12.002 19.938a8.001 8.001 0 0 1 0-15.876c.548-.069.998.386.998.938v1.083a6.002 6.002 0 0 1 0 11.834V19c0 .552-.45 1.006-.998.938M6 12a7 7 0 0 0 6 6.93V5.07A7 7 0 0 0 6 12m7 4.9a5.002 5.002 0 0 0 0-9.8z" clip-rule="evenodd"/>
  </svg>
);

export default Shadows;
