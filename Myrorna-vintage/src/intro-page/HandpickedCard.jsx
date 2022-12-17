import React, { useState, useEffect } from 'react'
import axios from "axios";

export default  function HandpickedCard() {
    const [products, setProducts] = useState([]);
      useEffect(() => {
     axios
    .get("http://localhost:4000/products")
    .then((res) => {
      setProducts(res.data)
    })
    .catch(console.error("err"));
},[]);
    return (
        <section>
            {
                products.map((product)=>{
                    console.log(product)
                    if(product.Handpicked){
                        return (  
                            <h1>{product.brandName} {product.type}</h1>
                            )
                    }
              
})
            }
        </section>
    )
}

