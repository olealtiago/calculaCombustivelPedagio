import React, { useState } from 'react';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import './menuLateral.css';

import { CalculoForm } from '../../components';

const MenuLateral = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleMenuClose = () => {
        setToggleMenu((prevToggleMenu) => !prevToggleMenu);
    };

    return (
        <div className="calculo__menuLat">
            <div className="calculo__menuLat-btn">
                {toggleMenu
                    ? <RiCloseLine size={27} onClick={handleMenuClose} />
                    : <RiMenuFill size={27} onClick={handleMenuClose} />
                }
            </div>

            {
                toggleMenu && (
                    <div className="calculo__menuLat-container">
                        <div className="calculo__menuLat-container_forms">
                            <CalculoForm />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MenuLateral;
