import Image from "next/image";

import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder="John Doe" />

          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="JohnDoe@gmail.com" />

          <label htmlFor="">Password</label>
          <input type="password" name="password" placeholder="" />

          <label htmlFor="">Phone</label>
          <input type="phone" name="username" placeholder="+2348102718467" />

          <label htmlFor="">Address</label>
          <textarea type="text" name="address" placeholder="Lagos" />

          <label htmlFor="">Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="">Is Active</label>
          <select name="isactive" id="isactive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
