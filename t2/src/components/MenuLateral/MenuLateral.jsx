import React, { useState, useEffect, useRef } from 'react';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import './menuLateral.css';

import { Link } from 'react-router-dom';
import logo from '../../assets/home-icon.png';
import { CalculoFormMap } from '../../components';
import { FaBars } from 'react-icons/fa';


const MenuLateral = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [closingMenu, setClosingMenu] = useState(false);
    const menuRef = useRef(null);

    const handleMenuClose = () => {
        setClosingMenu(true);
        setTimeout(() => {
            setToggleMenu(false);
            setClosingMenu(false);
        }, 200);
    };

    return (
        <div className="calculo__menuLat">
            <div className="calculo__menuLat-btn">
                {toggleMenu
                    ? <RiCloseLine size={27} onClick={handleMenuClose} />
                    : <RiMenuFill size={27} onClick={() => setToggleMenu(true)} />
                }
            </div>

            {
                toggleMenu && (
                    <>
                        <div
                            className={`calculo__menuLat-container ${closingMenu ? 'slide-in-left-menu' : 'slide-in-right'}`}
                        >
                            <div className="calculo__menuLat-container_links">
                                <CalculoFormMap />
                                {/* <a href="">Aaaaaaaaaaaaaaaaa</a> */}
                            </div>
                        </div>
                        {/* <div className={`calculo__menuLat-overlay ${toggleMenu ? 'show' : ''}`} onClick={handleMenuClose}></div> */}
                    </>
                )
            }
        </div>
    )
}

export default MenuLateral;
