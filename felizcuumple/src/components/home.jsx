import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h3>Antes quiero decirte Algo</h3>
            <h5>primero perdon por atrasar el reagalo.🤪 jajaja Pero antes Tarde que nunca Y Finalmente lo mas importante que te quiero decir es Que te amo muchisisimooo de Verdad y que me haces muy feliz siempre😍😍😍</h5>
            <h5>Soos lo mejor del Universo🌟</h5>
            <Link to="/home">
            <button type="button" className="btn btn-danger">Ahora si Recibir Regalo 🎁</button>
            </Link>
        </div>
    )
}

