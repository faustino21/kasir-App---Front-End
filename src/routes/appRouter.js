import { Outlet, Route, Routes } from "react-router-dom"
import { CashierForm } from "../cashier/cashierForm"
import { CashierList } from "../cashier/cashierList"
import { CashierRoute } from "../page/cashiers"
import { Home } from "../page/home"
import { PageNotFound } from "../page/pageNotFound"

const AppRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/cashiers' element={<Outlet/>}>
                <Route index element={<CashierList/>}/>
                <Route path='form' element={<CashierForm/>}/>
                <Route path='form/:id' element={<CashierForm/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Route>

            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AppRouters