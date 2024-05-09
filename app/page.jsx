import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
      <h2>
      welcome to next js
      </h2>
      <Link href="about">about page</Link>
     <Link href="contacts">contacts</Link>
    </>
  )
}

export default page
