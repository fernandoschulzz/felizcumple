import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from "../images/blue-balloon.png"
import style from "./landingpage.module.css"

export default function landingpage() {
    return (
        <div>
            <h1>Bienvenido a </h1>
            <h1>la pagina de </h1>
            <h1>REGALO Del SANTY</h1>
            <Link to="/home">
            <button type="button" className="btn btn-danger">Recibir Regalo</button>
            </Link>
            <div className={style.set}>
                <div className={style.bone1}><img src={pic1} alt="" /></div>
                <div className={style.bone2}><img src={pic1} alt="" /></div>
                <div className={style.bone3}><img src={pic1} alt="" /></div>
                <div className={style.bone4}><img src={pic1} alt="" /></div>
                <div className={style.bone5}><img src={pic1} alt="" /></div>
                <div className={style.bone6}><img src={pic1} alt="" /></div>
                <div className={style.bone7}><img src={pic1} alt="" /></div>
                <div className={style.bone8}><img src={pic1} alt="" /></div>
            </div>
        </div>
    )
}

