import styles from './NotificationSchema.module.css'

interface ILink {
  title: string;
  url: string;
}

export interface INotification {
  title: string;
  description: string;
  id: string;
  link: ILink;
  created: string;
}

const NotificationSchema = ({ ...props }: INotification) => {

  const dateCreated = props.created.split(' ')

  const formatDescription = props.description.split('\n')
  
  return (

    <div className={styles.wrapper}>
      <div className={styles.container}>

        <article className={styles.notification}>

          <h2>{props.title}</h2>
          
          {
            formatDescription.map(text => <h3>{text}</h3>)
          }

          <a
            href={props.link.url}
            target="_blank"
            id={styles.link}
          >
            {
              props.link.title != ''
                ? props.link.title
                : props.link.url
            }
          </a>
          <p><small>Adicionada: {dateCreated[0]}</small></p>
        </article>

      </div>
    </div>

  )

}

export { NotificationSchema }