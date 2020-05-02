import React from 'react';
import {
    Epic,
    Tabbar,
    TabbarItem,
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack
} from '@vkontakte/vkui';

import Content from './Content';
import BuyPage from './BuyPage';
import MyImages from './MyImages';

import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28Attachments from '@vkontakte/icons/dist/28/attachments';


class EpicComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStory: 'feed',
            buy: {
                price: 0,
                author: '',
                img: null
            }
        };
        this.onStoryChange = this.onStoryChange.bind(this);
    }



    onStoryChange(e) {
        this.setState({activeStory: e.currentTarget.dataset.story});
    }

    buy = (e) => {
        const price = e.currentTarget.dataset.price;
        const author = e.currentTarget.dataset.author;
        const img = e.currentTarget.dataset.img;
        this.setState({buy: {price, author, img}});
        this.setState({activeStory: 'buy'});

    }

    render() {

        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'feed'}
                        data-story="feed"
                        text="Лента"
                    ><Icon28NewsfeedOutline/></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'my-images'}
                        data-story="my-images"
                        text="Мои изображения"
                    ><Icon28Attachments/></TabbarItem>
                </Tabbar>
            }>
                <View id="feed" activePanel="feed">
                    <Panel id="feed">
                        <PanelHeader>Лента</PanelHeader>
                        {this.props.user &&
                        <Content user={this.props.user} buy={this.buy}/>}
                    </Panel>
                </View>
                <View id="buy" activePanel="buy">
                    <Panel id="buy">
                        <PanelHeader left={<PanelHeaderBack onClick={this.onStoryChange} data-story={"feed"}/>}>Покупка</PanelHeader>
                        <BuyPage data={this.state.buy} user={this.props.user}/>
                    </Panel>
                </View>
                <View id="my-images" activePanel="my-images">
                    <Panel id="my-images">
                        <PanelHeader>Мои изображения</PanelHeader>
                        {this.props.user &&
                        <MyImages user={this.props.user} />}
                    </Panel>
                </View>
            </Epic>
        )
    }
}

export default EpicComponent;