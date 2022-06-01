import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import "./login.css"

const Login = ({bloc}) => {

    const {
        handleVerification
    } = bloc()

    const formik = useFormik({
        initialValues : {
            id: 0,
            passcode : ''
        },
        validationSchema : Yup.object({
            id : Yup.number("Must be a number").required("Cannot be empty"),
            passcode : Yup.string().min(6,"Must be 6 character").max(6,"Must be 6 character").required("Cannot be empty")
        }),
        onSubmit : () => {
            Login()
        }
    })

    const Login =async() => {
        console.log("submit called");
        handleVerification(formik.values)
    }

  return (
    <div className='login main'>
    <form onSubmit={formik.handleSubmit}>
   <div className="d-flex flex-column login container">
       <div className="d-flex align-items-center login containerCenter">
           <div className="d-flex justify-content-end login containerEnd">
               <div className="card w-50 login backgroundColorCard">
                   <div className="card-body">
                   <h2 className="login"><i className="fas fa-unlock-alt"></i> Login Page
                       </h2>
                       <br />
                       <div>
                           <div className={`form-group`}>
                               <label htmlFor="exampleInputusername1">ID</label>
                               <input type="text" className="form-control" id="id" name='id' aria-describedby="usernameHelp" placeholder="Enter your id number"
                                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                {
                                    formik.errors.id && formik.touched.id && (
                                        <small className='text-danger'>{formik.errors.id}</small>
                                    )
                                }
                           </div>
                           <label htmlFor="exampleInputusername1">Password</label>
                           <input type="password" className="form-control" id="Password1"  name='passcode' aria-describedby="usernameHelp" placeholder="Enter password"
                             onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {
                                    formik.errors.passcode && formik.touched.passcode && (
                                        <small className='text-danger'>{formik.errors.passcode}</small>
                                    )
                                }
                       </div>
                       <br></br>
                       <div>
                           <button type="submit"
                               className={`btn btn-primary login inputButtonawesome-button-sm`}><i
                                   className="fas fa-sign-in" ></i> Login</button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   </form>
</div>
  )
}

export default Login;