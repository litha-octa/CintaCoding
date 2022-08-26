import React from 'react'
import {LoginPic} from "../Asset/image";
import '../Asset/style/login.css'
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <nav>
                <div className={'titleNav'}>cinta coding</div>
                <button className={'btnNav'}>
                    <Link to ='/Login'>
                    Login
                    </Link>
                </button>

            </nav>
            <img src={LoginPic} alt='pic' className={'welPic'}/>
        </div>
    )
}
export default Welcome