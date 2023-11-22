import React, { Component } from 'react'

export class MobileSvg extends Component {
  render() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={24}
        fill="none"
      >
        <path
          fill="#fff"
          d="M12.857 0H2.571A2.571 2.571 0 0 0 0 2.571V21.43A2.571 2.571 0 0 0 2.571 24h10.286a2.571 2.571 0 0 0 2.572-2.571V2.57A2.571 2.571 0 0 0 12.857 0ZM1.714 5.143h12v13.714h-12V5.143Zm.857-3.429h10.286a.857.857 0 0 1 .857.857v.858h-12V2.57a.857.857 0 0 1 .857-.857Zm10.286 20.572H2.571a.857.857 0 0 1-.857-.857v-.858h12v.858a.857.857 0 0 1-.857.857Z"
        />
      </svg>
    )
  }
}

export default MobileSvg