import styles from './index.module.css'

interface Props {
  greeting: string
}

const HelloWorld = ({  greeting }: Props) => {
  return <div className={styles.container}>Hello {greeting}</div>
}

export default HelloWorld