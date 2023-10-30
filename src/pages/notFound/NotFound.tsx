import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <section className={styles.notFound}>
      <h1 className={styles.notFound__title}>Page Not Found 404</h1>
      <button
        className={styles.notFound__button}
        type="button"
        onClick={() => navigate('/', { replace: true })}
      >
        Back the <span>Homepage</span>
      </button>
    </section>
  )
}
