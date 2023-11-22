import React, { Component } from 'react'

export class NavSvg extends Component {
  render() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
      >
        <path
          fill="#000"
          d="M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1ZM5 9h22a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2Zm22 14H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z"
        />
      </svg>
    )
  }
}

export default NavSvg