import React, { useState, useEffect } from 'react';
import './calculoForm.css';
import axios from 'axios';

import { CalculoBtn } from '../../components';

const CalculoForm = () => {
  const [originCity, setOriginCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const fetchCitySuggestions = async (input, setSuggestions) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${input}&key=d7d221a79db147f7a041e3f28dcc9ca0&limit=5`
      );

      const suggestions = response.data.results.map((result) => result.formatted);
      setSuggestions(suggestions);
    } catch (error) {
      console.error('Error fetching city suggestions:', error);
    }
  };

  const handleOriginChange = (event) => {
    const input = event.target.value;
    setOriginCity(input);
    fetchCitySuggestions(input, setOriginSuggestions);
  };

  const handleDestinationChange = (event) => {
    const input = event.target.value;
    setDestinationCity(input);
    fetchCitySuggestions(input, setDestinationSuggestions);
  };

  const handleSuggestionClick = (city, setCity, setSuggestions) => {
    setCity(city);
    // Limpar as sugestões ao selecionar uma
    setSuggestions([]);
  };

  const saveCoordinatesToLocalStorage = (key, coordinates) => {
    localStorage.setItem(key, JSON.stringify(coordinates));
  };

  const handleSaveClick = async () => {
    try {
      const originCoordinates = await fetchCoordinatesForCity(originCity);
      const destinationCoordinates = await fetchCoordinatesForCity(destinationCity);
  
      // Salvar as coordenadas se estiverem disponíveis
      if (originCoordinates && destinationCoordinates) {
        saveCoordinatesToLocalStorage('originCoordinates', originCoordinates);
        saveCoordinatesToLocalStorage('destinationCoordinates', destinationCoordinates);
  
        console.log('Coordenadas salvas com sucesso!');
        
        // Recarregar a página após salvar as coordenadas
        window.location.reload();
      } else {
        console.error('Não foi possível obter as coordenadas para uma ou ambas as cidades.');
      }
    } catch (error) {
      console.error('Erro ao buscar coordenadas:', error);
    }
  };
  

  const fetchCoordinatesForCity = async (city) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=d7d221a79db147f7a041e3f28dcc9ca0&limit=1`
      );

      const result = response.data.results[0];

      if (result) {
        const coordinates = {
          latitude: result.geometry.lat,
          longitude: result.geometry.lng
        };

        return coordinates;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching coordinates for city:', error);
      return null;
    }
  };
  return (
    <div className="calcForm calcForm__mapa">
      <form className="calcForm__mapa-forms">
        <label htmlFor="origin">Cidade de Origem:</label>
        <input
          type="text"
          id="origin"
          name="origin"
          value={originCity}
          onChange={handleOriginChange}
          required
          autoComplete="off"
        />
        {originSuggestions.length > 0 && (
          <div className="suggestion-container">
            {originSuggestions.map((city, index) => (
              <div
                key={index}
                className="suggestion"
                onClick={() => handleSuggestionClick(city, setOriginCity, setOriginSuggestions)}
              >
                {city}
              </div>
            ))}
          </div>
        )}

        <label htmlFor="destination">Cidade de Destino:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={destinationCity}
          onChange={handleDestinationChange}
          required
          autoComplete="off"
        />
        {destinationSuggestions.length > 0 && (
          <div className="suggestion-container">
            {destinationSuggestions.map((city, index) => (
              <div
                key={index}
                className="suggestion"
                onClick={() => handleSuggestionClick(city, setDestinationCity, setDestinationSuggestions)}
              >
                {city}
              </div>
            ))}
          </div>
        )}

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

        <button type="button" className="btn" onClick={handleSaveClick}>
          Calcular
        </button>
        {/* <CalculoBtn /> */}
      </form>
    </div>
  );
};

export default CalculoForm;
