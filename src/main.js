import { createApp } from 'vue'
import App from './App.vue'

import { configure, getMethods } from '@radixdlt/connect-button';
import './assets/main.css'

configure({
    dAppId: 'dashboard',
    networkId: 34,
    logLevel: 'DEBUG',
    onConnect: ({ setState, getWalletData }) => {
      getWalletData({
        oneTimeAccountsWithoutProofOfOwnership: {},
      }).map(({ oneTimeAccounts }) => {
        setState({ connected: true });
        return oneTimeAccounts[0].address;
      }).andThen(sendTx)
    },
    onDisconnect: ({ setState }) => {
      setState({ connected: false });
    },
    onCancel() {
      console.log('Cancel Clicked');
    },
    onDestroy() {
      console.log('Button Destroyed');
    },
  });
  
  const sendTx = (address) =>
    getMethods().sendTransaction({
      version: 1,
      transactionManifest: `
        CREATE_RESOURCE Enum("Fungible", 18u8) Map<String, String>("description", "Dedo test token", "name", "Dedo", "symbol", "DEDO") Map<Enum, Tuple>() Some(Enum("Fungible", Decimal("15000")));
        CALL_METHOD ComponentAddress("${address}") "deposit_batch" Expression("ENTIRE_WORKTOP");`,
    })

createApp(App).mount('#app')
