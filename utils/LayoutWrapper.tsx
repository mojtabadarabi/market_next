import React from 'react'
import { useSelector } from 'react-redux';
import PublicTheme from '../layout/public/PublicLayout'

interface Props{
  children:JSX.Element
}

function LayoutWrapper(props:Props) {
  const {dir} = useSelector((state:any)=>state.global)
  return (
    <div dir={dir}>
      <PublicTheme>
          {props.children}
      </PublicTheme>
    </div>
  )
}

export default LayoutWrapper;