import { useParams } from 'react-router-dom';

import { SESSIONS } from '../dummy-sessions.ts';
import Button from '../Components/Button.tsx';
import { useState } from 'react';
import Modal from '../Components/Modal.tsx';
import Input from '../Components/Input.tsx';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [openDialog, setOpenDialog] = useState(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }


  return (
    <main id="session-page">
      {openDialog &&
        <Modal onClose={() => setOpenDialog(false)}>
          <h1>Reserve Session</h1>
          <Input id='name' label='Your Name' />
          <Input id='email' label='Your Email' />
          <Button textOnly={false}>Submit</Button>
        </Modal>}
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button textOnly={false} onClick={() => setOpenDialog(true)}>
                Book Session
              </Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
