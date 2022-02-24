



function removeIslands(matrix) {
    // Write your code here.
    let seen = {}

    for (let i = 0; i < matrix.length ; i++){
        for (let j = 0; j < matrix[0].length ; j++){
            let current = [i, j] ;
            if (matrix[i][j] === 0 || seen[current] ) continue

            let isIsland = bfs(matrix, current, seen) ;
            console.log(isIsland)
            if (isIsland) matrix[i][j] = 0
            //run bfs
            
        }
    }

    return matrix;
  }

function bfs( matrix, coord , seen){
    let queue = [coord] ;
    let directions = [[1,0], [-1, 0] , [0,1], [0,-1]]

    while(queue.length){
        let current =  queue.shift()
        console.log("current: ", current)
        for (let direction of directions){
            let neighbor = [current[0] + direction[0], current[1] + direction[1]]
            let x = neighbor[0] ;
            let y = neighbor[1] ;
            console.log("neighbor: ", neighbor)
            
    
            if (isValid(matrix, neighbor, seen) ){
                
                if (matrix[x][y] === 1){
                    queue.push(neighbor)
                    seen[neighbor] = true;
                }
                if ((x === 0 || x === matrix.length -1 || y === 0 || y === matrix[0].length) && matrix[x][y] === 1 ) return false
            }
        
        }
    }
    return true

}


function isValid(matrix, current, seen){
    let x =  current[0] ;
    let y =  current[1] ;

    let xBounds =  current[0] >= 0 && current[0] < matrix.length ;
    let yBounds =  current[1] >= 0 && current[1] < matrix[0].length ;
    let check = xBounds && yBounds && seen[current] === undefined ;
    return check ;
}

let matrix = [
    [1,0,0,1,0],
    [1,0,1,0,0],
    [0,0,0,0,1],
    [1,0,1,0,1],
    [1,0,1,1,0]
]


console.log(removeIslands(matrix))