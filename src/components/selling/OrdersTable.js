import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getOrders } from '../../actions/orderActions';
import { useTranslation } from 'react-i18next';

export const OrdersTable = () => {
  const orders = useSelector(state => state.orders.orders);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders());
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
                    {t('ordersList' )}
                </Typography>
                <Box m={3} align='center'>
                    <Button component={Link} to={`/selling`} color="secondary" variant="contained" align='center'>
                    {t('createOrder' )}
                    </Button>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="center">{t('totalValue' )}</TableCell>
                                <TableCell align="center">{t('totalValueWithTaxes' )}</TableCell>
                                <TableCell align="center">{t('options')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((product) => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.id}
                                    </TableCell>
                                    <TableCell align="center">{product.totalValue}</TableCell>
                                    <TableCell align="center">{product.totalValueWithTaxes}</TableCell>
                                    <TableCell align="center">
                                        <Button component={Link} to={`/orders/detail/${product.id}`} color="primary" variant="outlined" align='center'>
                                        {t('details')}
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

export default OrdersTable;