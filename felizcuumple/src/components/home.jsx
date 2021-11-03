import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h3>Antes quiero decirte Algo</h3>
            <h5>Que te amo muchisisimooo y que me haces muy feliz siempre</h5>
            <h5>REGALO Del SANTY</h5>
            <Link to="/home">
            <button type="button" className="btn btn-danger">Recibir Regalo</button>
            </Link>
        </div>
    )
}

