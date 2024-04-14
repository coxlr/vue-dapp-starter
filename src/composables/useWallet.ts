
import { BrowserWalletConnector, useVueDapp, RDNS, type ConnWallet } from '@vue-dapp/core'
import { WalletConnectConnector } from '@vue-dapp/walletconnect'

const { status, isConnected, address, chainId, error, disconnect, connectTo, addConnectors } = useVueDapp()

addConnectors([
	new BrowserWalletConnector(),
	new WalletConnectConnector({
		projectId: '3f3c98042b194264687bf59e104c534a',
		chains: [1],
		showQrModal: true,
		qrModalOptions: {
			themeMode: 'dark',
			themeVariables: undefined,
			desktopWallets: undefined,
			walletImages: undefined,
			mobileWallets: undefined,
			enableExplorer: true,
			privacyPolicyUrl: undefined,
			termsOfServiceUrl: undefined,
		},
	}),
])

export default function useWallet() {
function onClickMetamask() {
	if (!isConnected.value) {
		connectTo('BrowserWallet', { rdns: RDNS.metamask })
	}
}

function onClickWalletConnect() {
	if (!isConnected.value) {
		connectTo('WalletConnect')
	}
}

function handleConnect(wallet: ConnWallet) {
	console.log('handleConnect', wallet)
}

function handleDisconnect() {
	console.log('handleDisconnect')
}
 return {
  status, isConnected, address, chainId, error, disconnect, connectTo, onClickMetamask, onClickWalletConnect, handleConnect, handleDisconnect
 }
}
