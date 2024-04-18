<script lang="ts" setup>
import useWallet from './composables/useWallet'
const { init, status, isConnected, address, chainId, error, disconnect, onClickMetamask, onClickWalletConnect, handleConnect, handleDisconnect, onClickConnectBtn, isModalOpen } = useWallet()
import { VueDappModal } from '@vue-dapp/modal'
import '@vue-dapp/modal/dist/style.css'

init()
</script>

<template>
	<div>
		<VueDappProvider @connect="handleConnect" @disconnect="handleDisconnect">
			<div v-if="!isConnected" class="connect-btns">
				<button :disabled="status !== 'idle'" @click="onClickMetamask">Connect with MetaMask</button>
				<button :disabled="status !== 'idle'" @click="onClickWalletConnect">Connect with WalletConnect</button>
				<button @click="onClickConnectBtn">{{ isConnected ? 'Disconnect' : 'Connect with modal' }}</button>
			</div>
			<button v-else @click="disconnect">Disconnect</button>

			<div>status: {{ status }}</div>
			<div>isConnected: {{ isConnected }}</div>
			<div>error: {{ error }}</div>

			<div v-if="isConnected">
				<div v-if="chainId">chainId: {{ chainId }}</div>
				<div>address: {{ address }}</div>
			</div>

			<VueDappModal v-model="isModalOpen" dark auto-connect />

		</VueDappProvider>
	</div>
</template>

<style>
.connect-btns {
	display: flex;
	flex-direction: row;
	gap: 10px;
}
</style>
