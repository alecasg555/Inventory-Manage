import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditCard from '../../components/inventory/EditCard';
import { getProduct } from '../../actions/actions';
const EditProduct = () =>{
    let { id } = useParams();
 

    return(<EditCard  productId={id} />)
}

export default EditProduct;