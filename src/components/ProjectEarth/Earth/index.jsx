import { Canvas, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { useTransform,useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion-3d';

export default function Earth() {
    const scene = useRef(null);

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/color.jpg',
        '/assets/normal.png',
        '/assets/occlusion.jpg'
    ]);

    // Calculate rotation based on scroll position
    const rotationY = useTransform(
        useScroll().scrollYProgress,
        [0, 1],
        [0, Math.PI * 2]
    );

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
            <motion.mesh scale={2.5} rotation-y={rotationY} position={[1, 0, 0.75]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
            </motion.mesh>
        </Canvas>
    );
}
