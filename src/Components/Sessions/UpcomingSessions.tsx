import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";
import { useSessionState } from "../../store/Hooks";
import UpcomingSession from "./UpcomingSession";
import Button from "../UI/Button";

type UpcomingSessionsProps = {
    onDone: () => void;
}


function UpcomingSessions({ onDone, ...props }: UpcomingSessionsProps) {


    const modal = useRef<ModalHandle>();


    function handleCancelSession(id: string) {

    }
    useEffect(() => {
        if (modal.current)
            modal.current.open();
    }, []);
    const sessionsRdx = useSessionState(state => state.sessions.items);
    const hasSessions = sessionsRdx.length;
    return (
        <Modal onClose={onDone}>
            <h2>Upcoming Sessions</h2>
            {hasSessions && (
                <ul>
                    {sessionsRdx.map((session) => (
                        <li key={session.id}>
                            <UpcomingSession
                                session={session}
                                onCancel={() => handleCancelSession(session.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}
            {!hasSessions && <p>No upcoming sessions.</p>}
            <p className="actions">
                <Button onClick={onDone} textOnly={false}>Close</Button>
            </p>
        </Modal>
    )
}

export default UpcomingSessions