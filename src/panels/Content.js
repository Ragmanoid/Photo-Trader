import React, {useState, useEffect} from 'react';

import InfiniteLoading from 'react-simple-infinite-loading';
import './style.css';

import axios from 'axios';

import {
    Button
} from '@vkontakte/vkui';

import Icon24Up from '@vkontakte/icons/dist/24/up';

import PhotoElement from './PhotoElement';

const Content = ({user, buy}) => {
    const ref = React.useRef();

    const [listItems, setListItems] = useState([]);
    const [hasMoreItems, setHasMoreItems] = useState(true);
    const [page, setPage] = useState(4);

    const getList = () => {
        axios.get('https://ch.24gim.ru/photo-trader/index.php?method=getList&page=' + page + '&userId=' + user.id,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                setHasMoreItems(res.hasMoreItems);
                setListItems(res.data.data)
            });
    }

    useEffect(() => {
        getList();
    }, [])

    const scrollToTop = () => {
        if (ref.current) {
            ref.current.scrollTo(0)
        }
    }

    function fetchMoreListItems() {
        setPage(page + 1);
        getList();
    }

    const bigUrl = "https://ch.24gim.ru/photo-trader/?method=getImage&userId=" + user.id + "&imageId=";

    return (
        <div className="max-width-height">
            <InfiniteLoading
                itemHeight={300}
                hasMoreItems={hasMoreItems}
                loadMoreItems={fetchMoreListItems}
                ref={ref}
            >
                {listItems.map(
                    (item, index) =>
                        <div key={index}>
                            <PhotoElement
                                url={bigUrl + item.imageId}
                                buy={buy}
                                author={item.author}
                                price={item.price}
                                download={false}
                            />
                        </div>)
                }

            </InfiniteLoading>
            <Button className="toTop" onClick={scrollToTop}><Icon24Up/></Button>
        </div>
    );
}

export default Content;