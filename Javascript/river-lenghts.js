function riverSizes(matrix) {
    // Write your code here.
    let seen = {}
    let riverLengths = []
    let directions = [ [1,0] , [-1,0] , [0,1] , [0,-1] ];
      
      
    for (let i  = 0; i<matrix.length ; i++ ){
        for (let j = 0; j < matrix[0].length ; j++){
            if (matrix[i][j] === 0  || seen[[i,j]]===1) continue ;
                let current = [i,j]
                let length = bfs(matrix, current, seen)
                riverLengths.push(length)
        }
    }
    //console.log('seen list', seen)
    return riverLengths
  }
  
  function isValid(matrix, current , seen) {
      let check = current[0] >= 0 && current[0] < matrix.length && current[1] >= 0 && current[1] <matrix[0].length && seen[current]===undefined && matrix[current[0]][current[1]] === 1 ;
      return check
  }

function bfs(matrix, currentPos , seen ){
    let directions = [ [1,0] , [-1,0] , [0,1] , [0,-1] ];
    let queue = [currentPos]
    seen[currentPos] = 1;
    let distance = 1 ;
    
    while(queue.length) {
      let current = queue.shift()
      seen[current] =1 ;

      for (const direction of directions){
          let neighbor = [current[0] + direction[0] , current[1] + direction[1] ]

            if( isValid(matrix, neighbor, seen )) {
                distance++
                queue.push(neighbor)
                seen[neighbor] = 1 ;
                console.log(neighbor, distance)
            }
        }
    }
    return distance
}

  let matrix = [
      [1,0,0,1,0],
      [1,0,1,0,0],
      [0,0,1,0,1],
      [1,0,1,0,1],
      [1,0,1,1,0]
  ]

  console.log(riverSizes(matrix))