function keyIn (...keys) {
    return (value, key) => keys.includes(key)
}

export {
    keyIn
}