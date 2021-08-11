import styles from '../styles/Home.module.css'
import Head from 'next/head'

import { MainLayout } from '../components/mainLayout/MainLayout'
import { ButtonsLayout } from '../components/buttonsLayout/ButtonsLayout'
import { PageTitle } from '../components/pageTitle/PageTitle'
import { Form } from '../components/form/Form'

const CreateNotification = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Criar Aviso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>

        <ButtonsLayout 
          title="Voltar" 
          route="/"
        />

        <PageTitle title="Cadastrar novo aviso"/>

        <Form />

      </MainLayout>
    </div>
  )

}

export default CreateNotification