import React, {useState, useEffect} from 'react';

import './style.css';

import axios from 'axios';

import PhotoElement from './PhotoElement';
import InfiniteLoading from "react-simple-infinite-loading";
import {Button} from "@vkontakte/vkui";
import Icon24Up from '@vkontakte/icons/dist/24/up';

const Content = ({user}) => {
    const refMy = React.useRef();

    const [listItemsMy, setListItemsMy] = useState([]);

    const getList = () => {
        axios.get('https://ch.24gim.ru/photo-trader/index.php?method=getMyImages&userId=' + user.id,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                setListItemsMy(res.data.data)
            });
    }

    useEffect(() => {
        getList();
    }, [])

    const scrollToTop = () => {
        if (refMy.current) {
            refMy.current.scrollTo(0)
        }
    }


    const bigUrl = "https://ch.24gim.ru/photo-trader/?method=getImage&userId=" + user.id + "&imageId=";

    return (
        <div className="max-width-height">
            <InfiniteLoading
                itemHeight={300}
                hasMoreItems={false}
                loadMoreItems={getList}
                ref={refMy}
            >
                {listItemsMy.map(
                    (item, index) =>
                        <div key={index}>
                            <PhotoElement
                                url={bigUrl + item.imageId}
                                author={item.author}
                                price={item.price}
                                download={true}
                            />
                        </div>)
                }

            </InfiniteLoading>
            <Button className="toTop" onClick={scrollToTop}><Icon24Up/></Button>
        </div>
    );
}

export default Content;