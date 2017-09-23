import React from 'react';
import Radium from 'radium';
import data from '../../dummy_data';

import Avatar from '../Avatar';
import Grade from '../Grade';
import Grid from '../Grid';

import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

const Select = styled.select`
  background-color: #ccc
  border: none
  border-radius: 3px
  box-shadow: 1px 1px 3px #aaa
  font: inherit
  padding: 0.5em 2em 0.5em 1em
  margin: 0
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-appearance: none
  -moz-appearance: none
  display: block
  background-image: linear-gradient(45deg, transparent 50%, white 50%), linear-gradient(135deg, white 50%, transparent 50%)
  background-position: calc(100% - 18px) calc(1em + 0px), calc(100% - 9px) calc(1em + 0px)
  background-size: 8px 6px, 9px 7px
  background-repeat: no-repeat
  font-family: 'Roboto'
  color: #fff
  margin-top: 7px
  margin-left: 50%
  transform: translateX(-50%)
`;

const style = {
  container: {
    background: 'rgb(255, 255, 255)',
    borderRadius: '2px',
    padding: '24px',
    boxShadow: '1px 1px 2px #eee',
    marginBottom: '16px',
    '@media(max-width: 600px)': {
      borderRadius: 0,
      boxShadow: 'none',
      margin: '-8px'
    }
  },
  sales: {
    fontSize: '15px'
  },
  slider: {
    container: {
      padding: '0 10px 10px 10px'
    },
    image: {
      width: '100%'
    }
  },
  title: {
    marginBottom: 0,
    fontSize: '27px',
    fontWeight: 'normal'
  },
  price: {
    color: '#ffca43',
    fontSize: '32px',
    fontWeight: 'bold'
  },
  description: {
    color: '#999',
    fontSize: '14px',
    marginBottom: '20px'
  }
}


const SingleProduct = () => {
  let { products, store } = data;
  let product = products[2];

  return(
    <div className='SingleProduct' style={style.container}>
      <div className="row" style={{marginBottom: '10px'}}>
        <div className="col m10">
          <Avatar style={{container: {height: '64px', width: '64px'}}} src={store.avatar} />
          <div className="seller">
            <u>Vendedor</u>
            <p>Paulo Oliveira</p>
          </div>
          <Grade value={4.5} style={{container: {display: 'inline', marginLeft: '10px'}}} />


        </div>
        <div className="col m2">
          <span className="favorite-icon material-icons">favorite_border</span>
        </div>
      </div>

      <div className="row">
        <div className="col m6">
          <div style={style.slider.container}>
            <img style={style.slider.image} src={product.image} alt="" />
          </div>

        </div>
        <div className="col m6">
          <span style={style.sales}>Produto Novo - 22 vendidos</span>
          <h1 style={style.title}>{product.title}</h1>
          <span style={style.price}>{product.price}</span>

          <h3>Detalhes do produto</h3>
          <p style={style.description}>
            - Melhor para: ver todos os tipos possíveis de horário.<br/><br/>
            - Funciona em qualquer país. Basta ajustar o fuso-horário.<br/><br/>
            - Não indicado para menores de 18 anos. Podem não entender o conceito de ponteiros que giram.<br/><br/>
            - Seja diferente. Ver horário no celular já nao é mais tão legal quanto antes.
          </p>
          <div className="row" style={{textAlign: 'center', margin: '40px 0'}}>
            <div className="col s4">
              Tamanhos
              <select className='select' name="" id="">
                <option value="">38</option>
              </select>
            </div>
            <div className="col s4">
              Cor
              <select className='select' name="" id="">
                <option value="">Azul</option>
              </select>
            </div>
            <div className="col s4">
              Quantidade
              <Select className='select' name="" id="">
                <option value="">01</option>
              </Select>
            </div>
          </div>
            <RaisedButton fullWidth label="Comprar" primary={true} style={{height: '92px'}} buttonStyle={{lineHeight: '92px'}} labelStyle={{fontSize: '32px', textTransform: 'none  '}} />

        </div>
      </div>
    </div>
  )
};

export default Radium(SingleProduct);
