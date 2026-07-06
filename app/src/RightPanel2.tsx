interface RightPanel2Props {
  isOpen: boolean;
  onClose: () => void;
}

function RightPanel2({ isOpen, onClose }: RightPanel2Props) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed right-0 top-0 h-full w-[28rem] bg-white shadow-lg z-30 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Right Panel 2</h2>
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

export default RightPanel2;
