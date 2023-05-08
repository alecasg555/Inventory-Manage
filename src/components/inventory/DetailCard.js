import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/actions';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const DetailCard = ({ productId }) => {
  const product = useSelector(state => state.products.productSelected);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(productId));
  },[])

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
            {product
              ?
              <>
                <Typography variant='h4' align='center'>
                {t('details')} {t('of')} {product.name}
                </Typography>
                <br />
                <Grid container justifyContent={'center'} alignItems={'center'}>


                  <Grid align='center' item xs={8}>
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableBody>
                          <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row" >
                              <Typography variant="h6" color="initial"> Id</Typography>
                            </TableCell>
                            <TableCell align="left">{product.id}</TableCell>
                          </TableRow>
                          <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <Typography variant="h6" color="initial">{t('name')}</Typography>
                            </TableCell>
                            <TableCell align="left">{product.name}</TableCell>
                          </TableRow>

                          <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <Typography variant="h6" color="initial">{t('reference')}</Typography>
                            </TableCell>
                            <TableCell align="left">{product.reference}</TableCell>
                          </TableRow>

                          <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <Typography variant="h6" color="initial">{t('price')}</Typography>
                            </TableCell>
                            <TableCell align="left">{product.price}</TableCell>
                          </TableRow>

                          <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <Typography variant="h6" color="initial">{t('tax')}</Typography>
                            </TableCell>
                            <TableCell align="left">{product.tax}</TableCell>
                          </TableRow>

                          <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <Typography variant="h6" color="initial">{t('amount')}</Typography>
                            </TableCell>
                            <TableCell align="left">{product.amount}</TableCell>
                          </TableRow>

                          <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <Typography variant="h6" color="initial">{t('description')}</Typography>
                            </TableCell>
                            <TableCell align="left">{product.description}</TableCell>
                          </TableRow>

                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid container alignItems={'center'} justifyContent={'center'} >
                    <Grid item  >
                      <Box mt={2}>
                        <Button component={Link} to="/products" color="primary" variant="outlined" align='center'>
                          {t('back')}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>

                </Grid>
              </>
              : <Typography variant='h4' color={'red'} align='center'>{t('productNotFound')}</Typography>}

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