

function findPath( matrix , start , end) {
    let explored = {};

    //matrix shift Right, Left, Up , Down
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]

    let stack = [] ;
    let visited = []
    stack.push(start)

    while ( stack.length){
        
        let current = stack.pop()
        visited.push(current)
        //explored[current] = 1;
        
        let x = current[0] ;
        let y = current[1] ;
        //console.log(current)

        for (let direction of directions) {
            
            neighbor = [x + direction[0] , y+direction[1]]
            if (isValid(matrix, neighbor , explored)) {
                stack.push([neighbor[0], neighbor[1]])
                explored[ neighbor] = 1
            }
        }

    }
   
    return visited
}   


function isValid( matrix, coordinates ,visited ){
    
    let check = coordinates[0] >= 0 && coordinates[0] < matrix.length && coordinates[1] >=0 && coordinates[1] < matrix[0].length && matrix[coordinates[0]][coordinates[1]] == 0 &&  visited[coordinates] === undefined;
    return check
}


let matrix = [
    [0,0,0,1],
    [1,0,0,1],
    [1,0,0,1],
    [1,0,1,1],
    [1,0,0,1],
    [1,0,0,0],
    [1,0,1,0],
]

let sol = findPath(matrix, [0,0], [6,3]) ;
console.log(sol)

