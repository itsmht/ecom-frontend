import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductDetails = () => {
    const[productDetails,setProductDetails] = useState({});
    const { id } = useParams();
    const detailsId = parseInt(id);
    // console.log(detailsId);

    useEffect(()=>{
        fetch(`https://corp.glbpowerplant.com/api/homepageProducts/${detailsId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    },[detailsId])

  return (
    <div>dkjkdkfkj</div>
  )
}

export default ProductDetails