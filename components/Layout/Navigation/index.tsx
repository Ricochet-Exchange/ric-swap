import React from 'react'
import styles from './styles.module.css'

export default function index() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item_swap}>
          <a href="" target="" className={styles.nav_link}>
            <img src='https://i.imgur.com/Xax6kzw.png' alt='wallet' className={styles.icon}/>
            Swap
          </a>
        </li>
        <li className={styles.nav_item}>
   
          <a href="https://app.ricochet.exchange/#/wallet" target="" className={styles.nav_link}>
          <img src='https://i.imgur.com/2KyCVUu.png' alt='wallet' className={styles.icon}/>
            Wallet</a>
        </li>
        <li className={styles.nav_item}>
       
          <a href="https://app.ricochet.exchange/#/invest/rex-market" target="" className={styles.nav_link}>
          <img src='https://i.imgur.com/BwMyvoA.png' alt='wallet' className={styles.icon}/>
            Market</a>
        </li>
        <li className={styles.nav_item}>

          <a href="https://app.ricochet.exchange/#/payments" target="" className={styles.nav_link}>
          <img src='https://i.imgur.com/gWMZ0tm.png' alt='wallet' className={styles.icon}/>
            Payments
          </a>
        </li>
        <li className={styles.nav_item}>
          
          <a href="https://app.ricochet.exchange/#/invest/rex-launchpad" target="" className={styles.nav_link}>
            <img src='https://i.imgur.com/z9B3YnB.pngs' alt='wallet' className={styles.icon}/>
            Launchpad
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="https://app.ricochet.exchange/#/invest/streams" target="" className={styles.nav_link}>
            <img src='https://i.imgur.com/nNsy9bS.png' alt='wallet' className={styles.icon}/>
            Active Streams
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="https://app.ricochet.exchange/#/recent-activity" target="" className={styles.nav_link}>
            <img src='https://i.imgur.com/fAuxy1L.png' alt='wallet' className={styles.icon}/>
            Activity
          </a>
        </li>
        <li className={styles.nav_item}>
          
          <a href="https://app.ricochet.exchange/#/refer" target="" className={styles.nav_link}>
            <img src='https://i.imgur.com/8x1vhHW.png' alt='wallet' className={styles.icon}/>
            Refer
          </a>
        </li>
      </ul>
    </nav>
  )
}
