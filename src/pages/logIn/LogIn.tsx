import { useLocation, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useAppDispatch } from '@hooks/useRedux'
import { logIn } from '@redux/auth'

export default function LogIn() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  const previousPath = location.state?.from?.pathname || '/'

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formValues = new FormData(event.currentTarget)
    const username = formValues.get('username') as string

    if (!username || username.trim().length === 0) return

    dispatch(logIn())
    navigate(previousPath, { replace: true })
  }

  return (
    <form className={styles['log-in-form']} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Login</legend>
        <label>
          Username:
          <input name="username" type="text" />
        </label>
        <button type="submit">Login</button>
      </fieldset>
    </form>
  )
}
