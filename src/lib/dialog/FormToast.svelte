<script>
	import { dismissBottomToast, bottomToasts } from '$lib/stores/Toast';
	import Toast from '$lib/tool/Toast.svelte';
</script>

{#each $bottomToasts as toast (toast.id)}
	<Toast
		title={toast.title}
        headMessage={toast.headMessage}
		message={toast.message}
		showIcon={toast.showIcon}
		showCountdown={toast.showCountdown}
		showClose={toast.showClose}
		toastStyle={toast.toastStyle}
		timeout={toast.timeout}
		onClose={() => dismissBottomToast(toast.id)}
	/>
{/each}
