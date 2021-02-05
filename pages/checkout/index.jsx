import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h2>This is home page!!</h2>
      
      <h1 className="title">
        Read{' '}
        <Link href="/cart">
          Cart page!
        </Link>
      </h1>
    </>
  )
}
