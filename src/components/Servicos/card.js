import React, { Component } from 'react';
import styled from 'styled-components';







export class Card extends Component {


  render() {

      return (
          <div>
              <hr />
              
              <p>{this.props.nome}</p>
              <p>{this.props.preco}</p>
              <p>{this.props.prazo}</p>
              
              <hr />
          </div>
      )
  }
  }