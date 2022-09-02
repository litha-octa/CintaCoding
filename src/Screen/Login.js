import React, {useEffect, useState} from 'react'
import '../Asset/style/login.css'
import {Button, Input} from "@chakra-ui/react";
import {getUser} from "../Asset/url";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [allUser, setAllUser] = useState([])
    const [username, setUsername] = useState()
    const [password, setPassword]= useState()
    const navigate = useNavigate()

        function check(x){
            const cek = allUser.includes(x)
            console.log(cek)
            if (cek === true){
                alert('Login Berhasil !')
                const timer = setTimeout(() => {
                    navigate('/Dashboard')
                }, 3000);
                return () => clearTimeout(timer);

            }else{
                return alert('username atau password salah')
            }
        }
    useEffect(()=>{
        axios
            .get(getUser)
            .then((res)=>{
                setAllUser(res.data.map(item => item.name))
                console.log(res.data.map(item => item.name))
                })
            .catch((err)=>{
                console.log(err)
            })

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
                        }}
                />

                <Button
                    colorScheme='blue'
                    style={{width:'100%',borderRadius: 30, fontFamily:'arial'}}
                    onClick={()=>{
                        check(username && password)
                    }}
                >
                    Login
                </Button>
            </div>


        </div>
    )
}
export default Login