import React from 'react';
import Radium from 'radium';

const mdUp = '@media (min-width: 960px)';
const cardLayout = {
  backgroundColor: '#fff',
  boxShadow: '1px 1px 3px #ddd',
  borderRadius: '2px',
  fontFamily: 'Roboto'
}
const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}
const col = (size) => {
  let defaultCol = {
    position: 'relative',
    float: 'left',
    boxSizing: 'border-box'
  }
  if ( typeof size === 'undefined')
    return {
      ...defaultCol
    }
  else
    return {
      ...defaultCol,
      width: size
    }
}

const style = {
  tableContainer: {
    ...col('100%'),
    [mdUp]: {
      ...cardLayout
    }
  },
  container: {
    ...col('100%'),
    marginBottom: '8px',
    ...cardLayout,
    [mdUp]: {
      display: 'flex',
      boxShadow: 'unset',
      borderRadius: 'unset',
      marginBottom: '0'
    }
  },
  header: {
    ...col('100%'),
    display: 'none',
    fontSize: '12px',
    color: '#ffca43',
    height: '50px',
    [mdUp]: {
      ...flexCenter
    }
  },
  title: {
    ...col('100%'),
    padding: '4px',
    [mdUp]: {
      margin: 'auto',
      padding: '0',
      borderTop: '1px solid #eee',
      borderRight: '1px solid #eee'
    }
  },
  entry: {
    ...col('100%'),
    height: '50px',
    [mdUp]: {
      margin: '0 auto',
      height: 'auto',
    }
  },
  key: {
    ...col('50%'),
    ...flexCenter,
    borderTop: '1px solid #eee',
    borderRight: '1px solid #eee',
    height: '50px',
    fontSize: '12px',
    color: '#ffca43',
    fontWeight: 'bold',
    [mdUp]: {
      display: 'none'
    },
  },

  value: {
    ...col('50%'),
    ...flexCenter,
    borderTop: '1px solid #eee',
    height: '50px',
    fontSize: '12px',
    [mdUp]: {
      height: '100%',
      width: '100%',
      borderRight: '1px solid #eee',
    },
    last: {
      [mdUp]: {
        height: '100%',
        width: '100%',
        borderRight: 'unset',
      }
    }
  }
}

const TableCard = (props) => (
  <div style={style.container}>
    <div style={style.title}>
      {props.title}
    </div>

    {props.data.map((row,i,rows) => {
      const lastValueStyle = (i === rows.length-1 ? style.value.last : {})

      return(
        <div style={style.entry} key={i}>
          <div style={style.key}>
            {row.key}
          </div>
          <div style={{...style.value, ...lastValueStyle }}>
            {row.value}
          </div>
        </div>
      )
    })}
  </div>
);

const RawTableCardContainer = (props) => {

  return(
    <div style={style.tableContainer} className='TableCardContainer'>
      <div style={style.header}>
        {props.headers.map((header,i) => (
          <div key={i} style={style.entry}>{header}</div>
        ))}
      </div>
      {props.children}
    </div>
  )
}

const TableCardContainer = Radium(RawTableCardContainer);
export default Radium(TableCard);
export { TableCardContainer }
