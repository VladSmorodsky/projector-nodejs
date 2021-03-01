const invert = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).map( ([key, value]) => [value, key])
    );        
}

//console.log(invert({ 'a': 'some', 'b': 'object', 'c': 1 })) // { 'some': 'a', 'object': 'b', '1': 'c' }