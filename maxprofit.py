def solution(prices):
    # Type your solution here
    print(max(prices) , min(prices))
    return max(prices) - min(prices)


prices =  [6,0,-1,10]
print(solution(prices))