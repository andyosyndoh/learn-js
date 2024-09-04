function mult2(num) {
    return function (num2) {
        return num * num2
    }
}

function add3(num) {
    return function (num2) {
        return function (num3) {
            return num + num2 + num3
        }
    }
}

function sub4(num) {
    return function (num2) {
        return function (num3) {
            return function (num4) {
                return num - num2 - num3 - num4
            }
        }
    }
}

