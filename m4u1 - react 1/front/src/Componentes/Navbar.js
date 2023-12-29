import React, { useState } from 'react';
import Logo from '../Assets/Logo.svg';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText }  from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


const Navbar = () => {

        const [openMenu,setOpenMenu] = useState(false)
        const menuOptions = [
            {
                text:"Home",
                icon: <HomeIcon />,
            },
            {
                text:"Acerca",
                icon: <InfoIcon />,
            },
            {
                text:"Testimoniales",
                icon: <CommentRoundedIcon />,
            },
            {
                text:"Contacto",
                icon: <PhoneRoundedIcon />,
            },
            {
                text:"Carrito",
                icon: <ShoppingCartRoundedIcon />,
            }
        ]

  return <nav>
    <div className='nav-logo-container'>
        
    </div>
  </nav>;
};

export default Navbar