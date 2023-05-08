import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsToSell, getProducts, modifyProductToSell } from '../../actions/actions';
import { Alert, Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

const ProductSelect = () => {
  const [productSelected, setproductSelected] = React.useState([]);
  const [productAmount, setproductAmount] = React.useState(1);
  const [hasError, setHasError] = React.useState("");
  const { t, i18n } = useTranslation();
  const products = useSelector(state => state.products.products);
  const productsToSell = useSelector(state => state.products.productsToSell);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }

  }, [products])

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    let value = 0;
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {

        value = parseInt(options[i].value);
      }
    }
    let productFiltered = products.filter(p => p.id === value)[0];
    setproductSelected(productFiltered);
    setproductAmount(1);

  };

  const handleProductAmountSum = () => {
    if (productAmount < productSelected.amount) {
      setproductAmount(productAmount + 1);
    }
  }
  
   
  
  const handleProductAmountRest = () => {
    if (productAmount > 1) {
      setproductAmount(productAmount - 1);
    }
  }

  const handleProductToSell = async () => {

    let productExist = productsToSell.filter(p => p.id === productSelected.id)[0];
    let productFiltered = products.filter(p => p.id === productSelected.id)[0];
    if (productAmount + (productExist?.amount ? productExist?.amount : 0) > productFiltered.amount) {
      return setHasError("notEnoughItems");
    } else if (productExist) {
      const productToModify = [...productsToSell.map(p => {
        if (p.id === productExist.id) {
          return { ...p, amount: productAmount + productExist.amount }
        }
        return p
      })]

      dispatch(modifyProductToSell(productToModify))
    } else {
      const productToAdd = {
        ...productSelected,
        amount: productAmount
      }
      const sellProducts = [...productsToSell, productToAdd];
      dispatch(addProductsToSell(sellProducts))
    }
  }



  return (

    <>
      
      <Typography
        variant="h4"
        gutterBottom
        align="center"
      >
        {t('selectProduct')}
      </Typography>
      <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>

        <InputLabel shrink htmlFor="select-multiple-native">
        {t('selectProduct')}
        </InputLabel>
        <Select
          multiple
          native
          defaultValue={productSelected.id}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label={t('selectProduct')}
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name === "" ? t('noName') : product.name} - {`${product.amount} ${t('left')}`}
            </option>
          ))}
        </Select>
        <Box mt={2} />
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={2}
          >
            <Button sx={{ height: '55px' }} onClick={handleProductAmountRest} color="primary" variant="contained" align='center'>
              <RemoveIcon />
            </Button>
          </Grid>
          <Grid
            item
            xs={8}
          >
            <TextField fullWidth value={productAmount} label={t('amount')} variant="outlined" />

          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button sx={{ height: '55px' }} onClick={handleProductAmountSum} color="primary" variant="contained" align='center'>
              <AddIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid container alignItems={'center'} justifyContent={'center'} >
          <Grid item  >
            <Box mt={2}>
              <Button sx={{ height: '55px' }} onClick={handleProductToSell} color="success" variant="contained" align='center'>
                <AddIcon /> {t('addProduct')}
              </Button>
            </Box>
          </Grid>
        </Grid>
        {hasError !== "" ?
          <Alert
            severity="error"
            color="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setHasError("");
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {t(hasError)}
          </Alert>
          : <></>
        }

      </FormControl>
    </>
  );
}

export default ProductSelect;