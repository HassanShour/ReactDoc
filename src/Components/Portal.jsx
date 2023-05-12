import React from 'react';
import ReactDOM from "react-dom";
import '../index.css';

const Modal_Styles = {
  position: "fixed",
  bottom: 0,
  right: 100,
  width:  50,
  zIndex: 1,
  padding: 20
}

export default function Modal() {

    return ReactDOM.createPortal(

      <div style={Modal_Styles}>
          <img 
          className='areebaLogo'
            src={require('./Areeba.png')} 
            alt="" 
          />
      </div>,
          document.getElementById('portal-root')
    );
  }
 

