import Lottie from "lottie-react";
import confirmMsg from "../assets/confirm.json";

type ConfirmationMsgModalProps = {
    isOpen: boolean;
    title?: string;
    message: string;
    closeText?: string;
    onConfirm?: () => void;
    onCancel: () => void;
};

const ConfirmationMsgModal: React.FC<ConfirmationMsgModalProps> = ({
    isOpen,
    title,
    message,
    closeText,
    onCancel,
}) => {
    if (!isOpen) return null;

    return (
        <dialog className="modal modal-open z-50">
            <div className="modal-box bg-primary text-white shadow-2xl rounded-2xl p-6 max-w-md w-full relative">
                <div className="flex justify-center">
                    <Lottie
                        animationData={confirmMsg}
                        loop={true}
                        className="w-52 h-52"
                    />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mt-2">
                    {title}
                </h3>

                <p className="text-center font-semibold text-base mt-4">{message}</p>
                <div className="modal-action mt-6 justify-center">
                    <button
                        onClick={onCancel}
                        className="btn bg-green-50 text-primary hover:bg-green-700 hover:text-white px-6 rounded-full transition duration-700 ease-in-out transform hover:scale-105"
                    >
                        {closeText}
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ConfirmationMsgModal;
