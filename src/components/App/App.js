import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../Faq/Faq';
import MainLayout from '../MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';
// import Search from '../Search/Search';
// import SearchResults from '../SearchResults/SearchResults';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch 
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/Search/:id' component={SearchResults} />
        <Route exact path='/Search' component={SearchResults} />

      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);


export default App;