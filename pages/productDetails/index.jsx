import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h2>This is product details page!!</h2>
      
      <h1>
        <Link href="/">
          back to home!
        </Link>
      </h1>
    </>
  )
}
