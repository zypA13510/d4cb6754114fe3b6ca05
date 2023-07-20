import Form from './Form'

import styles from './styles.module.scss'

export default function App () {
  return (
    <main className={styles.App}>
      <section>
        <h2>Personal information</h2>
        <Form />
      </section>
      <section>
        <h2>Select your avatar</h2>
      </section>
    </main>
  )
}
