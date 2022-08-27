import React, {useEffect, useState} from 'react'
import '../Asset/style/login.css'
import {Button, Input} from "@chakra-ui/react";
import {getUser} from "../Asset/url";
import axios from "axios";
import {Link} from "react-router-dom";

const Login = () => {
    const [allUser, setAllUser] = useState([])
    const [username, setUsername] = useState()
    const [password, setPassword]= useState()


    useEffect(()=>{
        axios
            .get(getUser)
            .then((res)=>{
                setAllUser(res.data)
                console.log(res.data)
                })
            .catch((err)=>{
                console.log(err)
            })
        if(username !== password){
            console.log (username, 'oke')
        } else {console.log('err')}


    }, [])
    return(
        <div className={'body'}>
            <div className={'form'}>
                <div className={'form-name'}>Login Page</div>
                <Input variant='outline'
                       placeholder='Username'
                       style={{borderRadius: 30, marginBottom : '10%',fontFamily:'arial'}}
                       _placeholder={{textAlign:'center',fontFamily:'arial'}}
                       value={username}
                       onChange={(e)=>{
                           setUsername(e.target.value)
                           console.log(username)

                       }}
                />
                <Input
                        variant='outline'
                       placeholder='Password'
                       style={{borderRadius: 30, marginBottom : '10%',fontFamily:'arial' }}
                       type='password'
                       _placeholder={{textAlign:'center',fontFamily:'arial'}}
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                            console.log(password)
                        }}
                />
                <Button
                    colorScheme='blue'
                    style={{width:'100%',borderRadius: 30, fontFamily:'arial'}}
                >
                    <Link to='/Dashboard'>
                    Login
                    </Link>
                </Button>
            </div>


        </div>
    )
}
export default Login