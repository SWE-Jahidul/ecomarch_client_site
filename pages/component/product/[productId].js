import React from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const ProductId = router.query.productId;

  return <div>product details {ProductId} </div>;
};

export default ProductDetails;
