import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ShoppingListsWrapper } from "./components/ShoppingListsWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <div className="App">
      <ShoppingListsWrapper />
    </div>
  );
}
