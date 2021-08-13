import { MainLayout } from '../components/mainLayout/MainLayout'
import { ButtonsLayout } from '../components/buttonsLayout/ButtonsLayout'
import { PageTitle } from '../components/pageTitle/PageTitle'
import { Notification } from '../components/notification/Notification'
import { ScrollToTopButton } from '../components/buttons/scrollToTopButton/ScrollToTopButton'

export default function Home() {
  return (
      <MainLayout title="Aula POO">

        <ButtonsLayout 
          title="Cadastrar novo aviso" 
          route="/criar-aviso"
        />

        <PageTitle title="Avisos da Aula de POO"/>

        <Notification />

        <ScrollToTopButton />

      </MainLayout>
  )
}
