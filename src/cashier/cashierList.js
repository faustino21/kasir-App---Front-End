import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CashierAction from '../redux/cashierReducer/cashierAction'
import { deleteCashier, getCashiers } from './services/cashierService'

export const CashierList = () => {
    const [cashierList, setCashierList] = useState([])
    const [totalData, setTotalData] = useState("")
    const page = useSelector(state => state.cashier)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        getCashier()
    }, [])

    const getCashier = async (skip = page.skip) => {
        try {
            const response = await getCashiers({"limit" : page.limit, "skip" : skip*page.limit})
            setCashierList(response.data.data.cashiers)
            setTotalData(response.data.data.meta.total)
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
  return (
    <>
    <button className='btn btn-primary' onClick={()=>navigate('form')}> Add Cashier</button>
    <h2>Cashier List</h2>
    <table className='table table-stipped'>
        <thead>
            <tr>
                <th>#</th>
                <th>Cashier Id</th>
                <th>Cashier Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
                {
                    cashierList.map((data, i) => {
                    return(
                        <tr key={data.cashierId}>
                            <td>{(i + 1)+(page.skip*page.limit)}</td>
                            <td>{data.cashierId}</td>
                            <td>{data.name}</td>
                            <td>
                                <button type='button' className='btn btn-warning' onClick={()=>handleUpdate(data)}>Update</button>
                                <button type='button' className='btn btn-danger' onClick={()=>handleDelete(data)}>Delete</button>
                            </td>

                        </tr>
                    )})
                }
        </tbody>
    </table>
    <Pagination>
        <Pagination.First disabled={!page.skip} onClick={()=> pagination(0)}/>
        <Pagination.Prev disabled={!page.skip} onClick={()=> pagination(page.skip - 1)}/>
        { 
            paging()
        }
        <Pagination.Next disabled={page.skip === Math.ceil(totalData / page.limit)-1} onClick={()=> pagination(page.skip + 1)}/>
        <Pagination.Last disabled={page.skip === Math.ceil(totalData / page.limit)-1} onClick={()=> pagination(Math.ceil(totalData / page.limit)-1)}/>
    </Pagination>
    </>
  )
}
