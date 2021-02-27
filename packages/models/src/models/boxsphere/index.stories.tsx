import React from 'react';
import Preview from '../../components/preview';
import { Story } from '@storybook/react';
import BoxSphere from '.';

export default {
	title: 'models/boxsphere',
	decorators: [
		(Story : Story) => <Preview><Story /></Preview>
	],
};

export const Default = () => (
	<BoxSphere />
)
