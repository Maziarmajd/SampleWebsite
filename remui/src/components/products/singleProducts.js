import { useEffect, useState } from "react";
import {
  ExtraActionsWrapper,
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
  ProductMetaWrapper,
} from "../../styles/product";


export default function SingleProducts({product, matches}){
    
    
    return (
<Product>
    <ProductImage src={product.image} />
    
</Product>
    )

}