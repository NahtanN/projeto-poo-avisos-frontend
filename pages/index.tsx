import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MainLayout } from '../components/mainLayout/MainLayout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aula POO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout />
    </div>
  )
}
