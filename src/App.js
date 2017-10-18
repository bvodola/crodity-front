import React, { Component } from 'react';
import {StyleRoot} from 'radium';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import data from './dummy_data.js';

import { default as Theme } from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';

import StoreFront from './components/store/StoreFront.js';
import SingleProduct from './components/store/SingleProduct.js';
import Profile from './components/social/Profile.js';
import Orders from './components/dashboard/Orders';

const theme = getMuiTheme({
  palette: {
    primary1Color: '#ffca43'
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <StyleRoot>
          <Theme muiTheme={theme}>
              <div>
                <AppBar
                  title="Meus Anúncios"
                  iconElementLeft={<IconButton iconClassName="material-icons">arrow_back</IconButton>}
                />
                <div style={{marginTop: '8px'}} className='container'>
                  <div className="row">
                    <div className="col offset-l3 l8">
                      <Router>
                        <Switch>
                          <Route path='/profile' render={() => <Profile user={data.user} />} />
                          <Route path='/product-list' render={() => <StoreFront store={data.store} products={data.products} />} />
                          <Route path='/single-product' render={() => <SingleProduct product={data.products[0]} />} />
                          <Route path='/orders' render={() => <Orders orders={data.orders} />} />
                        </Switch>
                      </Router>

                    </div>
                  </div>

                </div>
            </div>
          </Theme>
        </StyleRoot>
      </div>
    );
  }
}

export default App;
