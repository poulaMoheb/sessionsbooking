import { forwardRef, useImperativeHandle, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
    open: () => void;
}

type ModalProps = {
    onClose: () => void;
    children: ReactNode;
};


const Modal = forwardRef(
    function Modal({ children }: ModalProps, ref) {
        const dialog = useRef<HTMLDialogElement>(null);

        useImperativeHandle(ref, () => {
            return {
                open: () => {
                    if (dialog.current)
                        dialog.current.showModal();
                }

            }
        })
        return createPortal(
            <dialog ref={dialog} className="modal" >
                {children}
            </dialog>,
            document.getElementById("modal-root")!,
        );
    })

export default Modal