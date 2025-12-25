
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Link: React.FC<IconProps> = ({
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
    <path fill="#000" d="M18.854 10.854a4.036 4.036 0 0 0-5.708-5.708l-2.5 2.5a.5.5 0 1 0 .707.707l2.5-2.5a3.036 3.036 0 1 1 4.293 4.293l-2.5 2.5a.5.5 0 0 0 .707.707zM5.146 13.146a4.036 4.036 0 1 0 5.708 5.708l2.5-2.5a.5.5 0 0 0-.708-.708l-2.5 2.5a3.035 3.035 0 1 1-4.292-4.292l2.5-2.5a.5.5 0 1 0-.708-.708z"/><path fill="#000" d="M14.854 9.854a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 1 0 .708.708z"/>
  </svg>
);

export default Link;
