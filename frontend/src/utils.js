import { useState, useEffect, useRef } from 'react';

export const logrt = () => {
    return console.log('Heloooooooooooooo woooooooooooorle')
};

// export const tonken = (toen) => ({
//     return 'helo'
// })



export const csrftoken = (name='csrftoken') => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}



export function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsComponentVisible(false);
        }
    };

    // const handleClickOutside = (event: Event) => {
    //     if (ref.current && !ref.current.contains(event.target as Node)) {
    //         setIsComponentVisible(false);
    //     }
    // };

    useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true);
        // document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true);
            // document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}