import React from 'react';
import LayoutTwo from '../layouts/LayoutTwo';

import './style/Dashboard.css';
import Logo from './images/logo.png';

const Dashboard = () =>{
    return (
        <LayoutTwo left={
            <div className="wrapper-dashboard-menu">
                <div className="container-head">
                    <img src={Logo} alt=""/>
                    <p>Lorem ipsum dolor sit.</p>
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
             
            </div>
        }
        right={<h1>hholis</h1>}/>
    );
}

export default Dashboard;