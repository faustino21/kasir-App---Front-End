import client from "../../../shared/httpClient/client"


const CashierService = () => {
    const getCashiers = async (params) => {
        const response = await client.get("/cashiers", {params})
        return response
    }
    
    const deleteCashier = async (id) => {
        const res = await client.delete(`/cashiers/${id}`)
        return res
    }
    
    const updateCashier = async (id, data) => {
        const res = await client.put(`/cashiers/${id}` , data)
        return res 
    }
    
    const submitCashier = async (cashier) => {
        await client.post('cashiers', cashier)
    }
    return{
        getCashiers,
        deleteCashier,
        updateCashier,
        submitCashier
    }
}

export default CashierService;
