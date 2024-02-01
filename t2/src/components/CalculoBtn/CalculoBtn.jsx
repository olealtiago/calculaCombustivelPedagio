import React from 'react';
import './calculoBtn.css';
import { useNavigate, useLocation } from 'react-router-dom';

const CalculoBtn = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClickRoute = async () => {
        await props.onClick();
      
        if (location.pathname === '/map') {
          window.location.reload();
        } else {
          navigate('/map');
        }
      }

    return (
        <>
            <div className='btn'>
                <button onClick={handleClickRoute} type="button">Calcular</button>
            </div>
        </>
    )
}

export default CalculoBtn;
