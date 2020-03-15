import React from 'react'

import './menu-item.style.scss'
import { withRouter } from 'react-router-dom'

const Menuitem = ({ title, imageUrl, size, history, Linkurl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${Linkurl}`)}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="backgroundImage"
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
)

export default withRouter(Menuitem)
