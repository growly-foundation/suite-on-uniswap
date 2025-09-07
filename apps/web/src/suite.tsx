import { ChatWidget, SuiteProvider } from '@getgrowly/suite';
import '@getgrowly/suite/styles.css';

import { useAccount } from 'hooks/useAccount';

// Agent Id and Organization Id can be retrieved on `app.getsuite.io` (Agents > Integration Guide).
export const SuiteProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const account = useAccount();

  const AGENT_ID = process.env.REACT_APP_SUITE_AGENT_ID;
  const API_KEY = process.env.REACT_APP_SUITE_API_KEY;

  if (!AGENT_ID || !API_KEY) {
    return children;
  }

  const walletAddress = account.address || undefined;

  return (
    <SuiteProvider
      context={{
        agentId: AGENT_ID || '',
        organizationApiKey: API_KEY || '',
        config: {
          brandName: 'Uniswap',
          display: 'panel',
        },
        session: {
          walletAddress,
        },
      }}>
      {children}
      <ChatWidget />
    </SuiteProvider>
  );
};
