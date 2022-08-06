<script>
	import { fly } from 'svelte/transition';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	export let show = true;
	export let showIcon;
	export let showCountdown = true;
	export let showClose;
	export let toastStyle;
	export let title;
	export let action;
	export let timeout = 3000;
    export let headMessage = '(Pesan kosong)';
	export let message = '(Pesan kosong)';

	let currentCountdown;

	const onAction = () => {};
	const getAttrib = () => {
		let result;
		if (toastStyle === 'success') {
		} else if (toastStyle === 'warning') {
		} else if (toastStyle === 'danger') {
		}

		return result;
	};

	onMount(() => {
		currentCountdown = timeout;
		setInterval(() => {
			currentCountdown = currentCountdown - 1000;
			if (currentCountdown === 0) {
				clearInterval(this);
			}
		}, 1000);
	});
</script>

{#if show}
	<div class="bottom-toast" in:fly={{ y: 100 }} out:fly={{ y: 100 }}>
		<div class="container">
			<div class="shadow">
				{#if showIcon}
					<img src={getAttrib()?.icon} alt="Icon" />
				{/if}
				<span>
                    <strong>
                        {headMessage} 
                    </strong>
					{message}
                    {#if showCountdown}
                        {currentCountdown / 1000}s
                    {/if}
				</span>
				{#if action}
					<button class="action" on:click={onAction}>
						<small>
							{action}
						</small>
					</button>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.bottom-toast {
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin-bottom: 2rem;
		z-index: 20;

		.container {
			display: flex;
			justify-content: center;

			div {
				max-width: var(--maxWidth, 768px);
				border-radius: 10px;
				padding: 0.5rem 1rem;
				display: flex;
				justify-content: center;
				align-items: center;
				background: $primaryColor;

				button {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 24px;
					border-radius: 10px;
					margin-left: 1rem;
					background: $primaryColor;
					color: white;
					padding: 0.5rem 1rem;
				}

				button.action {
					color: black;
					background: $secondColorLight;
				}
				span {
					flex: 1;
					color: white;
				}
			}
		}
	}
</style>
