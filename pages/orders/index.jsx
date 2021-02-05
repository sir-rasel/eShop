import  Head  from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
          <title> Orders List </title>
      </Head>

      <h2>This is orders page!!</h2>
      
      <h1>
        <Link href="/">
          back to home!
        </Link>
      </h1>
    </>
  )
}
