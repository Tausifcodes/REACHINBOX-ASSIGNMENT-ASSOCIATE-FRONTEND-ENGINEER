// src/components/ReplyBox.js
import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

const ReplyBox = ({ threadId }) => {
    const [reply, setReply] = useState('');

    const sendReply = () => {
        // Send a reply email
        axiosInstance.post(`/onebox/reply/${threadId}`, {
            from: "your-email@example.com",  // Replace with actual email
            to: "recipient@example.com",     // Replace with actual recipient email
            subject: "Reply Subject",
            body: reply
        })
        .then(response => console.log('Reply sent:', response))
        .catch(error => console.error('Error sending reply:', error));
    };

    return (
        <div className="reply-box">
            <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Write your reply..."
            />
            <button onClick={sendReply}>Send Reply</button>
        </div>
    );
};

export default ReplyBox;
