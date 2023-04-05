<script lang="ts">
	export let date: Date = new Date()
	export let onDateChange: (newDate: Date) => void = () => {}
	export let label: string = 'Select a date'

	function handleDateChange(event: Event) {
		const newDate = new Date((event.target as HTMLInputElement).value)
		onDateChange(newDate)
		date = newDate
	}
</script>

<div class="flex flex-col">
	<label for="datepicker" class="leading-4 mb-1 font-medium">{label}</label>
	<input
		id="datepicker"
		type="date"
		value={date.toISOString().slice(0, 10)}
		on:input={handleDateChange}
		class="h-12 border border-primary-lighter rounded px-3 py-2 focus:outline-none focus:border-primary text-base"
	/>
</div>
