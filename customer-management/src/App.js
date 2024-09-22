import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CustomerList />} />
      <Route path="/customers/new" element={<CustomerForm />} />
      <Route path="/customers/edit/:id" element={<CustomerForm />} />
    </Routes>
  </Router>
);

export default App;
