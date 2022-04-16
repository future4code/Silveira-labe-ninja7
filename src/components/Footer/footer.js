import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const FooterBonito = styled.footer`
display:flex;
flex-direction:column;
align-items: center;
background: #000000;
width: 100%;
height: 165px;
color:white;

p{
  font-size: 10px;
}
`

const Media = styled.div`
i{
  font-size: 45px;
  margin:15px;
  color:white;
}

`

const P = styled.p`
  margin:5px;

`
export class Footer extends Component {
  render() {
    return (
      <FooterBonito>
        <Media>
        <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"/></a>
        <a href='https://pt-br.facebook.com/'><i class="fa-brands fa-facebook-square"/></a>
        <a href='https://br.linkedin.com/'><i class="fa-brands fa-linkedin"/></a>
        <a href='https://github.com/'><i class="fa-brands fa-github"/></a>
        </Media>
        <P>Site feito por:</P>
        <p>Guilherme Lira</p>
        <p>Fabio Matheus Brito Ferreira</p>
        <p>Jerusa Simone Xavier da Silva</p>
        <p>João Marcos Alves de Aguiar</p>       
      </FooterBonito>
    )
  }
}