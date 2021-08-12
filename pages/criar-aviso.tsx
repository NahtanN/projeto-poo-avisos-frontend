

import { MainLayout } from '../components/mainLayout/MainLayout'
import { ButtonsLayout } from '../components/buttonsLayout/ButtonsLayout'
import { PageTitle } from '../components/pageTitle/PageTitle'
import { Form } from '../components/form/Form'
import { WarningsLayout } from '../components/warningsLayout/WarningsLayout'

const CreateNotification = () => {

  return (
    <WarningsLayout>
      <MainLayout title="Criar Aviso">

        <ButtonsLayout
          title="Voltar"
          route="/"
        />

        <PageTitle title="Cadastrar novo aviso" />

        <Form />

      </MainLayout>
    </WarningsLayout>
  )

}

export default CreateNotification