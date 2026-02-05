import { LoadingProvider } from '../contexts/LoadingContext';
import Appointments from './Appointments';
import GlobalLoader from './GlobalLoader';

export default function BookingRoot() {
    return (
        <LoadingProvider>
            <GlobalLoader />
            <Appointments />
        </LoadingProvider>
    );
}