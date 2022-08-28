import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../Asset/style/dashboard.css'
import {Input, InputRightElement, InputGroup, Button} from "@chakra-ui/react";
import { Search2Icon, ChatIcon } from '@chakra-ui/icons'
import axios from "axios";
import {getAllPost, getDetailPost} from "../Asset/url";

const Dashboard = () => {
    const userLogin = 'litha'
    const commentLength = 10
    const [post, setPost] = useState([])

    useEffect(()=>{
        axios
            .get(getAllPost)
            .then((res)=>{
                setPost(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])


    return(
        <div>
            <nav>
                <div className={'titleNav'}>cinta coding</div>
                <div className={'welcome'}>welcome,</div>
                <div className={'userLogin'}>{userLogin}</div>
            </nav>
            <div className={'container-dashboard'}>
                    <div className={'post-header'}>Post</div>
                <InputGroup>
                <Input
                    variant='filled'
                    placeholder='Search'
                    style={{borderRadius: 30, marginTop : '5%',marginBottom : '10%',fontFamily:'arial' }}
                    _placeholder={{textAlign:'center',fontFamily:'arial'}}
                />
                <InputRightElement
                    pointerEvents='pointer'
                    marginTop={'5%'}
                    children={<Search2Icon />}
                />
                </InputGroup>
                {post.map((p, index) => (
                    <>
                    <div className={'post-card'}>
                        <div className={'author'}>{p.userId}</div>
                        <div className={'post-title'}>{p.body}</div>
                    </div>
                    <div className={'post-card2'}>
                        <div className={'comment'}><ChatIcon color='cornflowerblue'/>{commentLength}</div>
                        <Link to={`/Detail/${p.id}`}
                        key = {p.id}>
                        <div
                            variant = 'link'
                            colorScheme='blue'
                            className={'detail'}
                        >detail
                        </div>
                        </Link>
                    </div>
                    </>
                ))}

                {/*<div>{post[0].title}</div>*/}
            </div>
        </div>
    )
}
export default Dashboard