import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

export class Detalhes extends Component {

    render() {
            return (
                <div>
                    <h1> {this.props.titulo} </h1>
                    <p></p>
                </div>
            );
    }
}