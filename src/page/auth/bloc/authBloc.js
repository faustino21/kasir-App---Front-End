import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const AuthBloc = (authRepository) => {
    const {
        verifyLogin 
    } = authRepository()
    const navigate = useNavigate()
    
    const handleVerification = async (values) => {
        try {
            const res = await verifyLogin(values)
            console.log("return", res);
            sessionStorage.setItem("token", res.data.data.token)
            navigate("/protected", {replace: true})
        } catch (error) {
            swal({
                title: "Unauthorized",
                text: "",
                icon: "error",
                button: "Retry",
              });
        }
    }
    return{
        handleVerification
    }

}

export default AuthBloc;

