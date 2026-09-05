import { useEffect, useRef, type ReactNode } from "react";
import Button from "./Button";

type ModalProps = {
    onClose: () => void;
    children: ReactNode;
};

function Modal({ onClose, children }: ModalProps) {
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialog.current?.showModal();

        return () => dialog.current?.close();
    }, []);

    return (
        <dialog ref={dialog}>
            <div>
                {children}
            </div>
            <Button textOnly={true} onClick={onClose}>Close</Button>
        </dialog>
    )
}

export default Modal