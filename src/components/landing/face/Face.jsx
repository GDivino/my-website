import '../../../styles/face.scss'
import { Application } from './runtime'

const app = new Application()

app.load('../src/components/landing/face/scene.json')


const Face = () => {
    return (
        <div id='container'>
			<canvas id="canvas3d"></canvas>
		</div>
    )
}

export default Face