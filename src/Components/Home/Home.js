import React from 'react'
import { Movies } from '../Movies/Movie';
import { Search } from '../Search/Search';
import styles from './Home.module.css';

const Home = () => {
  return (
      <div> 
    <div className={styles.HeroContainer}>
        <div className={styles.HeaderContainer}>
            <div className={styles.Logo}>MyTestApp</div>
        </div>

    <div className={styles.HeroText}>
        <h1>Watch something incredible.</h1>
    </div>

    </div>
    <Search/>
    <Movies/>
    </div>
  )
}

export default Home