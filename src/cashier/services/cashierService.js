import client from "../../shared/httpClient/client"

export const getCashiers = async (params) => {
    const response = await client.get("/cashiers", {params})
    return response
}

export const deleteCashier = async (id) => {
    await client.delete(`/cashiers/${id}`)
}

export const updateCashier = async (id, data) => {
    await client.put(`/cashiers/${id}` , data) 
}

export const submitCashier = async (cashier) => {
    await client.post('cashiers', cashier)
}