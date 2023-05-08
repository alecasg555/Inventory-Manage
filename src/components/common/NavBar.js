import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const pages = ['Products', 'Orders'];

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageEs = () =>{
      i18n.changeLanguage('es')  ;  
  }
  const handleLanguageEn = () =>{
      i18n.changeLanguage('en');
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            InventoryManage
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            InventoryManage
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Box key={page} m={2}>
              <Typography
                component="a"
                href={`/${page}`}
                
                sx={{ my: 2, color: 'white', display: 'block',textDecoration:'none' }}
              >
                {page}
              </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0,display:'grid',gridTemplateColumns:'1fr 1fr' }}>
            <Typography sx={{cursor:'pointer'}} m={2} onClick={handleLanguageEs}>
              Espanol
            </Typography>
            <Typography sx={{cursor:'pointer'}} m={2} onClick={handleLanguageEn}>
              English
            </Typography>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;