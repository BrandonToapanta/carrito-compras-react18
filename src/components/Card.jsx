import { useState } from "react"
import '../styles/card.css'

export const Card = ({ image, titulo, descripcion, precio, handleAgregar, handleQuitar }) => {

    const [added, setAdded] = useState(false)
    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <div className="tarjeta">
            <img src={image} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titutlo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}</p>
                {added
                    ? <button type="button" className="boton-quitar" onClick={clickQuitar}>Quitar de carrito</button>
                    : <button type="button" className="boton-agregar" onClick={clickAgregar}>Agregar al carrito</button>
                }
            </div>
        </div>
    )
}
