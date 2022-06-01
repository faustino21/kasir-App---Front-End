import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import CashierAction from "../../../redux/cashierReducer/cashierAction"

const CashierFormBloc = (productRepository) => {

    const {
      updateCashier,
      submitCashier
    } = productRepository()

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleUpdate = async (values) => {
        try {
          const res = await updateCashier(params.id,values)
          console.log("UPDATE : ", res);
          dispatch({type : CashierAction.RESET})
          navigate("..")
        } catch (error) {
          console.log("ini handle update", error);      
        }
      }
    
      const handleAdd = async (values) => {
        try {
          let res = await submitCashier(values)
          console.log("SUBMIT", res);
          dispatch({type : CashierAction.RESET})
          navigate("..")
        } catch (error) {
          console.log(error);
        }
    }

    function handleCancel() {
        dispatch({type : CashierAction.RESET})
        navigate("..")
    }

    return {
        params,
        handleUpdate,
        handleAdd,
        handleCancel
    }
}

export default CashierFormBloc;