import { css, cx } from '@linaria/core'
import React from 'react'
import C1 from './C1'
const c2 = css`
  font-size: 13px;
`

export default ({style}) => <C1 style={cx(c2, style)}>hello</C1>