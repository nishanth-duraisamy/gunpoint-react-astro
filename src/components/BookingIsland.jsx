// src/components/BookingIsland.jsx
import React from 'react';
import { LoadingProvider } from '../contexts/LoadingContext';
import Appointments from './Appointments';
import GlobalLoader from './GlobalLoader';

export default function BookingIsland() {
    return (
        <LoadingProvider>
            {/* Both components now share the same React Context instance */}
            <GlobalLoader />
            <Appointments />
        </LoadingProvider>
    );
}