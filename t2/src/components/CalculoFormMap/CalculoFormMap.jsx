import React from 'react';
import './calculoFormMap.css';

import { CalculoBtn } from '../../components';

const CalculoFormMap = () => {
  return (
    <div className="calculo calculo__mapa">
      <form className="calculo__mapa-forms">
          <label for="origin">Cidade de Origem:</label>
          <input
            type="text"
            id="origin"
            name="origin"
            required
            autocomplete="off"
          />

          <label for="destination">Cidade de Destino:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            required
            autocomplete="off"
          />

          <label for="vehicle">Tipo de Veículo:</label>
          <select id="vehicle" name="vehicle" required>
            <option value="car">Carro</option>
            <option value="motorcycle">Moto</option>
            <option value="truck">Caminhão</option>
            <option value="bus">Ônibus</option>
          </select>

          <label for="consumption">Consumo do Veículo (km/l):</label>
          <input
            type="number"
            id="consumption"
            name="consumption"
            step="0.1"
            required
          />

          <label for="fuelPrice">Preço do Combustível (R$/litro):</label>
          <input
            type="number"
            id="fuelPrice"
            name="fuelPrice"
            step="0.01"
            required
          />

          <label for="tripType">Tipo de Viagem:</label>
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
