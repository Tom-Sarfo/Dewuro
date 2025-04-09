import * as React from "react"
import type { SVGProps } from "react"
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#9a9ca3"
      fillRule="evenodd"
      d="M13.397 15.348a7 7 0 1 1 1.05-1.05c.029.022.057.046.083.073l4 4a.75.75 0 0 1-1.06 1.06l-4-4a.756.756 0 0 1-.073-.083zM14.5 9.9a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      clipRule="evenodd"
    />
  </svg>
)
export default SearchIcon;
