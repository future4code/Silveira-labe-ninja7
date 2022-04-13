import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const FooterBonito = styled.footer`
background: #000000;
width: 100%;
height: 80px;
position: absolute;
bottom: 0;
left: 0;
`
export class Footer extends Component {
  render() {
    return (
      <FooterBonito>
        <img src='' href='' alt='' ></img>
        <img src='' href='' alt='' ></img>
        <img src='' href='' alt='' ></img>
        <img src='' href='' alt='' ></img>
        <img src='' href='' alt='' ></img>
      </FooterBonito>
    )
  }
}