import React, { useRef } from 'react';
import { useFrame, extend, useThree, ReactThreeFiber } from 'react-three-fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'orbitControls': ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

// Taken from: https://codeworkshop.dev/blog/2020-04-03-adding-orbit-controls-to-react-three-fiber/
const CameraControls : React.FC = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef<{ update: Function }>();
  useFrame((state) => {
		if(controls !== undefined && controls.current !== null) {
			controls!.current!.update();
		}
	});

  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default CameraControls;
