import styles from "./singlePost.module.css"
import Image from "next/image";


const SinglePostPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" 
          alt=""
          fill
          className={styles.img}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image
              className={styles.avatar}
              src="/about.png"
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.deatialValue}>Terry Jefferson</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.deatialValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit doloremque ad, quo enim illo alias exercitationem eveniet recusandae eum vero fuga. At veritatis sapiente voluptatem et? Dolorem, voluptate quas.</div>
        </div>
      </div>
    );
  };
  
  export default SinglePostPage;