<script lang="ts">
	import clsx from 'clsx'

	export let label: string = ''
	export let type: 'submit' | 'button' | 'reset' = 'button'
	export let variant: 'filled' | 'outlined' = 'filled'
	export let onClick = () => {}
</script>

<button
	class={clsx(
		'border border-primary uppercase p-3 font-medium rounded-full min-w-[7.75rem] leading-4',
		variant === 'filled'
			? 'bg-primary text-white hover:opacity-80 transition-opacity'
			: 'bg-white text-text'
	)}
	{type}
	on:click={onClick}>{label}</button
>
