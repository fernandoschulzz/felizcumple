import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from "../images/blue-balloon.png"
import style from "./home.module.css"

export default function Home() {
    return (
        <div className={style.back}>
            <h3>Antes quiero decirte Algo</h3>
            <h5>Que te amo muchisisimo y que me haces muy feliz siempre</h5>
            <h5>REGALO Del SANTY</h5>
            <Link to="/home">
            <button type="button" className="btn btn-danger">Recibir Regalo</button>
            </Link>
        </div>
    )
}

