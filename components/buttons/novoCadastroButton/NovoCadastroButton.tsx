import Link from 'next/link'

import PatterStyle from '../PatternStyle.module.css'
import styles from './NovoCadastroButton.module.css'

export interface IButtonLayout {
  title: string;
  route: string;
}

const NovoCadastroButton = ({ title, route }: IButtonLayout) => {
  return (

    <Link
      href={route}
    >
      <a className={`${PatterStyle.button} ${styles.cadastroButton}`}>
        <p>{ title }</p>
      </a>
    </Link>

  )
}

export { NovoCadastroButton }