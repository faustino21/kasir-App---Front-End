import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CashierAction from '../redux/cashierReducer/cashierAction'

export const Cashiers = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState({
        limit : 0,
        skip : 0,
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setPage(previousState => {
            return {...previousState, [e.target.name] : e.target.value}
        })
    }

    const toList = ()=>{
        dispatch({type : CashierAction.PAGE, editLimit : page.limit, editSkip : page.skip})
        navigate('list')
    }

  return (
    <div>
        <form className='d-flex flex-column justify-content-center text-center' >
            <h1 className='fs-3 fw-6'>Cashier</h1>
            <div className='m-2'>
                <input name='skip' type='text' className="form-control" placeholder="Start" onChange={handleChange} required/>   
            </div>
            <div className='m-2 justify-self-start'>
                <input name='limit' className="form-control" type='text' placeholder="Limit" onChange={handleChange} required/>
            </div>
            <div className='row'>
                <button type='button' className='btn btn-primary mx-2 my-1' style={{width: "20%"}}
                onClick={toList}>Find</button>    
            </div>             
        </form>
    </div>
  )
}
