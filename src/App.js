import React, { Component } from 'react';

import { default as Theme } from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';

import ProductList from './store/components/ProductList.js';

const theme = getMuiTheme({
  palette: {
    primary1Color: '#ffca43'
  }
});

class App extends Component {
  render() {
    return (
      <Theme muiTheme={theme}>
        <div>
          <AppBar
            title="Meus Anúncios"
            iconElementLeft={<IconButton iconClassName="material-icons">arrow_back</IconButton>}
          />
          <div style={{marginTop: '8px'}} className='container'>
            <ProductList />
          </div>
        </div>
      </Theme>
    );
  }
}

export default App;
