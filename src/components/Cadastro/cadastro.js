
import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

export class Cadastro extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Cadastro</h1>
        <Footer />
      </div>
    )
  }
}