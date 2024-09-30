export function listAttack(obj) {
    // const { special } = obj;
    let result = [];
    for (const attack of obj.special) {
        const { id, name, icon, description = 'Описание недоступно' } = attack;
        result.push({id, name, icon, description});
    }
    return result;
}