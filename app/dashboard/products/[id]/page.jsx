import Image from "next/image";

import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        Product Title
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />

          <label>Price</label>
          <input type="number" name="price" placeholder="JohnDoe@gmail.com" />

          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />

          <label>Color</label>
          <input type="text" name="color" placeholder="red" />

          <label>Size</label>
          <input type="text" name="size" placeholder="Lagos" />

          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>

          <label>Description</label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
