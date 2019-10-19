const myFunction = (...args) => {
    console.log('myFunction()')
    console.log('this is the argument length', args.length)
    console.log('these are the arguments (spread)', ...args)
    console.log('these are the arguments (args)', args)
}

const mySecondFunction = (arg1, arg2, arg3, arg4) => {
    console.log('mySecondFunction()')
    console.log('arg1', arg1)
    console.log('arg2', arg2)
    console.log('arg3', arg3)
    console.log('arg4', arg4)
}

// example one
myFunction([1,2,3,4])

// exmaple two
myFunction('1','2', '3', '4')

// exmaple three
myFunction('one')

// example four
myFunction()

//exmaple five
const args = [1,2,3]
mySecondFunction(...args)

try {
    const args2 = { "key1": 1,  "key2": 2,  "key3": 3 }
    mySecondFunction(...args2)
} catch (e) {
    console.log('ERROR CAUGHT')
    console.log(e)
}