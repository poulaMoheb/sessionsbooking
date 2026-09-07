import { useParams } from 'react-router-dom';

import { SESSIONS } from '../dummy-sessions.ts';
import Button from '../Components/UI/Button.tsx';
import { useState } from 'react';
import BookSession from '../Components/Sessions/BookSession.tsx';



export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);


  const [openDialog, setOpenDialog] = useState(false);


  function handleOpenDialog() {
    setOpenDialog(true)

  }

  function handleCloseDialog() {
    setOpenDialog(false)

  }

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
        <BookSession session={loadedSession} onDone={handleCloseDialog} />}
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
              <Button textOnly={false} onClick={handleOpenDialog}>
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
