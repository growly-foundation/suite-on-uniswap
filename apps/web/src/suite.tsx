import { ChatWidget, SuiteProvider, darkTheme } from '@getgrowly/suite';
import '@getgrowly/suite/styles.css';

import { useAccount } from 'hooks/useAccount';

// DUMMY VALUES
const AGENT_ID = '5101fe10-0c1a-4b6a-b30c-123ae0af7699';
const API_KEY = 'fed79063-ae00-434b-8355-73d000062c23';

// Agent Id and Organization Id can be retrieved on `app.getsuite.io` (Agents > Integration Guide).
export const SuiteProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const account = useAccount();

  return (
    <SuiteProvider
      context={{
        agentId: AGENT_ID,
        organizationApiKey: API_KEY,
        config: {
          brandName: 'Uniswap',
          display: 'fullView',
          theme: darkTheme,
        },
        session: {
          walletAddress: account.address,
        },
      }}>
      {children}
      <ChatWidget />
    </SuiteProvider>
  );
};
