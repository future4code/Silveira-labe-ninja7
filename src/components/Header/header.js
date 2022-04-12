import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';


const HeaderBonito = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 80px;
  align-items: center;
`


export class Header extends Component {
  render() {
    return (
      
        <HeaderBonito>
            <div>
              <button>home</button>
            </div>

            <div>
              <input
              placeholder='Pesquisar'
              />
              <button>Pesquisar</button>
            </div>

            <div>
              <button>carrinho</button>
            </div>
          
        </HeaderBonito>
    )
  }
}