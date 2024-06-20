import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

import CalHeading from './components/calHeading';
import Calculator from './components/calculator';

ReactDom.render(
  <div className='calculator'>
    <CalHeading/>
    <Calculator/>
  </div>
,document.getElementById("root"));