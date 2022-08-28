import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import {getDetailPost} from "../Asset/url";
import axios from "axios";
import '../Asset/style/dashboard.css'
import {ChatIcon} from "@chakra-ui/icons";

const DetailPost = () => {
    const params = useParams();
    const [detail, setDetail] = useState([])
    const [comments, setComments] = useState([])

    useEffect(()=>{
        // GET POST DETAIL
        axios
            .get(`${getDetailPost}${params.detailId}`)
            .then((res)=>{
                setDetail(res.data)
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })

        // GET COMMENTS

        axios
            .get(`${getDetailPost}${params.detailId}/comments`)
            .then((res)=>{
                setComments(res.data)
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
                <div className={'userLogin'}>Litha</div>
            </nav>
            <div className={'container-dashboard'}>
                <div className={'post-header'}>Post</div>
                        <div className={'detail-title'}>{detail.title}</div>
                <div className={'post-card'}>
                <div>{detail.userId}</div>
                        <div className={'detail-body'}>{detail.body}</div>
                </div>
                <div className={'post-card'} style={{marginTop:'3%', cursor:'pointer'}}>
                <ChatIcon color='cornflowerblue' style={{marginLeft:'17%', marginTop:'0.5%'}}/>
                    <div style={{fontWeight:'bold',color:'cornflowerblue', marginLeft:'3%'}}>{comments.length}</div>
                </div>
            </div>

        </div>
    )
}
export default DetailPost