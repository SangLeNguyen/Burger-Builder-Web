import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import '../src/components/Burger/BurgerIngredient/BurgerIngredient.css';
import '../src/components/Burger/Burger.css';
import '../src/components/Layout/Layout.css';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
