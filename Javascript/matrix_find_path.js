var hasPath = function(maze, start, destination) {
    maze[start[0]][start[1]] = 1;
    return searchMazeHelper(maze, start, destination);
};
function searchMazeHelper(maze, current, end) { // dfs
    if (current[0] == end[0] && current[1] == end[1]) {
        return true;
    }
    let neighborIndices, neighbor;
    // Indices: 0->top,1->right, 2->bottom, 3->left 
    let directions = [ [0,1] , [1,0] , [0,-1] , [-1,0] ];
    for (const direction of directions) {
        neighborIndices = [current[0]+direction[0], current[1]+direction[1]];
        if (isFeasible(maze, neighborIndices)) {
            maze[neighborIndices[0]][neighborIndices[1]] = 1;
            if (searchMazeHelper(maze, neighborIndices, end)) {
                return true;
            }
        }
    }
    return false;
}
function isFeasible(maze, indices) {
    let x = indices[0], y = indices[1];
    return x >= 0 && x < maze.length && y >= 0 && y < maze[x].length && maze[x][y] === 0;
}
var maze = [[0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [1,1,1,1,1],
            [0,0,0,0,0]]

console.log(hasPath(maze, [0,0], [4,4]));