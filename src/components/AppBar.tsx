import React from 'react'
import SigninButton from './SigninButton'
import Link from 'next/link'
const AppBar = () => {
  return (
    <div>
      <h1>App Bar</h1>
      <Link href={"/UserPost"}>User Post Page</Link>
      <Link href={"/"}>Home Page</Link>
      <SigninButton />
    </div>
  )
}

export default AppBar
