import React from 'react';
import Radium from 'radium';

const web = '@media(min-width: 992px)';

const style = {
  container: {
    padding: '8px',
    height: '30px',
    textAlign: 'right'
  },
  inputContainer: {
    position: 'relative',
    display: 'inline'
  },
  input: {
    width: '100%',
    outline: 'none',
    fontSize: '13px',
    height: '22px',
    textIndent: '27px',
    border: 0,
    fontFamily: 'Roboto',
    marginTop: '-2px',
    [web]: {
      background: '#eee',
      padding: '4px 7px 7px 7px',
      borderRadius: '4px',
      width: '300px'
    }
  },
  searchIcon: {
    color: '#ddd',
    float: 'left',
    position: 'absolute',
    [web]: {
      left: '5px',
      top: '-2px'
    }
  },
  filterIcon: {
    display: 'none',
    color: '#ffca43',
    float: 'right',
    position: 'relative',
    marginLeft: '5px',
    [web]: {
      display: 'inline'
    }
  }
}

const SearchBox = (props) => {
  return(
    <div style={style.container}>
      <div style={style.inputContainer}>
        <span style={style.searchIcon} className='material-icons'>search</span>
        <input placeholder='Pesquisar em meus anúncios' type="text" style={style.input} />
      </div>
      <span style={style.filterIcon} className='material-icons'>filter_list</span>
    </div>
  );
}

export default Radium(SearchBox);
