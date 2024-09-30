export function orderByProps(object, listProperty) {
    let result = [];
    const sortedKey = Object.keys(object).sort();
    const listResult = [...listProperty, ...sortedKey.filter(el1 => !listProperty.includes(el1))];
    for (const prop in object) {
        const listProp = listResult.indexOf(prop);
        result.splice(listProp, 0, {key: prop, value: object[prop]});
    }
    return result;
}