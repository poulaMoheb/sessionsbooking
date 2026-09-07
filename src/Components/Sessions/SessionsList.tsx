import { SESSIONS } from "../../dummy-sessions"
import SessionItem from "./SessionItem"




function SessionsList() {
    const sessions = SESSIONS
    return (
        <ul id="sessions-list">
            {sessions.map(item =>
                <li key={item.id}>
                    <SessionItem session={item} />
                </li>
            )}
        </ul>
    )
}

export default SessionsList