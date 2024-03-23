import React, { useState } from 'react';
import styles from './sidenav.module.css';
import { IconHome, IconPlanet, IconUsers, IconTower, IconBuildingStore, IconMessageDots, IconLogout  } from '@tabler/icons-react';
import PremiumCard from '../premiumCard/PremiumCard';

const Sidenav = () => {
  const [selectedItem, setSelectedItem] = useState('Home'); // Initialize state with 'Home' as default selected item

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <IconPlanet className={styles.logo_icon}/>
          <h5 className={styles.logo_title}>BabyCode</h5>
        </div>
        <div className={styles.content_container}>
          <div className={`${styles.content} ${selectedItem === 'Home' ? styles.selected : ''}`} onClick={() => handleItemClick('Home')}>
            <IconHome className={styles.icon}/>
            <p className={styles.text}>Home</p>
          </div>
          <div className={`${styles.content} ${selectedItem === 'Community' ? styles.selected : ''}`} onClick={() => handleItemClick('Community')}>
            <IconUsers  className={styles.icon}/>
            <p className={styles.text}>Community</p>
          </div>
          <div className={`${styles.content} ${selectedItem === 'Stories' ? styles.selected : ''}`} onClick={() => handleItemClick('Stories')}>
            <IconTower  className={styles.icon}/>
            <p className={styles.text}>Stories</p>
          </div>
          <div className={`${styles.content} ${selectedItem === 'Shop' ? styles.selected : ''}`} onClick={() => handleItemClick('Shop')}>
            <IconBuildingStore  className={styles.icon}/>
            <p className={styles.text}>Shop</p>
          </div>
          <div className={`${styles.content} ${selectedItem === 'Feedback' ? styles.selected : ''}`} onClick={() => handleItemClick('Feedback')}>
            <IconMessageDots  className={styles.icon}/>
            <p className={styles.text}>Feedback</p>
          </div>
          <div className={`${styles.content} ${selectedItem === 'Logout' ? styles.selected : ''} ${styles.last}`} onClick={() => handleItemClick('Logout')}>
            <IconLogout  className={styles.icon}/>
            <p className={styles.text}>Logout</p>
          </div>
        </div>
        <PremiumCard className='hide-on-small'/>
      </div>
    </>
  )
}

export default Sidenav;
