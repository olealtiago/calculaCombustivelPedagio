import React from 'react';
import './mapDisplay.css';

const MapDisplay = () => {
    return (
        <div className="calculo calculo__mapa">
            <div class="calculo__mapa-view">
                <div id="map"></div>
            </div>

            <script src="../../scripts/script.js"></script>
            <script src="../../scripts/calculo.js"></script>
            <script src="../../scripts/responsividade.js"></script>
        </div>
    )
}

export default MapDisplay;
