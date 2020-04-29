import React, {useState} from 'react';

import {
    Group,
    CardGrid,
    Card,
    Header,
    Button
} from '@vkontakte/vkui';

import './PhotoElement.css';

const PhotoElement = (props) => {
    const user = props.user;

    var sectionStyle = {
        backgroundImage: `url(${props.url})`
    };

    return (
        <div>
            <Group separator="hide" header={<Header mode="secondary">Автор: Лапин Мхаил</Header>}>
                <CardGrid>
                    <Card size="l" mode="outline">
                        <center>
                            <div className="photo" style={sectionStyle} />
                            <Button size="xl" mode="secondary">Купить</Button>
                        </center>
                    </Card>
                </CardGrid>
            </Group>
        </div>
    );
}

export default PhotoElement;