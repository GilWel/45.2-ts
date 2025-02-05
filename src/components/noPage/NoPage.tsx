import { Link } from 'react-router-dom'
import styles from './NoPage.module.css'
export default function NoPage() {
  return (
    <div className={styles.noPage}>
      <h3>Error 404: </h3>
      <p>no such page 🙂‍↔️</p>
      <Link to  = '/'>to home page</Link>
    </div>
  )
}
