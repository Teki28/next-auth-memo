'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

const SigninButton = () => {
  const {data: session} = useSession()
  console.log(session?.user)
  if(session && session.user) {
    return (
      <div className='flex gap-4 ml-auto'>
        <p className='text-sky-600'>{session.user.name}</p>
        <button onClick={()=>signOut()}>Sign Out</button>
      </div>
    )
  }
  return (
    <div className='flex gap-4 ml-auto'>
      <button onClick={()=>signIn()}>Sign In</button>
    </div>
  )
}

export default SigninButton
