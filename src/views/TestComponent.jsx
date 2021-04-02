import React from 'react';

import GraphicMapOne from '../components/graphicmapone/GraphicMapOne';

import GraphicMapTwo from '../components/graphicmaptwo/GraphicMapTwo';

import Photo from '../components/photo/Photo';

const TestComponent = () => {
    return (
    <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#414141'}}>
        <Photo/>
    </div> );
}
 
export default TestComponent;