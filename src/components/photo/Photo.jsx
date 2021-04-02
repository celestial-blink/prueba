import React from 'react';
import './Photo.css';

import logo from './logo.png';

const Photo= ()=>{
    return (
        <div className="wrapper-photo">
            <div className="photo-header">
                <div className="photo-logo">
                    <img className="photo-logo--img" src={logo} alt="logo"/>
                </div>
                <h3 className="photo-logo--title">CONVOCATORIAS DE PRÁCTICAS en el <span>SECTOR PÚBLICO</span></h3>
                <a href="#kink" className="photo-logo-link">WWW.PRACTICAS.PE</a>
            </div>
            <div className="photo__body">
                <div className="photo__body-columns">
                    <span>N° vacantes</span>
                    <span>Instituciones</span>
                    <span>Finaliza</span>
                </div>
                <div className="photo__body-rows">
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                    <span className="photo__body--row">
                        <p>100 plazas</p>
                        <p>Ministerio contra la violencia</p>
                        <p>12 de abril</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Photo;