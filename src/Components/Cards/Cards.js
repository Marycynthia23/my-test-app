import React from 'react'
import styles from './Cards.module.css';


const Cards = (props) => {
  return (
    <div className={styles.Cards}>
    <img src={props.imgSrc}/>
    <div className={styles.CenteredText}>{props.name}</div>
    </div>
  )
}

export default Cards