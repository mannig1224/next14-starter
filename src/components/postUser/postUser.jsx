import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cashe:"no-store"});
  
//     if (!res.ok){
//     throw new Error("Something went wrong");
//     }
  
//     return res.json();
//   }

const PostUser = async ({userId}) => {

    const user = await getUser(userId);
    console.log("user", user)
    return (
        <div className={styles.container}>
        <div className={styles.title}>
        <span className={styles.username}>{user.username}</span>
      </div>
      </div>
    )

}

export default PostUser