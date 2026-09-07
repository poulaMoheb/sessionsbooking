import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import UpcomingSessions from '../Sessions/UpcomingSessions';

function MainHeader() {
    const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

    function handleOpenDialog() {
        setUpcomingSessionsVisible(true);
    }

    function handleCloseDialog() {
        setUpcomingSessionsVisible(false);
    }
    return (
        <>
            {upcomingSessionsVisible && (
                <UpcomingSessions onClose={handleCloseDialog} />
            )}
            <header id="main-header">
                <h1>ReactMentoring</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Our Mission</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sessions" className={({ isActive }) => isActive ? 'active' : ''}>Browse Sessions</NavLink>
                        </li>
                        <li>
                            <Button onClick={handleOpenDialog} textOnly>Upcoming Sessions</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MainHeader