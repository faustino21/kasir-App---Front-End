import { Outlet, Route, Routes } from "react-router-dom"
import ProductListBloc from "../page/cashier/bloc/productListBloc"
import { CashierForm } from "../page/cashier/component/cashierForm"
import { CashierList } from "../page/cashier/component/cashierList"
import { Home } from "../layout/home"
import { PageNotFound } from "../layout/pageNotFound"
import CashierService from "../page/cashier/services/cashierService"

const AppRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/cashiers' element={<Outlet/>}>
                <Route index element={<CashierList bloc={() => ProductListBloc(CashierService)}/>}/>
                <Route path='form' element={<CashierForm bloc={() => ProductListBloc(CashierService)}/>}/>
                <Route path='form/:id' element={<CashierForm bloc={() => ProductListBloc(CashierService)}/>}/>
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AppRouters