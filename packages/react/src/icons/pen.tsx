
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Pen: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="m19.31 14.623 1.397 1.397a1 1 0 0 1 0 1.415l-3.272 3.272a1 1 0 0 1-1.414 0l-1.397-1.397c-1.974.62-4.156.157-6.124-1.81-2.184-2.184-3.573-8.343-4.167-11.532A1.39 1.39 0 0 1 5.97 4.333c3.187.594 9.347 1.983 11.53 4.167 1.967 1.967 2.43 4.149 1.81 6.123m-1.136.279.182-.578c.496-1.581.17-3.384-1.563-5.117-.43-.431-1.11-.87-1.999-1.294-.877-.42-1.904-.8-2.982-1.139-2.027-.636-4.174-1.105-5.734-1.403l4.906 4.906a2 2 0 1 1-.707.707L5.372 6.079c.297 1.56.766 3.706 1.402 5.732.696 2.213 1.532 4.08 2.433 4.982 1.734 1.733 3.537 2.059 5.118 1.563l.578-.182L16.728 20 20 16.728zm-5.467-2.195a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414" clip-rule="evenodd"/>
  </svg>
);

export default Pen;
