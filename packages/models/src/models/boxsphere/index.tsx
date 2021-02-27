import React from 'react';
import { Model } from 'modeler-csg';

const BoxSphere : React.FC = () => (
	<Model>
		<subtract>
			<cube />
			<sphere radius={1.3} />
		</subtract>
	</Model>
);

export default BoxSphere;
