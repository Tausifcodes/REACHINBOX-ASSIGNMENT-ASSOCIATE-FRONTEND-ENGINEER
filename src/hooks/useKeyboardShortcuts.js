// src/hooks/useKeyboardShortcuts.js
import { useEffect } from 'react';

const useKeyboardShortcuts = (deleteThread, openReply) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'D') {
                deleteThread(); // Delete functionality
            }
            if (event.key === 'R') {
                openReply(); // Open reply box functionality
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [deleteThread, openReply]);
};

export default useKeyboardShortcuts;
