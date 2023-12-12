import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from '.';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    backgroundColor: '#fff', // adjust color
    height: '80px', // increased height
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333', // adjust color
    padding: '10px 20px',
    border: '1px solid #333', // border for rectangle
    borderRadius: '5px', // optional for rounded corners
  };

  const cartIconStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
  };

  const cartQtyStyle = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: 'red', // adjust color
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.8rem',
  };

  return (
    <div style={navbarStyle}>
      <Link href="/">
        <a style={logoStyle}>BizDelicious</a>
      </Link>

      <button style={cartIconStyle} onClick={() => setShowCart(true)} aria-label="View Cart">
        <AiOutlineShopping size={24} />
        <span style={cartQtyStyle}>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar;
