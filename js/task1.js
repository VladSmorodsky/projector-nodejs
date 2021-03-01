const groupBy = (array, func) => {
    return array.reduce( (groupedObj, item) => {
        let resultKey = func(item);
        
        groupedObj[resultKey] = groupedObj[resultKey] || [];
        groupedObj[resultKey].push(item);

        return groupedObj; 
    }, {});
}