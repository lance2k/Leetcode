import collections
from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # Initialize sets for rows, columns and squares
        rows = collections.defaultdict(set)
        cols = collections.defaultdict(set)
        squares = collections.defaultdict(set)
        # Iterate over each cell in the board
        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                # Check if the cell value is already in the row, column or square
                if (board[r][c] in rows[r] or
                    board[r][c] in cols[c] or
                        board[r][c] in squares[(r // 3, c // 3)]):
                    return False
                # Add the cell value to the row, column and square sets
                rows[r].add(board[r][c])
                cols[c].add(board[r][c])
                squares[(r // 3, c // 3)].add(board[r][c])

        return True

    def isValidSudoku(self, board: List[List[str]]) -> bool:

        result = []
        # Iterate over each cell in the board
        for r in range(9):
            for c in range(9):
                element = board[r][c]
                if element != ".":
                    result += [(r, element), (element, c),
                               (r // 3, c // 3, element)]

        return len(result) == len(set(result))
