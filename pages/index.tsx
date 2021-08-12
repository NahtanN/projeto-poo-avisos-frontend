import { MainLayout } from '../components/mainLayout/MainLayout'
import { ButtonsLayout } from '../components/buttonsLayout/ButtonsLayout'
import { PageTitle } from '../components/pageTitle/PageTitle'
import { Notification } from '../components/notification/Notification'

export default function Home() {
  return (
      <MainLayout title="Aula POO">

        <ButtonsLayout 
          title="Cadastrar novo aviso" 
          route="/criar-aviso"
        />

        <PageTitle title="Avisos da Aula de POO"/>

        <Notification />

      </MainLayout>
  )
}
