function debounce(func, wait = 0) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

function opDebounce(func, wait, leading = false) {
    let timeout;
    let lastInvokeTime = 0;

    return function (...args) {
        const context = this;
        const now = Date.now();

        const shouldInvokeLeading = leading && (now - lastInvokeTime >= wait);
        clearTimeout(timeout);

        if (shouldInvokeLeading) {
            lastInvokeTime = now;
            func.apply(context, args);
        } else {
            timeout = setTimeout(() => {
                lastInvokeTime = Date.now();
                func.apply(context, args);
            }, wait);
        }
    };
}
