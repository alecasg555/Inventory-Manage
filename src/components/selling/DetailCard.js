import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { getOrder } from '../../actions/orderActions';
import { useTranslation } from 'react-i18next';



const DetailCard = () => {
  const { orderId } = useParams();
  const order = useSelector(state => state.orders.orderSelected);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder(orderId));
  }, [orderId])

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
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            {order
              ?
              <>
                <Typography variant='h4' align='center'>
                {t('detailsOfOrder' )} N.{order.id}
                </Typography>
                <br />
                <Grid container justifyContent={'center'} alignItems={'center'}>


                  <Grid align='center' item xs={8}>
                  <Box mt={2}>
                      <Typography variant='h5'>{t('orderInfo' )}</Typography>
                    </Box>
                    <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                        <TableCell>{t('totalValue' )}</TableCell>
                        <TableCell>{t('totalValueWithTaxes' )}</TableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody>
                      <TableCell> {order.totalValue}</TableCell>
                      <TableCell>{order.totalValueWithTaxes}</TableCell>
                        
                      </TableBody>
                    </Table>
                    </TableContainer>
                    <Box mt={4}>
                      <Typography variant='h5'>{t('productList' )}</Typography>
                    </Box>
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>{t('name' )}</TableCell>
                            <TableCell>{t('reference' )}</TableCell>
                            <TableCell>{t('amount' )}</TableCell>
                            <TableCell>{t('price' )}</TableCell>
                            <TableCell>{t('tax' )}</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {order.productsList?.map(product => {
                            return <TableRow
                              key={product.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              
                              <TableCell align="center" >
                                <Typography variant="h6" color="initial"> {product.name}</Typography>
                              </TableCell>
                              <TableCell align="center" >
                                <Typography variant="h6" color="initial"> {product.reference}</Typography>
                              </TableCell>
                              <TableCell align="center" >
                                <Typography variant="h6" color="initial"> {product.amount}</Typography>
                              </TableCell>
                              <TableCell align="center" >
                                <Typography variant="h6" color="initial"> {product.price}</Typography>
                              </TableCell>
                              <TableCell align="center" >
                                <Typography variant="h6" color="initial"> {product.tax}</Typography>
                              </TableCell> 
                            </TableRow>
                          })}



                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid container alignItems={'center'} justifyContent={'center'} >
                    <Grid item  >
                      <Box mt={2}>
                        <Button component={Link} to="/orders" color="primary" variant="outlined" align='center'>
                        {t('back' )}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>

                </Grid>
              </>
              : <Typography variant='h4' color={'red'} align='center'>Order Not Found</Typography>}

          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      </Grid>

    </Grid>

  );
}
export default DetailCard;