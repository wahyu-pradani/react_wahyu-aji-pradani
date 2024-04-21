import { useParams } from "react-router-dom";
import DataUser from "../Product/form-create-product";
import React from 'react';

export default function Detail({data}){
    
    const params = useParams();
    const { id, product_name } = params;
    // const Data = data.find(
    //     (items) => items.id === parseInt(id)
    //   );
    
    return(
        <section>
            <h1>Nomor ID : {id}</h1>
            <h1>Nama Produk : {product_name}</h1>
        </section>
    );
}