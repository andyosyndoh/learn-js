function throttle(func, wait) {
    let lastCallTime = 0;

    return function (...args) {
        const context = this;
        const now = Date.now();

        if (now - lastCallTime >= wait) {
            lastCallTime = now;
            func.apply(context, args);
        }
    };
}

function opThrottle(func, wait, { leading = true, trailing = true } = {}) {
    let timeout;
    let lastCallTime = 0;
    let lastArgs;
    let lastContext;

    const invokeFunction = () => {
        lastCallTime = Date.now();
        func.apply(lastContext, lastArgs);
        timeout = null;
    };

    return function (...args) {
        const context = this;
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;

        lastArgs = args;
        lastContext = context;

        if (leading && lastCallTime === 0) {
            invokeFunction();
        }

        if (timeSinceLastCall >= wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            invokeFunction();
        } else if (trailing && !timeout) {
            timeout = setTimeout(() => {
                invokeFunction();
                lastCallTime = 0;
            }, wait - timeSinceLastCall);
        }
    };
}
