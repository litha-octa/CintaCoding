import React from 'react'
import {ChatIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";

const Post = (props) => {
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
    const { userId, id, title, body } = props.data;
    return(
        <>
            <div className={'post-card'}>
                <div className={'author'}>{checkName(userId)}</div>
                <div className={'post-title'}>{body}</div>
            </div>
            <div className={'post-card2'}>
                <div className={'comment'}><ChatIcon color='cornflowerblue' style={{marginRight:'15px'}}/>5</div>
                <Link to={`/Detail/${id}`}
                      key = {id}>
                    <div
                        variant = 'link'
                        colorScheme='blue'
                        className={'detail'}
                    >detail
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Post