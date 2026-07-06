interface RightPanel1Props {
  isOpen: boolean;
  onClose: () => void;
}

function RightPanel1({ isOpen, onClose }: RightPanel1Props) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-20 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Right Panel 1</h2>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default RightPanel1;
