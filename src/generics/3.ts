function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
};

// function merge<T, U>(objA: T, objB: U): T & U {
//     return Object.assign({}, objA, objB);
// };