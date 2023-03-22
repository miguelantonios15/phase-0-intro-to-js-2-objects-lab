let employee = {
    name: 'Miguel',
    streetAddress: '7 Pine Tree Rd',
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};

    newObj[key] = value;

    return newObj; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){

    obj[key] = value;

    return obj; 
}

function deleteFromEmployeeByKey(obj, key, value){
    const newObj = {...obj};

    newObj[key] = value;

    delete newObj.key; 

    return newObj; 
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){

    obj[key] = value;

    delete obj.key;

    return obj; 
}
