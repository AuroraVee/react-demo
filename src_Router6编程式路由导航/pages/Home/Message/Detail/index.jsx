import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Detail () {

    const { state } = useLocation();
    const { id, title, content } = state;

    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        </div>
    );
}
