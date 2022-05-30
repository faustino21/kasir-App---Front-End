import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import CashierAction from '../redux/cashierReducer/cashierAction';
import * as Yup from 'yup'
import { submitCashier, updateCashier } from './services/cashierService';

export const CashierForm = () => {
  let params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cashierRedux = useSelector(state => state.cashier)


  const formik = useFormik({
  initialValues: {
    name : '',
    passcode : ''
  },
  validationSchema : Yup.object({
    name : Yup.string().required("Tidak boleh kosong").min(5, "Minimal 5 karakter"),
    passcode : Yup.string().required("Tida boleh kosong").min(6, "Harus 6 karakter" ).max(6, "Harus 6 karakter")
  }),
  onSubmit : () => {
      if (params.id){
        handleUpdate()
      } else {
        handleAdd()
      }
    }
  })

  useEffect(()=> {
    if(params.id){
    getDataById()
    }
  }, [])

  
  
  const getDataById = () => {
    console.log("test");
      formik.values.name = cashierRedux.name
      formik.setFieldValue(cashierRedux)
  }

  const handleUpdate = async () => {
    try {
      const res = await updateCashier(params.id, formik.values)
      console.log("UPDATE : ", res);
      dispatch({type : CashierAction.RESET})
      navigate("/cashiers")
    } catch (error) {
      console.log("ini handle update", error);      
    }
  }

  const handleAdd = async () => {
    try {
      let res = await submitCashier(formik.values)
      console.log("SUBMIT", res);
      dispatch({type : CashierAction.RESET})
      navigate("/cashiers")
    } catch (error) {
      console.log(error);
    }
  }


  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try{
  //     if (params.id) {
  //       await axios.put(`http://localhost:3000/cashiers/${params.id}`, {
  //         "name" : cashier.name,
  //         "passcode" : cashier.password
  //       }, console.log("PUT CALLED", params))     
  //     } else {
  //       await axios.post('http://localhost:3000/cashiers',{
  //         "name" : cashier.name,
  //         "passcode" : cashier.password
  //       }, console.log("SUBMIT : ", cashier))    
  //     }
  //     dispatch({type : CashierAction.RESET})
  //     console.log("Res : ", cashier);
  //     console.log("Redux reset", cashierRedux);
  //     navigate("/cashiers")
  // } catch(error){
  //     dispatch({type : CashierAction.RESET})
  //     console.error(error);
  //   }
  // }


  
  return (
   <>
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor='name' className="form-label">Cashier Name</label>
        <input name='name' type="text" className="form-control" id='inputName' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.name && formik.touched.name && (
            <small className='text-danger'>{formik.errors.name}</small>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="passcode" className="form-label" >New Password</label>
        <input name='passcode' id='inputPasscode' type="password" className="form-control" value={formik.values.passcode} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.passcode && formik.touched.passcode && (
            <small className='text-danger'>{formik.errors.passcode}</small>
          )
        }
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="button" className="btn btn-primary" onClick={()=> navigate('/cashiers')}>Cancel</button>
    </form>
    </>
  )
}
