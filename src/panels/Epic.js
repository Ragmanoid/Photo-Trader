import React from 'react';
import {
    Epic,
    Tabbar,
    TabbarItem,
    View,
    Panel,
    PanelHeader
} from '@vkontakte/vkui';

import Content from './Content';

import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28Attachments from '@vkontakte/icons/dist/28/attachments';


class EpicComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStory: 'feed'
        };
        this.onStoryChange = this.onStoryChange.bind(this);
    }

    onStoryChange(e) {
        this.setState({activeStory: e.currentTarget.dataset.story});
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
                        <Content user={this.props.user}/>}
                    </Panel>
                </View>
                <View id="my-images" activePanel="my-images">
                    <Panel id="my-images">
                        <PanelHeader>Мои изображения</PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )
    }
}

export default EpicComponent;