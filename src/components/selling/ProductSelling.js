import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { createSell } from '../../actions/actions';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Alert from '../common/Alert';
import { useTranslation } from 'react-i18next';

export const ProductSelling = () => {
    const { t, i18n } = useTranslation();
    const products = useSelector(state => state.products.products);
    const productsToSell = useSelector(state => state.products.productsToSell);
    const [sellCreated, setSellCreated] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
    }, [])
    const calculateTax = (p) => {
        return p.amount > 1 ? (parseFloat(p.price) + ((parseFloat(p.price) * (p.tax / 100)))) * p.amount : parseFloat(p.price) + ((parseFloat(p.price) * (p.tax / 100)));
    }
    const calculateTotal = (productsToSell) => {
        return productsToSell.reduce((a, b) => {
            if (b["amount"] > 1) {
                return a + (b["price"] * b["amount"] || 0)
            } else {
                return a + (b["price"] || 0)
            }
        }, 0)
    }

    const handleCreateSell = () => {
        let valueWithTaxes = 0;
        productsToSell.map(p => {
            valueWithTaxes += calculateTax(p)
        })
        const order = {
            productsList: [...productsToSell],
            totalValue: calculateTotal(productsToSell),
            totalValueWithTaxes: valueWithTaxes
        }
        const cartItems = [...productsToSell.map(ci => {
            const product = products.filter(p => p.id === ci.id)[0];
            return {
                ...ci,
                realProductAmount: parseFloat(product.amount) ?? 0
            }

        })];
        dispatch(createSell({ cartItems: cartItems, order: order }));
        setSellCreated(true);
        setTimeout(() => {
            navigate('/orders')
        }, 2000)

    }

    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={8}>

                <Typography
                    variant="h3"
                    gutterBottom
                    align="center"
                >
                    {t('cart')}
                </Typography>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">{t('name')}</TableCell>
                                <TableCell align="center">{t('amount')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productsToSell.length > 0 ? productsToSell.map((product) => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell align="center">{product.name === "" ? t('noName') : product.name}</TableCell>
                                    <TableCell align="center">{product.amount}</TableCell>

                                </TableRow>
                            )) :
                                <>                        
                                </>
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container alignItems={'center'} justifyContent={'center'} >
                    <Grid item  >
                        <Box mt={2}>
                            <Button align={'center'} onClick={handleCreateSell} variant="contained" color="success">
                            {t('createSell')}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {sellCreated ?
                <Alert isOpen={sellCreated} title={t('sellCreated')} text={t('sellCreatedText')} />
                : <></>
            }
        </Grid>
    );
}

export default ProductSelling;