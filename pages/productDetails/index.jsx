import  Head  from 'next/head'
import Link from 'next/link'

export default function ProductDetails() {
  return (
    <div className="container">
      <Head>
            <title> Product Details page </title>
      </Head>

      <h2>This is product details page!!</h2>
      
      <h2 className="back">
        <Link href="/">
          Back to shoping!!
        </Link>
      </h2>

      <style jsx>{
      `
        .container {
          text-align: center;
        }
        .back{
          color:red;
          text-decoration : underline;
        }
        .back:hover{
          color:blue;
          text-decoration : none;
        }
      `
      }
      </style>
    </div>
  )
}
