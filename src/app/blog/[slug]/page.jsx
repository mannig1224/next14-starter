import styles from "./singlePost.module.css"
import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({params}) => {

  const {slug} = params;

    const post = await getPost(slug);
    console.log(post)
    return (
      <div className={styles.container}>
        {post.img && <div className={styles.imgContainer}>
          <Image src="/about.png" 
          alt=""
          fill
          className={styles.img}/>
        </div>}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
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
          <div className={styles.content}>{post.desc}</div>
        </div>
      </div>
    );
  };
  
  export default SinglePostPage;