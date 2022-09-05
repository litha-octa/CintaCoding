import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../Asset/style/dashboard.css'
import {Input, InputRightElement, InputGroup, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { Search2Icon, ChatIcon } from '@chakra-ui/icons'
import axios from "axios";
import {getAllPost} from "../Asset/url";
import Pagination from "../Asset/component/Pagination";
import Post from "../Asset/component/Post";

const Dashboard = () => {
    const datalimit = 10
    const userLogin = 'litha'
    const [post, setPost] = useState([])

    useEffect(()=>{
        axios
            .get(getAllPost)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('something went wrong while requesting posts');
            })
            .then((post) => setPost(post))
            .catch((err)=>{
                console.log(err)
            })
    },[])

    return(
        <div>
            <nav>
                <div className={'titleNav'}>cinta coding</div>
                <div className={'welcome'}>welcome,</div>
                    <Menu isLazy>
                        <MenuButton className={'userLogin'}>{userLogin}</MenuButton>
                        <MenuList minWidth='130px' style={{borderRadius:'15px'}}>
                            <Link to={'/User'}>
                        <MenuItem style={{fontFamily:'arial',fontWeight:'bold', background:'white'}}>Detail Profile</MenuItem>
                            </Link>
                            <Link to={'/'}>
                                <MenuItem style={{fontFamily:'arial',fontWeight:'bold', background:'white'}}>Log out</MenuItem>
                            </Link>
                            </MenuList>
                    </Menu>
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
                {/*PAGIANTION */}
                {post.length > 0 ? (
                    <>
                        <Pagination
                            data={post}
                            RenderComponent={Post}
                            title="Posts"
                            pageLimit={post.length / datalimit}
                            dataLimit={datalimit}
                        />
                    </>
                ) : (
                    <h1>No Posts to display</h1>
                )}
            </div>
        </div>
    )
}
export default Dashboard