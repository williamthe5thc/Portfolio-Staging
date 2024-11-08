// src/providers/AppProviders.tsx
import { AnalyticsProvider } from './AnalyticsProvider';

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HelmetProvider>
      <Router>
        <AnalyticsProvider>
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </AnalyticsProvider>
      </Router>
    </HelmetProvider>
  );
};