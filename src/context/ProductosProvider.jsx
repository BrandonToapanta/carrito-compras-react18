import { useEffect, useState } from "react"
import { ProductosContext } from "./ProductosContext"

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const results = await fetch('https://fakestoreapi.com/products')
        const data = await results.json()
        setProductos(data)
    }

    useEffect(() => {
        fetchProductos()
    }, [])

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    )
}
