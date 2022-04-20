import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

const JobPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: #FF9B1F;

  input{
    width: 100%;
    height: 30px;
    margin: 3px;

  }
  

  button{
    width: 100%;
    height: 50px;
    background-color: black;
    color:white;
    font-size: 18px;
    border:none;
    border-radius: 6px;
    cursor:pointer;
  }
  select {
    width: 100%;
    height: 83px;
  }
  h2{
    text-align:center;
  }
`

const JobDisplay = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  width: 510px;
  border-radius: 6px;
  padding:10px;
  background-color: white ;
  box-shadow: 0px 5px 5px rgba(22, 22, 22, 0.863);
`

export class Cadastro extends Component {
  state = {
    pagAtual: 'Cadastro',
    inputTitle: "",
    inputDescription: "",
    inputPrice: "",
    inputPayment: [],
    inputDate: ""
  }

onChangeTitle = (e) => {
    this.setState({ inputTitle: e.target.value });
};

onChangeDescription = (e) => {
  this.setState({ inputDescription: e.target.value });
};

onChangePrice = (e) => {
  this.setState({ inputPrice: e.target.value });
};

onChangePayment = (e) => {
  let value = Array.from(e.target.selectedOptions, option => option.value)
  this.setState({ inputPayment: value })
};

onChangeDate = (e) => {
  this.setState({ inputDate: e.target.value });
};

createJob = () => {
  const headers = {
    headers: {
        Authorization: "85b665ca-9cb7-4839-a692-5efea90e1fa7"
    }
  }
    const body = {
        title: this.state.inputTitle,
        description: this.state.inputDescription,
        price: Number(this.state.inputPrice),
        paymentMethods: this.state.inputPayment,
        dueDate: this.state.inputDate
    }
    axios
    .post("https://labeninjas.herokuapp.com/jobs", body, headers)
    .then((res) => {
        alert(`O job foi enviado com sucesso!`)
        this.setState({inputTitle: "", inputDescription: "", inputPrice: "", inputPayment: "", inputDate: ""})
    })
        .catch((err) => {
        alert(err.response.data.message)
    })
}

  render() {
    return (
      <div>
      <Header
      mudarParaInicio={this.props.mudarParaInicio}
      mudarParaCarrinho={this.props.mudarParaCarrinho}
      pagAtual={this.props.pagAtual}
      />
      <JobPage>
        <JobDisplay>
        <h2> ADICIONE UM NOVO JOB </h2>
            <input placeholder="Title" type="text" value={this.state.inputTitle} onChange={this.onChangeTitle} />
            <input placeholder="Descrição" type="text" value={this.state.inputDescription} onChange={this.onChangeDescription} />
            <input placeholder="Preço" type="number" value={this.state.inputPrice} onChange={this.onChangePrice} />
            <select value={this.state.inputPayment} onChange={this.onChangePayment} multiple>
                    <option>Cartão de Débito</option>
                    <option>Cartão de Crédito</option>
                    <option>PayPal</option>
                    <option>Boleto</option>
                    <option>Pix</option>
            </select>
            <input placeholder="Data de Expiração" type="date" value={this.state.inputDate} onChange={this.onChangeDate} />
            <button onClick={this.createJob}> Enviar Job </button>
        </JobDisplay>
      </JobPage>
      <Footer />
      </div>
    )
  }
}