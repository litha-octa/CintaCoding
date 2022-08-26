import React from 'react'
import '../Asset/style/login.css'
import {Button, Input} from "@chakra-ui/react";

const Login = () => {
    return(
        <div className={'body'}>
            <div className={'form'}>
                <div className={'form-name'}>Login Page</div>
                <Input variant='outline'
                       placeholder='Username'
                       style={{borderRadius: 30, marginBottom : '10%',fontFamily:'arial'}}
                       _placeholder={{textAlign:'center',fontFamily:'arial'}}
                />
                <Input
                        variant='outline'
                       placeholder='Password'
                       style={{borderRadius: 30, marginBottom : '10%',fontFamily:'arial' }}
                       type='password'
                       _placeholder={{textAlign:'center',fontFamily:'arial'}}
                />
                <Button
                    colorScheme='blue'
                    style={{width:'100%',borderRadius: 30, fontFamily:'arial'}}>
                    Login
                </Button>
            </div>


        </div>
    )
}
export default Login