import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, getProduct } from '../../actions/actions';
import { Box, FormControl, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';



const EditCard = ({ productId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const productSelected = useSelector(state => state.products.products);
  const productFiltered = productSelected.filter(p => p.id == productId)[0];
  const [product, setProduct] = useState(productFiltered);

  /*const [product, setProduct] = useState({
    name: productSelected?.name,
    reference: productSelected?.reference,
    description: productSelected?.description,
    tax: productSelected?.tax,
    price: productSelected?.price,
    amount: productSelected?.amount
  });*/

  const handleInputChange = (e) => {
    console.log(1,productFiltered);
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleEditProduct = () => {
    dispatch(editProduct(product));
    navigate("/products");
  }

  return (
    <Grid
      container
      padding={2}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Grid
        item
        xs={6}
      >
        <Card>
          <CardContent>
            <Typography variant='h4' align='center'>
            {t('edit')} {product.name}
            </Typography>
            <Box mt={3} />

            <Grid
              container
              justifyContent={'center'}
            >
              <Grid
                item
                xs={8}

              >
                <FormControl fullWidth>

                  <TextField value={product.name} onChange={handleInputChange} name="name" label={t('name')} variant="outlined" />
                  <Box mt={2} />
                  <TextField value={product.reference} onChange={handleInputChange} name="reference" label={t('reference')} variant="outlined" />
                  <Box mt={2} />
                  <TextField value={product.description} onChange={handleInputChange} name="description" label={t('description')} variant="outlined" />
                  <Box mt={2} />
                  <TextField value={product.tax} onChange={handleInputChange} name="tax" label={t('tax')} variant="outlined" />
                  <Box mt={2} />
                  <TextField value={product.price} type='number' onChange={handleInputChange} name="price" label={t('price')} variant="outlined" />
                  <Box mt={2} />
                  <TextField value={product.amount} type='number' onChange={handleInputChange} name="amount" label={t('amount')} variant="outlined" />
                  <Box mt={2} />
                </FormControl>

              </Grid>

            </Grid>
            <Grid container alignItems={'center'} justifyContent={'center'} >
              <Grid item  >
                <Box mt={2}>
                  <Button onClick={handleEditProduct} color="primary" variant="outlined" align='center'>
                  {t('edit')}
                  </Button>

                  <Button component={Link} to="/products" color="primary" variant="outlined" align='center'>
                  {t('back')}
                  </Button>
                </Box>
              </Grid>
            </Grid>

          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>

    </Grid>

  );
}
export default EditCard;