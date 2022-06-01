import { Outlet, Route, Routes } from "react-router-dom"
import { CashierForm } from "../page/cashier/component/cashierForm"
import { CashierList } from "../page/cashier/component/cashierList"
import { Home } from "../layout/home"
import { PageNotFound } from "../layout/pageNotFound"
import CashierService from "../page/cashier/services/cashierService"
import CashierListBloc from "../page/cashier/bloc/productListBloc"
import CashierFormBloc from "../page/cashier/bloc/productFromBloc"

const AppRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='cashiers' element={<Outlet/>}>
                <Route index element={<CashierList bloc={() => CashierListBloc(CashierService)}/>}/>
                <Route path='form' element={<CashierForm bloc={() => CashierFormBloc(CashierService)}/>}/>
                <Route path='form/:id' element={<CashierForm bloc={() => CashierFormBloc(CashierService)}/>}/>
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AppRouters