const groupBy = (array, func) => {
    return array.reduce( (groupedObj, item) => {
        let resultKey = func(item);
        
        groupedObj[resultKey] = groupedObj[resultKey] || [];
        groupedObj[resultKey].push(item);

        return groupedObj; 
    }, {});
}

//console.log(groupBy([3.6, 3.7, 6.4, 8.9], Math.floor)) // { '3': [3.6, 3.7], '6': [6.4], '8': [8.9] }