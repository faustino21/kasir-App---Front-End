import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CashierForm } from '../cashier/cashierForm'
import { CashierList } from '../cashier/cashierList'
import { PageNotFound } from './pageNotFound'

export const CashierRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Outlet/>}>
            <Route index element={<CashierList/>}/>
            <Route path='form' element={<CashierForm/>}/>
            <Route path='form/:id' element={<CashierForm/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Route>
    </Routes>
  )
}
