import React from 'react'
import DetailCard from '../../components/inventory/DetailCard';
import { useParams } from 'react-router-dom';
import DeleteCard from '../../components/inventory/DeleteCard';

const DeleteProduct = () =>{
    let { id } = useParams();
    
    return(<DeleteCard productId={id} />)
}

export default DeleteProduct;