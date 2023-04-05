export type OrderDetails = {
	product: {
		title: string
		in_stock: number
		maximum_speed: number
		passenger_capacity: number
		id: string
	}
	product_id: string
	price: string
	quantity: number
	id: number
	image: string
}

export type PropertyType = 'single' | 'multi' | 'town' | 'condo'
