import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import dynamic from 'next/dynamic'
import Link from 'next/link'

// const CatalogComponent = dynamic(()=> import("shop/catalog"), { ssr: false});
// const Remote2Component = dynamic(()=> import("remote/remote"), { ssr: false});


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Nav>This is my nav from main app 1</Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          GLOSS HOST APPLICATION
        </h1> 
        {/* <Link href="/catalogOnMain">Go to catalog</Link> */}
        <Link href="/selfDesignPage">Go to SelfDesign</Link>
        <Link href="/fopPage">Go to Fop</Link>

    {/* Component from shop */}
    {/* <Remote2Component /> */}
    {/* <CatalogComponent/> */}

      </main>

      <Footer/>
    </div>
  )
}