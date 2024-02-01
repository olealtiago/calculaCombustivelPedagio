import React, { useEffect, useState } from 'react';
import './result.css';

const Result = () => {
    const [consumption, setConsumption] = useState('');
    const [fuelPrice, setFuelPrice] = useState('');
    const [tripType, setTripType] = useState('');
    const [distance, setDistance] = useState('');

    useEffect(() => {
        const loadLocalStorageData = () => {
            const parseLocalStorageItem = (key) => {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : '';
            };

            setConsumption(parseLocalStorageItem('consumo'));
            setFuelPrice(parseLocalStorageItem('fuelPrice'));
            setTripType(parseLocalStorageItem('tripType'));
            setDistance(parseLocalStorageItem('routeDistance'));
        };

        loadLocalStorageData();
    }, []);

    const getDoubledResult = (value) => {
        return tripType === "roundTrip" ? value * 2 : value;
    };

    return (
        <div className="result-component">
            <div className="result-component-title">
                <h6>Informações da Viagem</h6>
            </div>
            <div className="result-component-content">
                <p>Quantidade de Combustível: {getDoubledResult(parseFloat(distance / consumption).toFixed(2))} L</p>
                <p>Custo de Combustível: R$ {getDoubledResult((fuelPrice * (distance / consumption)).toFixed(2))}</p>
            </div>
        </div>
    );
};

export default Result;
