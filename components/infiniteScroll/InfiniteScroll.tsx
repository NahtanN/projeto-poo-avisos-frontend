import { useEffect } from "react"
import { useRef } from "react"
import { IReqData } from '../notification/Notification'
import { INotification } from '../../schemas/notificationSchema/NotificationSchema'

interface IInfineteScroll {
  reqData: IReqData | undefined;
  resData: (notifications: INotification[]) => void;
}

const InfiniteScroll = ({ reqData, resData }: IInfineteScroll) => {

  // Cria um valor mutável que existe enquanto o componente estiver instanciado  
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const options = {
      root: null, // Observa a visibilidade do alvo no viewport
      rootMargin: '0px', // Margin ao redor do root
      threshold: 0.1, // Quando 10% do alvo estiver visível, a callback é chamada
    }

    const observer = new IntersectionObserver(([entry]) => {
      
      if (entry.isIntersecting) {

        // Evita carregar mais de uma vez
        observer.disconnect()

        if (reqData != undefined) {

          resData(reqData.notifications)

        }

      }
    }, options)

    // Adiciona o alvo no observer
    if (containerRef.current != null) 
      observer.observe(containerRef.current)
    
    return () => {
      observer.disconnect()
    }

  }, [reqData])

  return (
    <div
      ref={containerRef}
    />
  )

}

export { InfiniteScroll }