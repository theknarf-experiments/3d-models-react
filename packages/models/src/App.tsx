import React from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './models/box';

const App : React.FC = () => {
	return <div>
		<h1>App</h1>
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} />
		</Canvas>
	</div>
};

export default App;
