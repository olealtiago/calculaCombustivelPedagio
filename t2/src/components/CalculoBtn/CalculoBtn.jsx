import React from 'react';
import './calculoBtn.css';

const CalculoBtn = () => {
    return (
        <>
            <div className='btn'>
                <button type="button" onclick="calculate()">Calcular</button>
            </div>
            <script src="../scripts/calculo.js" />
        </>
    )
}

export default CalculoBtn;
