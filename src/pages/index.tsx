import styles from '../styles/pages/Home.module.css'
import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile";
import {CompletedChallenges} from "../components/CompletedChallenges";
import {Conuntdown} from "../components/Countdown";

import Head from "next/head";

export default function Home() {
  return (
      <div className={styles.container}>
          <Head>
              <title>Início | move.it</title>
          </Head>

         <ExperienceBar />

         <section>
             <div>
                 <Profile />
                 <CompletedChallenges />
                 <Conuntdown />
             </div>
             <div></div>
         </section>
      </div>
  )
}
