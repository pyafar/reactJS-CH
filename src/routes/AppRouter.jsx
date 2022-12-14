import React from 'react'
import { Routes, Route } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Error404 from '../components/Error404';

const AppRouter = () => {
  return (
    <Routes>
        <Route path={'/'} element = { <ItemListContainer /> } />
        <Route path={'/category/:id'} element = { <ItemListContainer /> } />
        <Route path={'/item/:id'} element = { <ItemDetailContainer/> } />
        <Route path={'*'} element = { <Error404 /> } />
    </Routes>
    
  )
}

export default AppRouter;