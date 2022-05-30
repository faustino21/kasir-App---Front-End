import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import CashierAction from '../redux/cashierReducer/cashierAction';

export const CashierForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cashierRedux = useSelector(state => state.cashier)
  const [cashier, setCashier] = useState({
    name : '',
    password : ''
  })

  useEffect(()=> {
    getDataById()
  }, [])

  let params = useParams()
  console.log("Ini dari params : ",params);
  console.log("ini dari redux : ", cashier);
  
  const getDataById = () => {
      setCashier({
        name : cashierRedux.name,
        password : cashierRedux.password
      })
  }

  const handleChange = (e) => {
    setCashier(previousState => {
      return {...previousState,
          [e.target.name] : e.target.value
      }
    }, console.log(e.target.value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      if (params.id) {
        await axios.put(`http://localhost:3000/cashiers/${params.id}`, {
          "name" : cashier.name,
          "passcode" : cashier.password
        }, console.log("PUT CALLED", params))     
      } else {
        await axios.post('http://localhost:3000/cashiers',{
          "name" : cashier.name,
          "passcode" : cashier.password
        }, console.log("SUBMIT : ", cashier))    
      }
      dispatch({type : CashierAction.RESET})
      console.log("Res : ", cashier);
      console.log("Redux reset", cashierRedux);
      navigate("/cashiers")
  } catch(error){
      dispatch({type : CashierAction.RESET})
      console.error(error);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor='name' className="form-label">Cashier Name</label>
        <input name='name' type="text" className="form-control" onChange={handleChange} value={cashier.name}/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label" >New Password</label>
        <input name='password' type="password" className="form-control" onChange={handleChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="button" className="btn btn-primary" onClick={()=> navigate('/cashiers')}>Cancel</button>
    </form>
  )
}
