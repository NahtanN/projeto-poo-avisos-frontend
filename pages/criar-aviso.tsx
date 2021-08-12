

import { MainLayout } from '../components/mainLayout/MainLayout'
import { ButtonsLayout } from '../components/buttonsLayout/ButtonsLayout'
import { PageTitle } from '../components/pageTitle/PageTitle'
import { Form } from '../components/form/Form'

const CreateNotification = () => {

  return (
      <MainLayout title="Criar Aviso">

        <ButtonsLayout 
          title="Voltar" 
          route="/"
        />

        <PageTitle title="Cadastrar novo aviso"/>

        <Form />

      </MainLayout>
  )

}

export default CreateNotification