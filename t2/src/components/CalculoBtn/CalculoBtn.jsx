import React from 'react';
import './calculoBtn.css';
import { useNavigate } from 'react-router-dom';

const CalculoBtn = () => {
    const navigate = useNavigate();

    const handleClickRoute = () => {
        navigate('/map');
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
