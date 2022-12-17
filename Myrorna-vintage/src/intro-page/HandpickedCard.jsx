import React, { useState, useEffect } from 'react'
import axios from "axios";

export default  function HandpickedCard(index) {
    const [products, setProducts] = useState([]);
      useEffect(() => {
     axios
    .get("http://localhost:4000/products")
    .then((res) => {
      setProducts(res.data)
     
    })
    .catch(console.error("err"));
},[]);

const handpickedproducts = products.filter((product)=>product.handpicked)
for(let i=0;i<handpickedproducts.length;i++){
    console.log(handpickedproducts[i]);
    return (
        <section>
            {
           <h1>{handpickedproducts[i]}</h1>
           }
    </section>
    )   

}
    
}

