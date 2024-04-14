<script lang="ts" setup>
import useWallet from './composables/useWallet'
const { status, isConnected, address, chainId, error, disconnect, onClickMetamask, onClickWalletConnect, handleConnect, handleDisconnect } = useWallet()
</script>

<template>
	<div>
		<VueDappProvider @connect="handleConnect" @disconnect="handleDisconnect">
			<div v-if="!isConnected" class="connect-btns">
				<button :disabled="status !== 'idle'" @click="onClickMetamask">Connect with MetaMask</button>
				<button :disabled="status !== 'idle'" @click="onClickWalletConnect">Connect with WalletConnect</button>
			</div>
			<button v-else @click="disconnect">Disconnect</button>

			<div>status: {{ status }}</div>
			<div>isConnected: {{ isConnected }}</div>
			<div>error: {{ error }}</div>

			<div v-if="isConnected">
				<div v-if="chainId">chainId: {{ chainId }}</div>
				<div>address: {{ address }}</div>
			</div>
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
