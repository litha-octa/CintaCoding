import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../Asset/style/dashboard.css'
import {Input, InputRightElement, InputGroup, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { Search2Icon, ChatIcon } from '@chakra-ui/icons'
import axios from "axios";
import {getAllPost} from "../Asset/url";

const Dashboard = () => {
    const userLogin = 'litha'
    const [post, setPost] = useState([])

    const checkName = (id) => {
        if(id === 1){
            return ('Leanne Graham')
        }else if (id === 2){
            return('Ervin Howell')
        }else if (id === 3){
            return('Clementine Bauch')
        }else if(id ===4){
            return('Patricia Lebsack')
        }else if(id ===5){
            return('Chelsey Dietrich')
        }else if(id ===6){
            return('Mrs. Dennis Schulist')
        }else if(id ===7){
            return('Kurtis Weissnat')
        }else if(id ===8){
            return('Nicholas Runolfsdottir V')
        }else if(id ===9){
            return('Glenna Reichert')
        }
        else{
            return ('Clementina DuBuque')
        }
    }

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
                {post.map((p, index) => (
                    <>
                    <div className={'post-card'}>
                        <div className={'author'}>{checkName(p.userId)}</div>
                        <div className={'post-title'}>{p.body}</div>
                    </div>
                    <div className={'post-card2'}>
                        <div className={'comment'}><ChatIcon color='cornflowerblue' style={{marginRight:'15px'}}/>5</div>
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
            </div>
        </div>
    )
}
export default Dashboard