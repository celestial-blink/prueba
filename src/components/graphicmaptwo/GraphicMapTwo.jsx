import React from 'react';
import './GraphicMapTwo.css';
import logo from './logo.png';

import mapa from './pe.svg';

const GraphicMapTwo = () => {
    return (
        <div className="wrapper-graphic-map-two">
            <div className="graphic-map-two--header">
                <h3 className="wrapper-graphic-two-header--title">PRÁCTICAS EN LIMA</h3>
            </div>
            <div className="wrapper-graphic-map-two__body">
                <h4 className="wrapper-graphic-two-body--title">HAY MÁS DE<span>&nbsp; 500 &nbsp;</span>PUESTOS DE PRÁCTICAS</h4>
                <img src={mapa} alt="mapa del peru" className="map-two__body--map"/>
                <div className="map-two__body-careers">
                    <h4 className="body-title">Plazas para:</h4>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true}>&bull; Lorem.</p>
                </div>
                <div className="map-two__body-entities">
                    <h4 className="body-title">Entidades:</h4>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true} spellCheck="false" >&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true} spellCheck="false" >&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true} spellCheck="false" >&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true} spellCheck="false" >&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true} spellCheck="false" >&bull; Lorem.</p>
                    <p className="body-careers-item" contentEditable="true" suppressContentEditableWarning={true} spellCheck="false" >&bull; Lorem.</p>
                </div>
                <div className="map-two__body-message">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <a href="#link" className="map-two__body-message--link">WWW.PRACTICAS.PE</a>
                </div>
            </div>
            <div className="map-two__footer">
                <span className="map-two__footer--link">
                    <i className="fa fa-globe" aria-hidden="true"> </i>
                    <a href="#link">WWW.PRACTICAS.PE</a>
                </span>
                <span className="map-two__footer--link">
                    <i className="fa fa-facebook-square" aria-hidden="true"> </i>
                    <i className="fa fa-instagram" aria-hidden="true"> </i>
                    <a href="#link">WWW.PRACTICAS.PE</a>
                </span>
            </div>
        </div>
    );
}
 
export default GraphicMapTwo;