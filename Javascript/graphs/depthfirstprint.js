function depthFirstPrint(graph, source){
    let stack = [source]
    let queue = [source]

    while (stack.length > 0 ) {
        //let current = stack.pop() 
        let current = stack.shift()
        console.log(current)

        for (let neighbor of graph[current]){
            stack.push(neighbor)
        }

    }
}


let graph = {
    a : ['b' , 'c'],
    b : ['d'] ,
    c : ['e'] ,
    d : ['f'] ,
    e : [] ,
    f : []
}; 


depthFirstPrint(graph, 'a')