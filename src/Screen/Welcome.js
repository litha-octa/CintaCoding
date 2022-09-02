import React from 'react'
import {LoginPic} from "../Asset/image";
import '../Asset/style/login.css'
import {Link} from "react-router-dom";
import {Button} from "@chakra-ui/react";

const Welcome = () => {
    return (
        <div>
            <nav>
                <div className={'titleNav'}>cinta coding</div>
                <Link to ='/Login' className={'btnNav'}>
                <Button

                    colorScheme='blue'
                    style={{borderRadius: 30, fontFamily:'arial'}}>
                        Login
                </Button>
                </Link>

            </nav>
            <img src={LoginPic} alt='pic' className={'welPic'}/>
        </div>
    )
}
export default Welcome