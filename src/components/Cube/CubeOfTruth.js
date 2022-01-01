import { useState } from 'react';

import './Cube.css';

import CubeOfTruthData from '../../data/cubeData';

import CubeContainer from './CubeContainer';

import CubeSelector from './CubeSelector';

import FaceSelector from './FaceSelector';

import ResetButtons from './ResetButtons';
import CubeModal from './CubeModal';

function CubeOfTruth({ setShowMenu }) {
  const [cube, setCube] = useState(CubeOfTruthData);
  const [cubeIndex, setCubeIndex] = useState(0);
  const [faceIndex, setFaceIndex] = useState(0);

  const [modal, setModal] = useState(false);
  const [bonus, setBonus] = useState('');

  return (
    <section className='system-container' onClick={() => setShowMenu(false)}>
      <CubeSelector setCubeIndex={setCubeIndex} />
      <CubeContainer
        cube={cube}
        setCube={setCube}
        cubeIndex={cubeIndex}
        faceIndex={faceIndex}
        setBonus={setBonus}
        setModal={setModal}
      />
      <FaceSelector handleClick={(index) => setFaceIndex(index)} />
      <ResetButtons
        cubeIndex={cubeIndex}
        faceIndex={faceIndex}
        cube={cube}
        setCube={setCube}
      />
      {modal && <CubeModal bonus={bonus} setModal={setModal} />}
    </section>
  );
}

export default CubeOfTruth;
