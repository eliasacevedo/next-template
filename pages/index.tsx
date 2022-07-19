import Head from 'next/head'
import { useContext } from 'react'
import { LanguageContext } from '../core/languages/languageContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  const text = useContext(LanguageContext)
  return (
    <div className={styles.container}>
      <Head>
        <title>Template</title>
        <meta name="description" content="Template description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {text.test}
        </h1>
      </main>
    </div>
  )
}
