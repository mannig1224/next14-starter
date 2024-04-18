import Image from "next/image";
import styles from "./contact.module.css"

const ContactPage = () => {

  console.log("it works here!")
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
                  <Image
                    src="/contact.png"
                    alt="Contact Image"
                    fill
                    className={styles.img}
                  />
          </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="text" placeholder="Name and Last Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (Optional" />
            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button>Send Message</button>
          </form>
        </div>


      </div>
    )
  };
  
  export default ContactPage;