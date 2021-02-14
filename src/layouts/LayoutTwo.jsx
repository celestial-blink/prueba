import React from 'react';

import "./styles/LayoutTwo.css";

const LayoutTwo=({left,right})=>{
    return (
        <div className="wrapper-layout-two">
            <div className="container-left">{left}</div>
            <div className="container-right">{right}</div>
        </div>
    );
}

export default LayoutTwo;