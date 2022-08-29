import React from 'react'
import PublicHeader from '../../components/layout_components/publicHeader/PublicHeader';

interface Props{
    children:JSX.Element
}

function PublicLayout(props:Props) {
  return (
    <main>
        <PublicHeader/>
        {props.children}
    </main>
  )
}

export default PublicLayout;