import { useState } from 'react';
import MainContent from './MainContent';
import LeftPanel from './LeftPanel';
import RightPanel1 from './RightPanel1';
import RightPanel2 from './RightPanel2';
import Modal from './Modal';

function App() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [right1Open, setRight1Open] = useState(false);
  const [right2Open, setRight2Open] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <MainContent
        onToggleLeft={() => setLeftOpen(!leftOpen)}
      />
      <LeftPanel isOpen={leftOpen} onClose={() => setLeftOpen(false)} />
      <RightPanel1 isOpen={right1Open} onClose={() => setRight1Open(false)} />
      <RightPanel2 isOpen={right2Open} onClose={() => setRight2Open(false)} />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
