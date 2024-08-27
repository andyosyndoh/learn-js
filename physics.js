const obj = {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t: 1,
    d: 10
}

function getAcceleration(obj) {
    if (obj === null) {
        return 'impossible';
    }
    a = obj.f / obj.Δvm;
    a = obj.Δv / obj.Δt;
    a = 2*obj.d / obj.t ^ 2;
    return a;
};
