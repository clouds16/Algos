
def caesarCipherEncryptor(string, key):
    values = []
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for index, letter in enumerate(alphabet):
        values.append({ 'letter' : letter , 'index' : index }) 
    return newValues(string, values , key)
		
def newValues(string, values , key ):
    out = '' 
    currentval = 0
    print('hello', values)

    for letter in string:
        for i in values:
            if i.letter == letter :
                currentval = i.value 
                currentval += key
                if currentval > 25:
                    currentval = abs(currentval - 25)
                out = out + values[currentval].letter
    return out 

print( caesarCipherEncryptor( 'abc' , 2))