import { auth, signIn, signOut } from '@/auth'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = async () => {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className=' flex justify-between items-center'>
        <Link href={"/"}>
          <Image src="/logo1.png" alt="Logo" width={140} height={30} />
        </Link>
        <div className="flex items-center gap-3 text-black">
         {session && session?.user ?(
            <>
            <Link href={"/startup/create"}>
            <span>
               create</span></Link>
            
            <form action={ async () =>{
                  "use server";
                  await signOut( {redirectTo: "/"});
            }}>
                <button type="submit">
                <span>
                sign out
                </span>
               </button>
            </form>

            <Link href={"/profile"}>
            <span>
               {session?.user?.name}
            </span>
            </Link>

            </>
         ):(
            <form action={async () => {
                "use server";

               
               await signIn( 'github')}}>
            
              <button type="submit">
                     <span>
                        sign in
                     </span>
              </button>
            </form>
         )}
        </div>
      </nav>
    </header>
  )
}

export default NavBar