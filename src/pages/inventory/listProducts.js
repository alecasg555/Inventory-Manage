import React, {useEffect} from 'react'
import {  useDispatch } from 'react-redux';
import { getProducts } from '../../actions/actions';
import ProductTable from '../../components/inventory/ProductTable';

const ListProducts = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getProducts());
    }, [])
    
    return(<ProductTable />)
}

export default ListProducts;