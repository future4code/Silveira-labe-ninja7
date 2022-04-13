import React, { Component } from 'react';
import styled from 'styled-components';


const Display = styled.div`
  border: solid 1px;
  border-radius: 5px;
  margin: 5px;
  height: 150px;
  text-align: center;
`

const Menu = styled.div`
  
`




export class Card extends Component {


  render() {

      return (
          <Display>
              
              <p>{this.props.nome}</p>
              <p>{this.props.preco}</p>
              <p>{this.props.prazo}</p>
              <Menu>
                  <button>Ver Detalhes</button>
                  <button>Add carrinho</button>
              </Menu>
              
          </Display>
      )
  }
  }