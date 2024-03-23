import React from 'react'
import styles from './navbar.module.css'
import { IconUserCircle } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <IconUserCircle className={styles.user_icon} width={30} height={30} />
      </div>
    </div>
  )
}

export default Navbar