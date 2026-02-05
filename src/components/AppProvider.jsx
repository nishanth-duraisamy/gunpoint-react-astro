import { LoadingProvider } from '../contexts/LoadingContext';
import GlobalLoader from './GlobalLoader';

export default function AppProvider({ children }) {
  return (
    <LoadingProvider>
      <GlobalLoader />
      {children}
    </LoadingProvider>
  );
}
