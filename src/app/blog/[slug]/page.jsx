import styles from "./singlePost.module.css"
import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok){
  throw new Error("Something went wrong");
  }

  return res.json();
}

const SinglePostPage = async ({params}) => {

  const {slug} = params;

    console.log(params)
    const post = await getData(slug);
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
            <Suspense fallback={<div>Loadding...</div>}>
            <PostUser userId = {post.userId}/>
            </Suspense>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.deatialValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>{post.body}</div>
        </div>
      </div>
    );
  };
  
  export default SinglePostPage;