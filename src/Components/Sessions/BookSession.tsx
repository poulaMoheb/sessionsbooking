import { FormEvent, useEffect, useRef } from "react"
import Button from "../UI/Button"
import Input from "../UI/Input"
import Modal, { type ModalHandle } from "../UI/Modal";
import { addSession, type Session } from "../../store/SessionSlice";
import { useSessionDispatch } from "../../store/Hooks";



type BookSessionProps = {
    onDone: () => void;
    session: Session
}


function BookSession({ onDone, session }: BookSessionProps) {
    const modal = useRef<ModalHandle>();
    const dispatch = useSessionDispatch();

    // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        dispatch(addSession(session));
        onDone();
    }

    return (
        <Modal ref={modal} onClose={onDone}>
            <h2>Book Session</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Your name" id="name" name="name" type="text" />
                <Input label="Your email" id="email" name="email" type="email" />
                <p className="actions">
                    <Button type="button" textOnly onClick={onDone}>
                        Cancel
                    </Button>
                    <Button textOnly={false} type="submit">Book Session</Button>
                </p>
            </form>
        </Modal>
    )
}

export default BookSession