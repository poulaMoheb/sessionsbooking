import { type SessionTypes } from '../../store/SessionSlice'
import Button from '../UI/Button'

type SessionItemProps = {
    session: SessionTypes;
}


function SessionItem({ session }: SessionItemProps) {
    return (
        <article className='session-item'>
            <img src={session.image} alt={session.title} />
            <div className="session-data">
                <div>
                    <h3>{session.title}</h3>
                    <p>{session.summary}</p>
                </div>
                <p className="actions">
                    <Button textOnly={false} to={session.id}>Learn More</Button>
                </p>
            </div>
        </article>
    )
}

export default SessionItem