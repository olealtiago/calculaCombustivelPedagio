import React from 'react';
import './calculoForm.css';

import { CalculoBtn } from '../../components';

const CalculoForm = () => {
    return (
        <>
            <div className="container">
                <h1>Informações da Viagem</h1>
                <form id="travelForm">
                    <label for="origin">Cidade de Origem:</label>
                    <input type="text" id="origin" name="origin" required autocomplete="off" />

                    <label for="destination">Cidade de Destino:</label>
                    <input type="text" id="destination" name="destination" required autocomplete="off" />

                    <label for="vehicle">Tipo de Veículo:</label>
                    <select id="vehicle" name="vehicle" required>
                        <option value="car">Carro</option>
                        <option value="motorcycle">Moto</option>
                        <option value="truck">Caminhão</option>
                        <option value="bus">Ônibus</option>
                    </select>

                    <div id="axlesOption" className="hidden">
                        <label for="axles">Quantidade de Eixos:</label>
                        <input type="number" id="axles" name="axles" min="2" />
                    </div>

                    <label for="consumption">Consumo do Veículo (km/l):</label>
                    <input type="number" id="consumption" name="consumption" step="0.1" required />

                    <label for="fuelPrice">Preço do Combustível (R$/litro):</label>
                    <input type="number" id="fuelPrice" name="fuelPrice" step="0.01" required />

                    <label for="tripType">Tipo de Viagem:</label>
                    <select id="tripType" name="tripType" required>
                        <option value="oneWay">Apenas Ida</option>
                        <option value="roundTrip">Ida e Volta</option>
                    </select>

                    {/* <button type="button" onclick="calculate()">Calcular</button> */}
                    <CalculoBtn />
                </form>

                <div id="result" className="hidden">
                    <h2>Resultado:</h2>
                    <p id="resultText"></p>
                </div>
            </div>

            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4ksri_oK8paC1Fn-FDYy60Ukmwupg3WI&libraries=places" />
            <script src="../../scripts/home.js" />
        </>
    )
}

export default CalculoForm;
