import React from 'react';
import './calculoFormMap.css';

import { CalculoBtn } from '../../components';

const CalculoFormMap = () => {
  return (
    <div className="calculo calculo__mapa">
      <form className="calculo__mapa-forms">
          <label htmlFor="origin">Cidade de Origem:</label>
          <input
            type="text"
            id="origin"
            name="origin"
            required
            autoComplete="off"
          />

          <label htmlFor="destination">Cidade de Destino:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            required
            autoComplete="off"
          />

          <label htmlFor="vehicle">Tipo de Veículo:</label>
          <select id="vehicle" name="vehicle" required>
            <option value="car">Carro</option>
            <option value="motorcycle">Moto</option>
            <option value="truck">Caminhão</option>
            <option value="bus">Ônibus</option>
          </select>

          <label htmlFor="consumption">Consumo do Veículo (km/l):</label>
          <input
            type="number"
            id="consumption"
            name="consumption"
            step="0.1"
            required
          />

          <label htmlFor="fuelPrice">Preço do Combustível (R$/litro):</label>
          <input
            type="number"
            id="fuelPrice"
            name="fuelPrice"
            step="0.01"
            required
          />

          <label htmlFor="tripType">Tipo de Viagem:</label>
          <select id="tripType" name="tripType" required>
            <option value="oneWay">Apenas Ida</option>
            <option value="roundTrip">Ida e Volta</option>
          </select>

          {/* <button type="button" onclick="calculate()">Calcular</button> */}
          <CalculoBtn />
        </form>
    </div>
  )
}

export default CalculoFormMap;
