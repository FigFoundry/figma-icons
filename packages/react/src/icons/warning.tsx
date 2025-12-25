
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Warning: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12 8.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5m.75 6.253a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"/><path fill="#000" fill-rule="evenodd" d="m10.257 6.06-5.04 8.96C4.467 16.352 5.43 18 6.96 18h10.08c1.53 0 2.493-1.647 1.743-2.98l-5.04-8.96c-.764-1.36-2.722-1.36-3.486 0m.872.49-5.04 8.96a1 1 0 0 0 .87 1.49H17.04a1 1 0 0 0 .872-1.49l-5.04-8.96a1 1 0 0 0-1.743 0" clip-rule="evenodd"/>
  </svg>
);

export default Warning;
