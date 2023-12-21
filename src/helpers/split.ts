export default function split(array: any[], n: number) {
    const result = [];
    const itemsPerGroup = Math.ceil(array.length / n);

    for (let i = 0; i < n; i++) {
        const startIndex = i * itemsPerGroup;
        const endIndex = (i + 1) * itemsPerGroup;
        const group = array.slice(startIndex, endIndex);
        result.push(group);
    }

    return result;
}