import React from 'react';

const style = {
  container: {
    padding: '10px',
    margin: '8px 0 0 0',
    fontSize: '20px'
  },
  icon: {
    color: '#ffca43',
    transform: 'translateY(16%)',
    marginRight: '5px'
  },
  subtitle: {
    color: '#aaa',
    fontSize: '12px',
    marginLeft: '5px'
  }
}

const CardTitle = (props) => (
  <p style={style.container}>
    <span style={style.icon} className="material-icons">{props.icon}</span>
    {props.title}
    <span style={style.subtitle}>{props.subtitle}</span>
  </p>
);

export default CardTitle;
