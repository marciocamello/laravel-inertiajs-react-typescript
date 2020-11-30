import React from 'react'
import Menu from '../Nav'

interface Props {
  children: any;
}

const Layout:React.FC<Props> = ({ children }: Props) => {
  return <React.Fragment>
  <div className="mb-3">
    <Menu />
  </div>
  <div className="container">{children}</div>
</React.Fragment>
}

export default Layout
