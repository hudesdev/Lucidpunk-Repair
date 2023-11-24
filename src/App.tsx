import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Component/Header';
import Footer from './Component/Footer';
import InitPage from './Pages/InitPage';
import Goto from './Component/Goto';
import Profile from './Pages/Profile';

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
)
 
// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '...',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

function App() {
  return (
    <BrowserRouter>
      <WagmiConfig config={config}>
        <Header/>
        <Goto/>
        <Routes>
          <Route path='/' element = {<InitPage/>} />
          <Route path='/profile' element = {<Profile/>} />
        </Routes>
        <Footer/>
      </WagmiConfig>
    </BrowserRouter>
  );
}

export default App;
