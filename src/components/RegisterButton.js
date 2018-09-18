import React from 'react'

import { withRouter } from 'react-router-dom'

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/register') }}
  >
    Register!
  </button>
))

export default Button
