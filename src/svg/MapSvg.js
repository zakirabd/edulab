import React, { Component } from 'react'

export class MapSvg extends Component {
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
            d="M23.645 3.041a.923.923 0 0 0-.792-.167L15.8 4.637l-7.08-3.54a.923.923 0 0 0-.636-.07L.699 2.875A.923.923 0 0 0 0 3.769v16.616a.923.923 0 0 0 1.147.895L8.2 19.517l7.08 3.54a.94.94 0 0 0 .636.07l7.385-1.847a.922.922 0 0 0 .699-.895V3.769a.925.925 0 0 0-.355-.728ZM9.23 3.416l5.538 2.77v14.552l-5.538-2.77V3.417ZM1.846 4.491l5.539-1.385v14.711l-5.539 1.385V4.491Zm20.308 15.173-5.539 1.384V6.337l5.539-1.385v14.712Z"
            />
        </svg>
    )
  }
}

export default MapSvg