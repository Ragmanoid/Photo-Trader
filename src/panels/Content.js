import React, {useState, useEffect} from 'react';

import InfiniteLoading from 'react-simple-infinite-loading';
import './style.css';

import PhotoElement from './PhotoElement';

const Content = (props) => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), x => "https://klike.net/uploads/posts/2019-06/1560664221_1.jpg"));
    const [isFetching, setIsFetching] = useState(true);

    function fetchMoreListItems() {
        setTimeout(() => {
            setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), x => "https://klike.net/uploads/posts/2019-06/1560664221_1.jpg")]));
            setIsFetching(true);
        }, 2000);
    }


    return (
        <div className="max-width-height">
            <InfiniteLoading
                itemHeight={300}
                hasMoreItems={isFetching}
                loadMoreItems={fetchMoreListItems}
            >
                {listItems.map(
                    (item, index) =>
                        <PhotoElement user={props.user} url={item} key={index}/>
                        )
                }

            </InfiniteLoading>
        </div>
    );
}

export default Content;