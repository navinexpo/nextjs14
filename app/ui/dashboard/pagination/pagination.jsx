import React from 'react'
import styles from '../../../ui/dashboard/pagination/pagination.module.css'

const Pagination = () => {
  return (
    <div className={styles.container}>
        <button className={styles.button} disabled>Prev</button>
        <button className={styles.button}>Next</button>
    </div>
  )
}

export default Pagination