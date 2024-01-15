import React from 'react'
import styles from '../ui/dashboard/login/login.module.css'

const loginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  )
}

export default loginPage