/* 收藏 */

import React from 'react'

import { withAuth } from "../../utils/hoc";


@withAuth
class collect extends React.Component {

  render() {
    return (
      <div><h2>收藏</h2></div>
    )
  }

}

export default collect;