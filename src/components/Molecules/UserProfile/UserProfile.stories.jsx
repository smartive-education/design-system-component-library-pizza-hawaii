import React from 'react';

import { UserProfile } from './UserProfile';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Molecules/UserProfile",
	component: UserProfile,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		src: "./img/testuser.png",
		userName: "user name comes here as alt text",
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UserProfile {...args} />;


const UserProfileImages = ['S', 'M', 'L', 'big'].reduce((acc, size) => {
  const UserProfile = Template.bind({})
  UserProfile.args = {
    size: size
  }
  acc[size] = UserProfile
  return acc
}, {})


export const Small = UserProfileImages['S'];
export const Medium = UserProfileImages['M'];
export const Large = UserProfileImages['L'];
export const Big = UserProfileImages['big'];