import styles from './postCard.module.css';
import Image from "next/image";
import Link from "next/link";


const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/about.png" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>


            </div>
            <div className={styles.bottom}></div>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque consequatur placeat amet, quisquam voluptates cum ipsum vitae ducimus! Dolorem laboriosam eveniet labore. Aliquam unde voluptas molestias veniam commodi eum!</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>


        </div>
    )
}

export default PostCard;