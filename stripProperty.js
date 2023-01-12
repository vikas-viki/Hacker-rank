function stripProperty(obj, prop) {
    if (obj[prop] === undefined) {
        console.log(obj)
        return obj;
    } else {
        let map = new Map();
        for (key in obj) {
            if (key !== prop) {
                map.set(key, obj[key]);
            }
        }
        let retObj = new Object();
        map.forEach((key, value) => {
            retObj[value] = key
        })
        console.log(retObj)
        return 'retObj';

    }
}
let onj= {
    'foo': 2,
    'bar': 3,
    'baz': 1
}
stripProperty(onj, 'foo')
