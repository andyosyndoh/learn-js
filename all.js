function all(obj) {
    const entries = Object.entries(obj); // Get key-value pairs
    const promises = entries.map(([key, value]) => {
        return Promise.resolve(value).then(resolvedValue => [key, resolvedValue]);
    });

    return Promise.all(promises).then(resolvedEntries => {
        return resolvedEntries.reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
    });
}