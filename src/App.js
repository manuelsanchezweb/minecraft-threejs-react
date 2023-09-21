import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ground from './components/Ground';
import Player from './components/Player';
import { FPV } from './components/FPV';
import Cubes from './components/Cubes';
import { usePointerLockState } from './hooks/usePointerLockChange';
import { TextureSelector } from './components/TextureSelector';
import { Menu } from './components/Menu';

function App() {
  const isPointerLocked = usePointerLockState();

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
        {isPointerLocked ? <div className="absolute centered cursor">+</div> : null}
        <TextureSelector />
        <Menu />
    </>
  );
}

export default App;
