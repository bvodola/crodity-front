import React from 'react';

const style = {
  container: {
    marginBottom: '10px'
  },
  icon: {
    color: '#ffca43'
  }
}

const Grade = (props) => {

  let { value } = props;
  let stars = [];

  for(let i=0; i<5; i++) {
    if(value-i>=0.75) stars.push('star');
    else if(value-i < 0.75 && value-i >= 0.25) stars.push('star_half');
    else stars.push('star_border');
  }

  return(
    <p style={style.container}>
      {stars.map((star) => (
        <span style={style.icon} className='material-icons'>{star}</span>
      ))}
    </p>
  )
};

export default Grade;
