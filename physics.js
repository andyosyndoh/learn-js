function getAcceleration(obj) {
    if (obj.f !== undefined && obj.m !== undefined) {
        return obj.f / obj.m;
    };

    if (obj.Δv !== undefined && obj.Δt !== undefined && obj.Δt !== 0) {
        return obj.Δv / obj.Δt;
    };

    if (obj.d !== undefined && obj.t !== undefined && obj.t !== 0) {
        return (2 * obj.d) / (obj.t * obj.t);
    };
    return "impossible";
};
