import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.homepage__title}>Welcome to the Homepage!</h1>
      <p className={styles.homepage__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae ea
        perspiciatis cum nostrum? Eius, necessitatibus quasi voluptates repellendus animi
        et placeat cumque aliquid? Totam molestias non ab eum dolorum?
      </p>
      <img
        className={styles.homepage__image}
        width="800"
        height="400"
        src="https://source.unsplash.com/random/1000x400"
        alt=""
      />
      <p className={styles.homepage__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae ea
      </p>
    </div>
  )
}
