import React, { Component } from 'react';
import {StyleRoot} from 'radium';
import data from './dummy_data.js';

import { default as Theme } from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';

import StoreFront from './components/store/StoreFront.js';

const theme = getMuiTheme({
  palette: {
    primary1Color: '#ffca43'
  }
});

class App extends Component {
  render() {
    return (
      <div style={{background: '#f6f6f6'}}>
        <StyleRoot>
          <Theme muiTheme={theme}>
              <div>
                <AppBar
                  title="Meus Anúncios"
                  iconElementLeft={<IconButton iconClassName="material-icons">arrow_back</IconButton>}
                />
                <div style={{marginTop: '8px'}} className='container'>
                  <StoreFront store={data.store} products={data.products} />
                </div>
            </div>
          </Theme>
        </StyleRoot>
      </div>
    );
  }
}

export default App;
