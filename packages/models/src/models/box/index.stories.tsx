import React from 'react';
import Preview from '../../components/preview';
import Box from './index';

export default {
	title: 'models/box',
	decorators: [
		(Story) => <Preview><Story /></Preview>
	],
};

export const Default = () => (
	<>
		<Box position={[-1.2, 0, 0]} />
		<Box position={[1.2, 0, 0]} />
	</>
);

export const Four = () => (
	<>
		<Box position={[-1.6, 0, 0]} />
		<Box position={[1.6, 0, 0]} />
		<Box position={[-1.2, -1.5, 0]} />
		<Box position={[1.2, 1.5, 1]} />
	</>
);
