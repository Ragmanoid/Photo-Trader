import React from 'react';

import {
    Group,
    CardGrid,
    Card,
    Header,
    Button
} from '@vkontakte/vkui';

import './PhotoElement.css';

const PhotoElement = ({url, buy, author, price, download}) => {

    var sectionStyle = {
        backgroundImage: `url(${url})`
    };

    const downloadImage = () => {
        window.open(url);
    }


    return (
        <div>
            <Group separator="hide" header={<Header mode="secondary">Автор: {author} цена: {price}</Header>}>
                <CardGrid>
                    <Card size="l" mode="outline">
                        <center>
                            <div className="photo" style={sectionStyle}/>
                            {
                                download &&
                                <Button
                                    size="xl"
                                    mode="secondary"
                                    onClick={downloadImage}
                                >Скачать</Button>
                                ||
                                <Button
                                    size="xl"
                                    mode="secondary"
                                    onClick={buy}
                                    data-price={price}
                                    data-author={author}
                                    data-img={url}
                                >Купить</Button>}
                        </center>
                    </Card>
                </CardGrid>
            </Group>
        </div>
    );
}

export default PhotoElement;