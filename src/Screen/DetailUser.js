import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import {getUser} from "../Asset/url";
import {ArrowBackIcon} from "@chakra-ui/icons";
import '../Asset/style/user.css';

const DetailUser = () =>{
    const [userData, setUserData] = useState([])
    useEffect(()=>{
        const id = Math.floor(Math.random() * (10 - 1)) + 1;
        axios
            .get(`${getUser}${id}`)
            .then((res)=>{
                setUserData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return(
        <div>
            <nav>
                <Link to={'/Dashboard'}>
                    <div className={'titleNav'}>cinta coding</div>
                </Link>
                <div className={'welcome'}>welcome,</div>
                <div className={'userLogin'}>Litha</div>
            </nav>
            <div className={'container-dashboard'}>
                <div className={'post-header'}>Post</div>
            <Link to ='/Dashboard'>
                <ArrowBackIcon w={6} h={6}/>
            </Link>
                <div className={'table'}>
                    <div className={'rowData'}>
                        <div className={'leftTable'}>Username</div>
                        <div className={'leftTable2'}>:</div>
                        <div className={'rightTable'}>{userData.name}</div>
                    </div>
                    <div className={'rowData'}>
                        <div className={'leftTable'}>Email</div>
                        <div className={'leftTable2'}>:</div>
                        <div className={'rightTable'}>{userData.email}</div>
                    </div>
                    <div className={'rowData'}>
                        <div className={'leftTable'}>Address</div>
                        <div className={'leftTable2'}>:</div>
                        <div className={'rightTable'}>{userData.website}</div>
                    </div>
                    <div className={'rowData'}>
                        <div className={'leftTable'}>Phone</div>
                        <div className={'leftTable2'}>:</div>
                        <div className={'rightTable'}>{userData.phone}</div>
                    </div>
            </div>
            </div>
        </div>
    )
}
export default DetailUser