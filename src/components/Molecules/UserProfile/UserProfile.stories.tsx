import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserProfile as Component } from './UserProfile';
import { Current } from '../../../mocks/User';

export default {
	title: 'Example/Molecules/UserProfile',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Small = Template.bind({});
Small.args = {
	size: 'S',
	user: Current,
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'M',
	user: Current,
};

export const Large = Template.bind({});
Large.args = {
	size: 'L',
	user: Current,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
	size: 'XL',
	user: Current,
};
