import { Waveform } from '@uiball/loaders'

function Loader({ backgroundColor, color = '#fff' }) {
    return (
        <div className="loader-container" style={{ backgroundColor: backgroundColor }}>
            <Waveform color={color} size={45}/>
        </div>
    )
}

export default Loader;