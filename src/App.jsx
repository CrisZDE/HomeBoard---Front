import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './App.css'
import { IdeasProvider } from './context/IdeasContext';

function App() {
  return (
    <IdeasProvider>
      <RouterProvider router={router}/>
    </IdeasProvider>
  )
}
export default App
