import BasicLineChart from "@/components/linechart/Linechart";
import styles from "./page.module.css";
import ShareApp from "@/components/shareApp/ShareApp";
import SiteContent from "@/components/siteContent/SiteContent";
import Image from "next/image";
import PremiumCard from "@/components/premiumCard/PremiumCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Your Progress Summary</h5>
      <div className={styles.section}>
        <div className={styles.chart_container}>
          <div className={styles.chart_pills}>
            <p><span>Wow!</span>you are about to reach your targeted band</p>
          </div>
          <BasicLineChart/>
        </div>
        <ShareApp/>
      </div>
      <div className={styles.section}>
        <PremiumCard className='hide-on-large'/>
      </div>
      <h5 className={styles.title}>Prepage with ease</h5>
      <div className={styles.section}>
        <SiteContent/>
        <div className={styles.app_container}>
          <div className={styles.guide_container}>
            <Image src="/youtube (8) 1.png" alt="" width={25} height={25}/>
            <p>App Guide Video</p>
          </div>
          <div className={styles.mock_container}>
            <h4>Practice Mock Tests</h4>
            <p>Get the authentic IELTS exam experience with all four modules covered!</p>
            <button>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}
