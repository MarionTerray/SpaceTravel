import React from 'react';
import '../css/Header.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HiveIcon from '@mui/icons-material/Hive';

function Header() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

  return (
    <div className='header'>
        <div className='logo'>
        <HiveIcon fontSize='large' className='iconLogo'/>
        </div>
        <div className='lineHeader'>
          <hr />
        </div>

        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize='large' className='menuIcon' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} ><a href='/home'><span>00 </span>Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='/destination'><span>01 </span>Destination</a></MenuItem>  
        <MenuItem onClick={handleClose}>02 Crew</MenuItem>
        <MenuItem onClick={handleClose}>03 Technology</MenuItem>
      </Menu>
      <div className='menuPage'>
        <a href='/home'><span>00 </span>Home</a> 
        <a href='/destination'><span>01 </span>Destination</a> 
        <a href='/crew'><span>02 </span>Crew</a> 
        <a href='/technology'><span>03 </span>Technology</a> 
      </div>
        
        
    </div>
  )
}

export default Header