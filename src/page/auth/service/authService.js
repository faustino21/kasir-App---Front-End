import client from '../../../shared/httpClient/client'

const AuthService = () => {
  const verifyLogin = async (values)=> {
      const response = await client.post(`cashiers/${values.id}/login`, {passcode : values.passcode})
      console.log("INI RESPONSE", response);
      return response
  }
  return{
      verifyLogin
  }
}

export default AuthService;