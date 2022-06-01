import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import * as Yup from 'yup'

export const CashierForm = ({bloc}) => {
  const cashierRedux = useSelector(state => state.cashier)
 
  const {
    params,
    handleUpdate,
    handleAdd,
    handleCancel
  } = bloc()

  const formik = useFormik({
  initialValues: {
    name : '',
    passcode : ''
  },
  validationSchema : Yup.object({
    name : Yup.string().required("Tidak boleh kosong"),
    passcode : Yup.string().required("Tida boleh kosong").min(6, "Harus 6 karakter" ).max(6, "Harus 6 karakter")
  }),
  onSubmit : () => {
      if (params.id){
        handleUpdate(formik.values)
      } else {
        handleAdd(formik.values)
      }
    }
  })

  useEffect(()=> {
    getDataById()
  }, [])

  
  const getDataById = () => {
    console.log("test");
    formik.values.name = cashierRedux.name
    formik.setFieldValue(cashierRedux)
  }
  
  return (
   <>
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor='name' className="form-label">Cashier Name</label>
        <input name='name' type="text" className="form-control" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.name && formik.touched.name && (
            <small className='text-danger'>{formik.errors.name}</small>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="passcode" className="form-label" >New Password</label>
        <input name='passcode' type="password" className="form-control" value={formik.values.passcode} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.passcode && formik.touched.passcode && (
            <small className='text-danger'>{formik.errors.passcode}</small>
          )
        }
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="button" className="btn btn-primary" onClick={()=>handleCancel()}>Cancel</button>
    </form>
    </>
  )
}
