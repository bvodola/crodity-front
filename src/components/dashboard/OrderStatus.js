import React from 'react';

const orderStatus = [
  { text: 'Aguardando pagamento', color: '#0081ed'},
  { text: 'Aguardando o envio', color: '#7e7e7e'},
  { text: 'Produto postado', color: '#252f59'},
  { text: 'Produto recebido (aguardando feedback do comprador)', color: '#252f59'},
  { text: 'Processo concluído', color: '#007400'},
  { text: 'Aguardando pagamento', color: '#f10209'}
];

const OrderStatus = (props) => {
  const style = {
    color: orderStatus[props.status].color,
    fontWeight: 'bold'
  };


  return(
    <span style={{ ...style , ...props.style || {}}}>{orderStatus[props.status].text}</span>
  );
};

export default OrderStatus;
