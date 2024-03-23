import React from 'react'
import styles from './siteContent.module.css'
import Image from "next/image";

const SiteContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.site_content}>
        <Image className={styles.image} src="/Frame 427318922.png" alt="" width={150} height={200} />
        <p className={styles.title}>Speaking</p>
      </div>
      <div className={styles.site_content}>
        <Image className={styles.image} src="/Frame 427318923.png" alt="" width={150} height={200} />
        <p className={styles.title}>Listining</p>
      </div>
      <div className={styles.site_content}>
        <Image className={styles.image} src="/Frame 427319153.png" alt="" width={150} height={200} />
        <p className={styles.title}>Reading</p>
      </div>
      <div className={styles.site_content}>
        <Image className={styles.image} src="/Frame 48097381.png" alt="" width={150} height={200} />
        <p className={styles.title}>Writing</p>
      </div>
      <div className={styles.site_content}>
        <Image className={styles.image} src="/Frame 427319150.png" alt="" width={150} height={200} />
        <p className={styles.title}>Vocabulary</p>
      </div>
      <div className={styles.site_content}>
        <Image className={styles.image} src="/Frame 427319151.png" alt="" width={150} height={200} />
        <p className={styles.title}>Classes</p>
      </div>
      <div className={styles.site_content}>
        <Image className={styles.image} src="/Frame 427319154.png" alt="" width={150} height={200} />
        <p className={styles.title}>Book IELTS Exam</p>
      </div>
      <div className={styles.site_content}>
        <Image className={styles.image} src="/Frame 427319114.png" alt="" width={150} height={200} />
        <p className={styles.title}>Student News</p>
      </div>
    </div>
  )
}

export default SiteContent