import client from "../../shared/httpClient/client"

export const getCashiers = async (params) => {
    const response = await client.get("/cashiers", {params})
    return response
}

export const deleteCashier = async (param) => {
    await client.delete(`/cashiers/${param}`)
}