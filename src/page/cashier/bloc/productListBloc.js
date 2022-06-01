import { useState } from "react"
import { Pagination } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CashierAction from "../../../redux/cashierReducer/cashierAction"


// Bloc digunakan untuk memisahkan logic dan screen pada sebuah component

const CashierListBloc = (cashierRepository) => {

    let {
        getCashiers,
        deleteCashier,
    } = cashierRepository()

    const [loading, setLoading] = useState(true)
    const [cashierList, setCashierList] = useState([])
    const [totalData, setTotalData] = useState("")
    const page = useSelector(state => state.cashier)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getCashier = async (skip = page.skip) => {
        try {
            setLoading(true)
            const response = await getCashiers({"limit" : page.limit, "skip" : skip*page.limit})
            setCashierList(response.data.data.cashiers)
            setTotalData(response.data.data.meta.total)
            setLoading(false)
        } catch (error) {
            console.error(error, "error")
        }
    }

    const handleDelete = async (e) => {
        if (window.confirm(`are you sure want to delete ${e.name}`)) {
            deleteCashier(e.cashierId)
            getCashier()
        } else {
            getCashier()            
        }
    }

    const paging = () => {
        return Array(Math.ceil(totalData / page.limit)).fill().map((_, i) => {
                return(
                    <Pagination.Item key={i}active={page.skip === i} onClick={()=> pagination(i)}>{i+1}</Pagination.Item>
                )
            })
    }

    const handleUpdate = (data) => {  
        dispatch({ 
            type : CashierAction.UPDATE, newName : data.name
        }, console.log("handle update", data))
        navigate(`form/${data.cashierId}`)
    }

    const pagination = (page) =>{
        dispatch({type : CashierAction.PAGE, editSkip : page})
        getCashier(page)
    }

    return {cashierList, 
        getCashier, 
        handleDelete, 
        paging, 
        handleUpdate, 
        pagination, 
        page, 
        totalData,
        loading
    }
}


export default CashierListBloc;