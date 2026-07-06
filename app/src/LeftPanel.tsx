interface LeftPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

function LeftPanel({ isOpen, onClose }: LeftPanelProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 border border-purple-600"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } `}
      >
        <div className="p-4 border-2 border-red-700">
          <h2 className="text-xl font-bold mb-4">Left Panel</h2>
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

export default LeftPanel;
