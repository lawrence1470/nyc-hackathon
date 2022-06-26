import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type {AppProps} from 'next/app';
import {RainbowKitProvider, getDefaultWallets} from '@rainbow-me/rainbowkit';
import {chain, configureChains, createClient, WagmiConfig} from 'wagmi';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import theme from '../components/theme';
import createEmotionCache from '../components/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient()

// const sf = await Framework.create({
//     networkName: "matic", // you can also use chainId here instead
//     provider: ethersProvider
// });


const {chains, provider, webSocketProvider} = configureChains(
    [
        chain.mainnet,
        chain.polygonMumbai,
        chain.rinkeby,
        chain.ropsten,
        chain.goerli,
        chain.polygon,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
            ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
            : []),
    ],
    [
        alchemyProvider({
            // This is Alchemy's default API key.
            // You can get your own at https://dashboard.alchemyapi.io
            alchemyId: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
        }),
        publicProvider(),
    ]
);

const {connectors} = getDefaultWallets({
    appName: 'RainbowKit App',
    chains,
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
});

function MyApp({Component, pageProps}: AppProps) {
    return (
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
              <WagmiConfig client={wagmiClient}>
                  <RainbowKitProvider chains={chains}>
                      <Component {...pageProps} />
                  </RainbowKitProvider>
              </WagmiConfig>
          </QueryClientProvider>
        </ThemeProvider>
      </CacheProvider>
    );
}

export default MyApp;
