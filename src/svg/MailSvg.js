import React, { Component } from 'react'

export class MailSvg extends Component {
  render() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
      >
        <path
          fill="#fff"
          d="M23.077 3H.923A.923.923 0 0 0 0 3.923v15.692a1.846 1.846 0 0 0 1.846 1.847h20.308A1.846 1.846 0 0 0 24 19.614V3.923A.923.923 0 0 0 23.077 3ZM12 12.825 3.297 4.846h17.406L12 12.825Zm-3.38-.594L1.846 18.44V6.022L8.62 12.23Zm1.367 1.252 1.384 1.275a.923.923 0 0 0 1.249 0l1.384-1.275 6.693 6.132h-17.4l6.69-6.132Zm5.393-1.252 6.774-6.21v12.42l-6.774-6.21Z"
        />
      </svg>
    )
  }
}

export default MailSvg