/**
 * Calculates the maximum profit that can be made by buying and selling a stock.
 * @param prices An array of prices where each element represents the price of the stock on a day.
 * @returns The maximum profit that can be made.
 */
function maxProfit(prices: number[]): number {
	let maxProfit = 0;
	let minPrice = prices[0];

	// Iterate through the prices array
	for (let index = 1; index < prices.length; index++) {
		// Calculate the profit if selling at the current price
		const profit = prices[index] - minPrice;

		// Update minPrice to the minimum price encountered so far
		minPrice = Math.min(minPrice, prices[index]);

		// Update maxProfit if the current profit is greater
		maxProfit = Math.max(maxProfit, profit);
	}

	return maxProfit;
}

/**
 * Calculates the maximum profit that can be made by buying and selling a stock.
 * This version uses two pointers to track the buying and selling points.
 * @param prices An array of prices where each element represents the price of the stock on a day.
 * @returns The maximum profit that can be made.
 */
function maxProfit2(prices: number[]): number {
	let maxProfit = 0;
	let left = 0; // Pointer to buy stock
	let right = 1; // Pointer to sell stock

	// Iterate through the prices array using two pointers
	while (right < prices.length) {
		// Check if there is profit to be made
		if (prices[right] > prices[left]) {
			// Calculate the profit if selling at the current price
			const profit = prices[right] - prices[left];

			// Update maxProfit if the current profit is greater
			maxProfit = Math.max(maxProfit, profit);
		} else {
			// Update the left pointer to the current position if buying at a lower price
			left = right;
		}
		// Move the right pointer to the next day
		right++;
	}

	return maxProfit;
}
