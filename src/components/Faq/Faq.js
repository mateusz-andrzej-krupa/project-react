import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <h2>FAQ</h2>
    <p>Lorem ipsum – tekst składający się z łacińskich i quasi-łacińskich wyrazów, mający korzenie w klasycznej łacinie, wzorowany na fragmencie traktatu Cycerona „O granicach dobra i zła” napisanego w 45 p.n.e. Tekst jest stosowany do demonstracji krojów pisma, kompozycji kolumny itp. -zrodlo: Wikipedia</p>
    <Hero titleText={listData.title} imageURL={listData.image} />
  </Container>
);

export default Faq;