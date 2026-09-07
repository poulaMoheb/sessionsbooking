import { FormEvent, useEffect, useRef } from "react"
import Button from "../Components/Button"
import Input from "../Components/Input"
import Modal, { ModalHandle } from "../Components/Modal";



type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    date: string;
    image: string;
    duration: number;
};

type BookSessionProps = {
    onDone: () => void;
    session: Session
}


function BookSession({ onDone, session }: BookSessionProps) {
    const modal = useRef<ModalHandle>();

    // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(session)
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