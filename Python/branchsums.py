class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(tree):
    # Write your code here.
    sums = [] 
    helperFunction(tree, 0 , sums)
    return sums

def helperFunction( tree, branchsum , sums) :
    if tree is None:
        return 
    newsum = branchsum + tree.value
    if tree.left is None and tree.right is None:
        sums.append(newsum)
    helperFunction(tree.left, newsum, sums)
    helperFunction(tree.right, newsum, sums)