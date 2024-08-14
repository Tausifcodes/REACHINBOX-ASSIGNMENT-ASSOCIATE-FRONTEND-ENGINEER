// src/components/Onebox.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

const Onebox = () => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        // Fetch all mails
        axiosInstance.get('/onebox/list')
            .then(response => setThreads(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteThread = (id) => {
        // Delete an email thread
        axiosInstance.delete(`/onebox/messages/${id}`)
            .then(() => setThreads(threads.filter(thread => thread.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div className="onebox-container">
            {threads.map(thread => (
                <div key={thread.id} className="thread">
                    <h3>{thread.subject}</h3>
                    <button onClick={() => deleteThread(thread.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Onebox;
