import React from 'react';
import { Canvas } from 'react-three-fiber';
import CameraControls from '../camera-control';

const Preview : React.FC = ({ children }) => {
	return (
		<Canvas>
			<CameraControls />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			{children}
		</Canvas>
	);
};


export default Preview;
