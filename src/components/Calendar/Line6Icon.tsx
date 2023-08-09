import { memo, SVGProps } from 'react';

const Line6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.0907 1.5C22.9192 1.5 23.5907 0.828427 23.5907 0C23.5907 -0.828427 22.9192 -1.5 22.0907 -1.5V1.5ZM-1.06066 -1.06066C-1.64645 -0.474874 -1.64645 0.474874 -1.06066 1.06066L8.48528 10.6066C9.07107 11.1924 10.0208 11.1924 10.6066 10.6066C11.1924 10.0208 11.1924 9.07107 10.6066 8.48528L2.12132 0L10.6066 -8.48528C11.1924 -9.07107 11.1924 -10.0208 10.6066 -10.6066C10.0208 -11.1924 9.07107 -11.1924 8.48528 -10.6066L-1.06066 -1.06066ZM22.0907 -1.5L7.25075e-07 -1.5V1.5L22.0907 1.5V-1.5Z'
      fill='#CBCBCB'
    />
  </svg>
);

const Memo = memo(Line6Icon);
export { Memo as Line6Icon };
