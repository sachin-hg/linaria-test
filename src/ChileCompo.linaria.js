import { css, cx } from '@linaria/core'
import { styled } from '@linaria/react'
import React from 'react'
import { returnStyle } from './constants'

const xyzStyle = css`
  && {
    font-weight: 500;
    color: red;
  }
`

const TempChile = styled.div`
  font-size: 30px;
  color: ${props => props.tempColor || 'red'};
  ${returnStyle('font-size: 50px')};
  ${multiLineEllipsis};
`

export const placeHolderShimmer = `@keyframes placeHolderShimmer {
  0% {
      background-position: -400px 0
  }
  100% {
      background-position: 400px 0
  }
}
`
export const Shimmer = styled.div`
  width: 100px;
  height: 100px;
  background: #f6f7f8
    linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    )
    800px 104px no-repeat;
  animation: placeHolderShimmer 1.25s linear infinite;
  ${placeHolderShimmer}
`
export const CustomColorShimmer = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.bgColor}
    linear-gradient(
      to right,
      ${props => props.bgColor} 0%,
      ${props => props.fgColor} 20%,
      ${props => props.bgColor} 40%,
      ${props => props.bgColor} 100%
    )
    800px 104px no-repeat;
  animation: placeHolderShimmer 1.25s linear infinite;
  ${placeHolderShimmer}
`
const multiLineEllipsis = `
  overflow: hidden;
  -webkit-line-clamp: ${props => props.count};
  display: -webkit-box;
  -webkit-box-orient: vertical;
`

const Child1 = ({ className, style }) => (
  <div>
    <TempChile className={cx('xyz', className, style)} count='3'>
      Inside Child 1
    </TempChile>
    <Shimmer />
    <CustomColorShimmer bgColor='#f6f7f8' fgColor='#edeef1' />
  </div>
)

const Child2 = () => <Child1 style={xyzStyle} />

export default Child2
