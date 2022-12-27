import React from 'react';
import { Link as Component } from './Link';

export default {
	title: 'Example/Atoms/Link',
	component: Component,
	argTypes: {},
};

const Template = (args): JSX.Element => <Component {...args} />;
export const Link = Template.bind({});
Link.args = {};