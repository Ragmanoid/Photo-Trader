import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, user }) => (
	<Panel id={id}>
		<PanelHeader>Photo Trader</PanelHeader>
		{user &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={user.photo_200 ? <Avatar src={user.photo_200}/> : null}
				description={user.city && user.city.title ? user.city.title : ''}
			>
				{`${user.first_name} ${user.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Покажи мне Персика
				</Button>
			</Div>
		</Group>

	</Panel>
);

export default Home;
