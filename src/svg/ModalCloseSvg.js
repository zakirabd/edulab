import React, { Component } from 'react'

export class ModalCloseSvg extends Component {
  render() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
      >
        <rect
          width={47}
          height={47}
          x={0.5}
          y={0.5}
          fill="#471763"
          stroke="#471763"
          rx={3.5}
        />
        <path
          fill="#FEC200"
          d="M33.708 32.293a.999.999 0 0 1-.325 1.632 1 1 0 0 1-1.09-.217l-8.292-8.294-8.293 8.294a1 1 0 0 1-1.415-1.415l8.294-8.292-8.294-8.293a1 1 0 1 1 1.415-1.415l8.293 8.294 8.292-8.294a1 1 0 1 1 1.415 1.415l-8.294 8.293 8.294 8.292Z"
        />
      </svg>
    )
  }
}

export default ModalCloseSvg