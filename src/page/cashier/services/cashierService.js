import client from "../../../shared/httpClient/client"


const CashierService = () => {
    const getCashiers = async (params) => {
        const response = await client.get("/cashiers", {params})
        return response
    }
    
    const deleteCashier = async (id) => {
        await client.delete(`/cashiers/${id}`)
    }
    
    const updateCashier = async (id, data) => {
        await client.put(`/cashiers/${id}` , data) 
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
