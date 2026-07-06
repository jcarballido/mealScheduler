interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
          <h2 className="text-xl font-bold mb-4">Modal</h2>
          <p className="mb-4">This modal overlays everything.</p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
