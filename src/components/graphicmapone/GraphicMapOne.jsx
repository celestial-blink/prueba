import React from 'react';
import './GraphicMapOne.css'
import logo from './logo.png';

import pe from './pe.svg';

const GraphicMapOne = () => {
    return (
        <div className="wrapper-graphic-map-one">
            <div className="graphic-map-one-content">
                <div className="map-one__header">
                    <div className="map-one__header-logo">
                        <span className="map-one__header-logo-content">
                            <img src={logo} alt="imagen del logo" className="map-one__header--logo"/>
                        </span>
                    </div>
                    <h2 className="map-one__header--title">CONVOCATORIAS DE PRÁCTICAS 2021</h2>
                    <p className="map-one__header--parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. vero tempore itaque?</p>
                    <a href="#link" className="map-one__header--link">WWW.PRACTICAS.PE</a>
                </div>
                <div className="map-one__body">
                    <img src={pe} alt="mapa del perú" className="map-one__body--map"/>
                    <div className="map-one__body-list">
                        <h3 className="map-one__body-list-title">Numero de plazas</h3>
                        <span className="map-one__body--item">
                            <p className="item-main">Lima</p>
                            <p className="item-desc">......total 500 plazas</p>
                        </span>
                        <span className="map-one__body--item">
                            <p className="item-main">Lima</p>
                            <p className="item-desc">......total 500 plazas</p>
                        </span>
                        <span className="map-one__body--item">
                            <p className="item-main">Lima</p>
                            <p className="item-desc">......total 500 plazas</p>
                        </span>
                        <span className="map-one__body--item">
                            <p className="item-main">Lima</p>
                            <p className="item-desc">......total 500 plazas</p>
                        </span>
                        <span className="map-one__body--item">
                            <p className="item-main">Lima</p>
                            <p className="item-desc">......total 500 plazas</p>
                        </span>
                        <span className="map-one__body--item">
                            <p className="item-main">Lima</p>
                            <p className="item-desc">......total 500 plazas</p>
                        </span>
                        <span className="map-one__body--item">
                            <p className="item-main">Lima</p>
                            <p className="item-desc">......total 500 plazas</p>
                        </span>
                        <span className="map-one__body--item">
                            <p className="item-main">Lima</p>
                            <p className="item-desc">......total 500 plazas</p>
                        </span>
                        <span className="map-one__body--item">
                            <p className="item-main">Lima</p>
                            <p className="item-desc">......total 500 plazas</p>
                        </span>
                    </div>
                    <div className="map-one__date">
                        <p>Actualizado al <span className="date-main">12 de febrero</span> del 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GraphicMapOne;