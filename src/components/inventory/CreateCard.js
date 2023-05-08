import React, { useEffect,useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, getProduct } from '../../actions/actions';
import { Box, FormControl, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';



const CreateCard = () => {
  const dispatch = useDispatch();    
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [product,setProduct] = useState({
      "name": "",
      "reference": "",
      "description": "",
      "price": 0,
      "tax": "",
      "amount": 1
    })

  useEffect(() => {
  })

  const handleInputChange = (e) =>{
    setProduct({
      ...product,
      [e.target.name]:e.target.value
    })
  }

  const handleCreateProduct = () => {
    dispatch(createProduct(product));
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
            {t('createProduct')}
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

                  <TextField onKeyUp={handleInputChange} name="name" label={t('name')} variant="outlined" />
                  <Box mt={2} />
                  <TextField onKeyUp={handleInputChange} name="reference" label={t('reference')} variant="outlined" />
                  <Box mt={2} />
                  <TextField onKeyUp={handleInputChange} name="description" label={t('description')} variant="outlined" />
                  <Box mt={2} />
                  <TextField onKeyUp={handleInputChange} name="tax" label={t('tax')} variant="outlined" />
                  <Box mt={2} />
                  <TextField type='number'  onKeyUp={handleInputChange} name="price" label={t('price')} variant="outlined" />
                  <Box mt={2} />
                  <TextField type='number'  onKeyUp={handleInputChange} name="amount" label={t('amount')} variant="outlined" />
                  <Box mt={2} />
                </FormControl>

              </Grid>
              
            </Grid>
            <Grid container alignItems={'center'} justifyContent={'center'} >
              <Grid item  >
                <Box mt={2}>
                  <Button onClick={handleCreateProduct}  color="primary" variant="outlined" align='center'>
                  {t('create')}
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
export default CreateCard;