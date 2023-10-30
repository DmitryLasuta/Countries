import styles from './styles.module.css'

interface CountryDetailProps {
  label: string
  value: string
}

export const CountryDetail = ({ label, value }: CountryDetailProps) => {
  return (
    <p className={styles['country-detail']}>
      <strong className={styles['country-detail__label']}>{label}</strong>: {value}
    </p>
  )
}
