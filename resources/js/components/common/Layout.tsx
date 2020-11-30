import React from 'react'

interface Props {
  children: any;
}

const Layout:React.FC<Props> = ({ children }: Props) => {
  return <div className="containe">{children}</div>
}

export default Layout
