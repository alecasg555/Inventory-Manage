import React from 'react'
import {  Button, Card, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductSelect from '../../components/selling/ProductSelect';
import ProductSelling from '../../components/selling/ProductSelling';

import { useTranslation } from 'react-i18next';

const SellingProducts = () => {

  const { t, i18n } = useTranslation();

    return(
        <Grid
        container
        padding={2}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid
          item
          xs={8}
        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
  
              <Grid
                container
              >
                <Grid
                  item
                  xs={12}
                >
                  <Button component={Link} to="/products" color="primary" variant="outlined" align='center'>
                    {t('back')}
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <ProductSelect />
  
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <ProductSelling />
  
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
  
      </Grid>
    )
}

export default SellingProducts;