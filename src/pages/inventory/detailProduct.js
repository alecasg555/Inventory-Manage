import React from 'react'
import DetailCard from '../../components/inventory/DetailCard';
import { useParams } from 'react-router-dom';

const DetailProduct = () =>{
    let { id } = useParams();
    
    return(<DetailCard productId={id} />)
}

export default DetailProduct;