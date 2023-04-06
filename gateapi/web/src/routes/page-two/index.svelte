<script lang="ts">
	import { onMount } from 'svelte'
	import axios from 'axios'
	import type { OrderDetails } from '../../types'

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	})

	let orderId: number
	let orderDetails: OrderDetails[] = []
	let total: string
	let isLoading = true
	let error: string | null = null

	async function fetchOrder() {
		try {
			const response = await axios.get('http://localhost:8000/orders/1')
			orderId = response.data.id
			orderDetails = response.data.order_details
			total = formatter.format(
				orderDetails.reduce(
					(acc, item) => acc + parseFloat(item.price) * item.quantity,
					0
				)
			)
		} catch (error) {
			console.error(error)
			error = 'An error occurred while fetching the order.'
		} finally {
			isLoading = false
		}
	}

	onMount(fetchOrder)
</script>

<svelte:head>
	{#if orderId}
		<title>Order #{orderId}</title>
	{/if}
</svelte:head>

<main class="max-w-4xl mx-auto py-6">
	{#if isLoading}
		<p class="text-center text-gray-600">Loading order...</p>
	{:else if error !== null}
		<p class="text-center text-red-600">{error}</p>
	{:else if orderDetails.length === 0}
		<p class="text-center">No items found in this order.</p>
	{:else}
		<h1 class="text-2xl font-medium mb-4">Order #{orderId}</h1>
		<table class="w-full table-fixed border-collapse">
			<thead class="bg-border-color">
				<tr>
					<th class="w-1/6 px-4 py-2 border">Image</th>
					<th class="w-1/3 px-4 py-2 border">Product</th>
					<th class="w-1/6 px-4 py-2 border">Price</th>
					<th class="w-1/6 px-4 py-2 border">Quantity</th>
					<th class="w-1/6 px-4 py-2 border">Total</th>
				</tr>
			</thead>
			<tbody>
				{#each orderDetails as item}
					<tr>
						<td class="px-4 py-2 border flex justify-center">
							<img
								class="w-20 h-20 object-contain bg-zinc-100"
								src={item.image}
								alt=""
							/>
						</td>
						<td class="px-4 py-2 border">
							<span class="ml-2">{item.product.title}</span>
						</td>
						<td class="px-4 py-2 border"
							>{formatter.format(parseFloat(item.price))}</td
						>
						<td class="px-4 py-2 border">{item.quantity}</td>
						<td class="px-4 py-2 border"
							>{formatter.format(parseFloat(item.price) * item.quantity)}</td
						>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<td colspan="4" class="px-4 py-2 font-medium border">Total:</td>
					<td class="px-4 py-2 font-medium border">{total}</td>
				</tr>
			</tfoot>
		</table>
	{/if}
</main>
