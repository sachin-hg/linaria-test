import { css, cx } from '@linaria/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { titlecolor } from './constants'

const titleClass = css`
  font-family: sans-serif;
  font-size: 48px;
  color: ${titlecolor};
`
const titleColor = css`
  color: #f15f79;
`
const commonMediaQueries = {
  xs: '@media (min-width:200px)',
  md: '@media (min-width:400px)'
}

const mqStyle = {
  [commonMediaQueries.xs]: {
    backgroundColor: 'green'
  },
  [commonMediaQueries.md]: {
    backgroundColor: 'aqua'
  }
}

const responsiveLayoutCss = css`
  display: flex;
  flex-direction: column;
  ${mqStyle}
`
const child1Style = css`
  font-size: 30px;
  color: brown;
`
const propStyle = css`
  color: pink;
`

const App = () => (
  <div className={responsiveLayoutCss}>
    <h1 className={cx(titleColor, titleClass)}>Hello world!</h1>
    <Child1 style={propStyle} />
  </div>
)

const Child1 = ({ style }) => (
  <div className={cx(child1Style, style)}>Inside Child 1</div>
)

ReactDOM.render(<App />, document.getElementById('root'))
