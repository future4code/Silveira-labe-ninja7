import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { PaginaInicial } from './components/PaginaInicial/PaginaInicial';
import { Cadastro } from './components/Cadastro/cadastro'
import { Servicos } from './components/Servicos/servicos'
import { Carrinho } from './components/Carrinho/carrinho'

class App extends React.Component {
	state = {
		pagAtual: 'Servicos'
	}

	mudarParaInicio = () => {
		this.setState({ pagAtual: 'Inicio' })
	}

	mudarParaCadastro = () => {
		this.setState({ pagAtual: 'Cadastro' })
	}

	mudarParaServicos = () => {
		this.setState({ pagAtual: 'Servicos' })
	}

	mudarParaCarrinho = () => {
		this.setState({ pagAtual: 'Carrinho' })
	}

	render() {
		switch (this.state.pagAtual) {
			case 'Inicio':

				return (
					<PaginaInicial
						mudarParaCadastro={this.mudarParaCadastro}
						mudarParaServicos={this.mudarParaServicos}
					/>
				)

			case 'Cadastro':
				return (
					<Cadastro
						mudarParaInicio={this.mudarParaInicio}
						mudarParaServicos={this.mudarParaServicos}
					/>
				)

			case 'Servicos':
				return (
					<Servicos
						mudarParaCarrinho={this.mudarParaCarrinho}
						mudarParaInicio={this.mudarParaInicio}
					/>
				)

			case 'Carrinho':
				return (
					<Carrinho
						mudarParaServicos={this.mudarParaServicos}
					/>
				)

			default:
				return (<h1>Ocorreu um erro</h1>)
		}
	}
}

export default App
