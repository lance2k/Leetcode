/**
 * Checks if a given Sudoku board is valid.
 * @param board A 9x9 2D array representing a Sudoku board, where each cell is a digit ('1'-'9') or '.' representing an empty cell.
 * @returns A boolean indicating whether the Sudoku board is valid.
 * @description This function validates a Sudoku board by ensuring that each row, column, and 3x3 sub-box contains no duplicate digits.
 * 
 * Time Complexity:
 * - The time complexity is O(1). Although we perform nested iterations over the 9x9 board (total 81 cells), this number is constant and independent of the input size.
 * 
 * Space Complexity:
 * - The space complexity is O(1). The Set can store up to 243 unique strings in the worst case (81 rows + 81 columns + 81 sub-boxes), but since the board size is fixed, the space used is constant.
 * 
 * Each string stored in the Set is derived from fixed-size operations, and the number of strings remains constant regardless of the input.
 */
function isValidSudoku(board: string[][]): boolean {
	const set = new Set<string>();

	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			if (board[r][c] === ".") {
				continue;
			}

			const row = `row:${r} value:${board[r][c]}`;
			const column = `column:${c} value:${board[r][c]}`;
			const subBox = `subBox:${Math.floor(r/3)}${Math.floor(c/3)} value:${board[r][c]}`;      

			if (set.has(row) || set.has(column) || set.has(subBox)) {
				return false;
			}

			set.add(row).add(column).add(subBox);
		}
	}
	return true;
}