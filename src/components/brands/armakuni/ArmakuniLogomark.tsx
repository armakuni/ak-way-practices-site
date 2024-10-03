import React, { FC } from "react";

interface ArmakuniLogomarkProps {
  readonly className?: string;
}
export const ArmakuniLogomark: FC<ArmakuniLogomarkProps> = ({
  className = "",
}: ArmakuniLogomarkProps) => {
  return (
    <svg
      className={className}
      role="img"
      version="1.1"
      viewBox="0 0 113.6 79.080002"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>'Armakuni'</title>
      <g transform="matrix(1.3333333,0,0,-1.3333333,0,79.08)">
        <g transform="scale(0.1)">
          <path
            d="M 366.59,593.152 H 190.523 L 0,-0.00390625 H 195.957 L 293.941,296.574 392.324,593.152"
            fill="#81cc28"
            fillOpacity={1}
            fillRule="nonzero"
            stroke="none"
          />
          <path
            d="M 206.191,593.152 H 392.324 L 582.848,-0.00390625 H 386.887 L 190.523,593.152 h 15.668"
            fill="#56bae8"
            fillOpacity={1}
            fillRule="nonzero"
            stroke="none"
          />
          <path
            d="M 651.344,592.852 H 850.113 L 838.922,558.641 751.52,303.016 651.344,592.852"
            fill="#de54b2"
            fillOpacity={1}
            fillRule="nonzero"
            stroke="none"
          />
          <path
            d="M 557.105,303.016 656.059,-0.00390625 H 852.02 L 751.52,303.016 H 557.105"
            fill="#f78f22"
            fillOpacity={1}
            fillRule="nonzero"
            stroke="none"
          />
          <path
            d="M 651.344,592.852 751.52,303.016 H 557.105 Z"
            fill="#eb2629"
            fillOpacity={1}
            fillRule="nonzero"
            stroke="none"
          />
          <path
            d="m 190.523,593.152 100.801,-304.492 101,304.492 z"
            fill="#4798d9"
            fillOpacity={1}
            fillRule="nonzero"
            stroke="none"
          />
        </g>
      </g>
    </svg>
  );
};
