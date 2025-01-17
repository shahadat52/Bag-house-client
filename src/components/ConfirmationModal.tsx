/* eslint-disable @typescript-eslint/no-explicit-any */

const ConfirmationModal = ({ isOpen, onClose, onConfirm }: any) => {
    if (!isOpen) return null; // Don't render if modal is closed

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-semibold mb-4">Are you sure?</h3>
                <p className="mb-6">This action cannot be undone.</p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
