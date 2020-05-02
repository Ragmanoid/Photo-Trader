import React, {useState} from 'react';

import {
    Group,
    Header,
    InfoRow,
    Cell,
    CardGrid,
    Card,
    Button,
    FormLayout,
    Checkbox,
    Link,
    Snackbar,
    Avatar
} from '@vkontakte/vkui';

import bridge from '@vkontakte/vk-bridge';
import Icon16Clear from '@vkontakte/icons/dist/16/clear';
import './style.css';

const BuyPage = ({data, user}) => {
    const [license, setLicense] = useState(false);
    const [snackBar, setSnackBar] = useState();

    const sectionStyle = {
        backgroundImage: `url(${data.img})`
    };

    const blueBackground = {
        backgroundColor: 'var(--accent-danger)'
    };

    const openErrorLicense = () => {
        if (snackBar) return;
        setSnackBar(
            <Snackbar
                layout="vertical"
                onClose={() => setSnackBar(null)}
                before={
                    <Avatar size={24} style={blueBackground}>
                        <Icon16Clear
                            fill="#fff"
                            width={14}
                            height={14}/>
                    </Avatar>
                }
            >
                Вы не приняли лицензионное соглашение
            </Snackbar>
        );
    }

    const buy = () => {
        if (license)
            bridge.send(
                "VKWebAppOpenPayForm",
                {
                    "app_id": 7439311,
                    "action": "pay-to-group",
                    "params": {
                        amount: data.price,
                        description: "Покупка изображения",
                        group_id: 194871706,
                        "data": {
                            "img_id": 1
                        }
                    }
                }
            );
        else
            openErrorLicense();
    };

    const onChangeLicense = (e) => {
        setLicense(e.target.checked);
    }

    return (
        <div>
            <Group>
                <Header mode="secondary">Информация о изображении</Header>
                <Cell>
                    <InfoRow header="Автор">
                        {data.author}
                    </InfoRow>
                </Cell>
                <Cell multiline>
                    <InfoRow header="Стоимость">
                        {data.price} руб.
                    </InfoRow>
                </Cell>
                <Cell>
                    <InfoRow header="Изображение">
                        <CardGrid>
                            <Card size="l" mode="outline">
                                <div style={sectionStyle} alt="продоваемое изображение" className="photo"/>
                            </Card>
                        </CardGrid>
                    </InfoRow>
                </Cell>
                <Cell>
                    <FormLayout>
                        <Checkbox onChange={onChangeLicense}>
                            Я принимаю
                            <Link href="https://google.com" target="_blank"> лицензионное соглашение</Link>.
                        </Checkbox>
                    </FormLayout>
                </Cell>
                <Cell>
                    <Button
                        size="xl"
                        mode="secondary"
                        onClick={buy}
                    >Купить</Button>
                </Cell>
            </Group>
            {snackBar}
        </div>
    );
}

export default BuyPage;