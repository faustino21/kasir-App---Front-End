import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ProductListBloc from './bloc/productListBloc'

export const CashierList = () => {
    const navigate = useNavigate()
    const {cashierList, getCashier, handleDelete, paging, handleUpdate, pagination, page, totalData} = ProductListBloc()

    useEffect(()=>{
        getCashier()
    }, [])

   
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
