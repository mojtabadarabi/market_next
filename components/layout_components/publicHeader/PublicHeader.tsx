import Link from 'next/link'
import React from 'react'
import styles from './publicHeader.module.css'

function PublicHeader() {
  return (
    <header className={styles.container}>
      <div className={`${styles.menuContainer}`}>
        <Link href='/'>
          خانه
        </Link>
        <Link href='/'>
          درباره ما
        </Link>
      </div>
      <div className={`${styles.menuContainer}`}>
        <Link href='/'>
          ورود / ثبت نام
        </Link>
        <Link href='/'>
          درباره ما
        </Link>
      </div>
    </header>
  )
}

export default PublicHeader