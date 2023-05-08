import React, {useEffect} from 'react'
import {  useDispatch } from 'react-redux';
import { getProducts } from '../../actions/actions';
import CreateCard from '../../components/inventory/CreateCard';

const CreateProduct = () =>{
    
    return(<CreateCard />)
}

export default CreateProduct;