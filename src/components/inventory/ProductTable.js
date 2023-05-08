import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/actions';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export const ProductTable = () => {
    const products = useSelector(state => state.products.products);
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    return (
        <Grid
            container
            padding={2}
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
                        {t('productList')}
                </Typography>
                <Box m={3} align='center'>
                    <Button component={Link} to={`/products/create/`} color="primary" variant="contained" align='center'>
                        {t('createProduct')}
                    </Button>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="center">{t('name')}</TableCell>
                                <TableCell align="center">{t('reference')}</TableCell>
                                <TableCell align="center">{t('amount')}</TableCell>
                                <TableCell align="center">{t('options')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.id}
                                    </TableCell>
                                    <TableCell align="center">{product.name}</TableCell>
                                    <TableCell align="center">{product.reference}</TableCell>
                                    <TableCell align="center">{product.amount}</TableCell>
                                    <TableCell align="center">
                                        <Button component={Link} to={`/products/detail/${product.id}`} color="primary" variant="outlined" align='center'>
                                        {t('details')}
                                        </Button>
                                        <Button component={Link} to={`/products/edit/${product.id}`} color="primary" variant="outlined" align='center'>
                                        {t('edit')}
                                        </Button>
                                        <Button component={Link} to={`/products/delete/${product.id}`} color="primary" variant="outlined" align='center'>
                                        {t('delete')}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    );
}

export default ProductTable;