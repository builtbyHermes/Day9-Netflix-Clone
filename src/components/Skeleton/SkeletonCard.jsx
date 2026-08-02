import styles from "./SkeletonCard.module.css";


function SkeletonCard() {


  return (

    <article className={styles.card}>


      <div className={styles.image}></div>



      <div className={styles.content}>


        <div className={styles.title}></div>


        <div className={styles.rating}></div>


      </div>


    </article>

  );

}


export default SkeletonCard;