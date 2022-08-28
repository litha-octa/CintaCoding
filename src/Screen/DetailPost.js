import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {getDetailPost} from "../Asset/url";
import axios from "axios";
import '../Asset/style/dashboard.css'
import {ArrowBackIcon, ChatIcon} from "@chakra-ui/icons";
import {Button} from "@chakra-ui/react";

const DetailPost = () => {
    const params = useParams();
    const [detail, setDetail] = useState([])
    const [comments, setComments] = useState([])

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
        // GET POST DETAIL
        axios
            .get(`${getDetailPost}${params.detailId}`)
            .then((res)=>{
                setDetail(res.data)
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

    const [showComment, setShowComment] = useState(false)

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
                        <div className={'detail-title'}>{detail.title}</div>
                <div className={'post-card'}>
                <div>{checkName(detail.userId)}</div>
                        <div className={'detail-body'}>{detail.body}</div>
                </div>

                {showComment == false ?(
                        <div>
                            <Button
                                variant='link'
                                className={'button-comment'}
                                leftIcon={<ChatIcon color='cornflowerblue'/>}
                                onClick={()=>setShowComment(true)}
                            >
                                {comments.length}
                            </Button>
                        </div>
                    ) : (
                <div className={'comment-container'}>
                    <div className={'post-card'}>
                        <Button
                            variant={'ghost'}
                            onClick={()=>{setShowComment(false)}}
                            className={'allComment'}>All Comment
                        </Button>
                    </div>
                        {comments?.map((p, index  )=>{
                        return(
                            <div key={p.id} className={'post-card'}>
                                <div className={'email'}>{p.email.slice(0, 5)}</div>
                                <div className={'body-comment'}>{p.body}</div>
                            </div>
                        )
                    })}
                </div>)}
            </div>

        </div>
    )
}
export default DetailPost