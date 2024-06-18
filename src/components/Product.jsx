import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../store/shopping-cart-context";

export default function Product({ id, image, title, price, description }) {

  const { addItemToCart } = useContext(CartContext);
  
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.article 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
      className="product">

      <motion.img src={image} alt={title} variants={itemVariants} />
      <div className="product-content">
        <div>
          <motion.h3 variants={itemVariants}>
            {title}
          </motion.h3>
          <motion.p className='product-price' variants={itemVariants} >
            ${price}
          </motion.p>
          <motion.p variants={itemVariants} >
            {description}
          </motion.p>
        </div>
        <motion.p className='product-actions' variants={itemVariants} >
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </motion.p>
      </div>
    </motion.article>
  );
}
