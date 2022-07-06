import {css, cx} from '@linaria/core'
import React from 'react'

const c1 = css`
  font-size: 12px;
`

export default ({style}) => <div className={cx(c1, style)}>hello
    <div className='hello'>blue</div>
</div>