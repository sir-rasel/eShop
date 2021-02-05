import  Head  from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
          <title> Product Details </title>
      </Head>

      <h2>This is product details page!!</h2>
      
      <h1>
        <Link href="/">
          back to home!
        </Link>
      </h1>
    </>
  )
}
