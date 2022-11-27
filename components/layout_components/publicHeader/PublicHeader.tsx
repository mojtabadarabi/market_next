import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './publicHeader.module.css'
import TopNavigation from "../topNavigation/TopNavigation";
import PublicBergerMenu from "../PublicBergerMenu/PublicBergerMenu";

function PublicHeader() {
  const {pathname} = useRouter()
  return (
    <header >
        <PublicBergerMenu/>
        <TopNavigation/>
      {/*<div className={`${styles.menuContainer}`}>*/}
      {/*  <Link href='/'>*/}
      {/*    خانه*/}
      {/*  </Link>*/}
      {/*  <Link href='/about'>*/}
      {/*    درباره ما*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<div className={`${styles.menuContainer}`}>*/}
      {/*  <Link href='/'>*/}
      {/*    ورود / ثبت نام*/}
      {/*  </Link>*/}
      {/*  <Link href='/'>*/}
      {/*    درباره ما*/}
      {/*  </Link>*/}
      {/*  <Link href={pathname} locale='fa'>*/}
      {/*  change to fa*/}
      {/*</Link>*/}
      {/*<br/>*/}
      {/*<Link href={pathname} locale='en'>*/}
      {/*  change to en*/}
      {/*</Link>*/}
      {/*</div>*/}
    </header>
  )
}

export default PublicHeader