import React from 'react';
import LayoutTwo from '../layouts/LayoutTwo';

import './style/Dashboard.css';
import Logo from './images/logo.png';

import Search from  '../components/search/Search';
import Table from '../components/table/Table';

const Dashboard = () =>{
    return (
        <LayoutTwo left={
            <div className="wrapper-dashboard-menu">
                <div className="container-head">
                    <img src={Logo} alt=""/>
                    <h5>PRACTICAS.PE</h5>
                    <p>celestial blink</p>
                </div>
                <div className="container-tables">
                    <button>
                        <i className="fa fa-home" aria-hidden="true"></i>
                        inicio 
                    </button>
                    <button>
                        <i className="fa fa-table" aria-hidden="true"></i>
                        convocatorias 
                    </button>
                    <button>
                        <i className="fa fa-table" aria-hidden="true"></i>
                        ofertas 
                    </button>
                    <button>
                        <i className="fa fa-table" aria-hidden="true"></i>
                        organizaciones 
                    </button> 
                </div>
                <div className="container-actions">
                    <button>
                        <i className="fa fa-book" aria-hidden="true"> </i>
                        resumen
                    </button>
                </div>
            </div>
        }
        right={
            <div className="wrapper-dashboard-content">
                <div className="container-header">
                    <h4>organizaciones</h4>
                    <button>
                        nuevo
                        <i className="fa fa-plus"> </i>
                    </button>
                    <div className="header-center">
                        <Search placeholder={"BUSCAR POR NOMBRE"}/>
                    </div>
                    <div className="header-right">
                        <Search placeholder={"BUSCAR POR ID"}/>

                    </div>
                </div>
                <div className="container-content">
                    <Table/>
                </div>
            </div>
        }
        css={{"backgroundColor":"#ff4c4c"}}
        />
    );
}

export default Dashboard;