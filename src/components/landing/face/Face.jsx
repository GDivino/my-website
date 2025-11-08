import { useEffect } from 'react';
import '../../../styles/face.scss'

const Face = ({ onLoad }) => {
    useEffect(() => {
        const loadFace = async () => {
            const module = await import('/src/components/landing/face/runtime.js');
            const { Application } = module;
            const app = new Application();
            await app.load('/src/components/landing/face/scene.json');
            if (onLoad) {
                onLoad();
            }
        };
        loadFace();
    }, [onLoad]);

    return (
        <div id='container'>
            <canvas id="canvas3d"></canvas>
        </div>
    )
}

export default Face