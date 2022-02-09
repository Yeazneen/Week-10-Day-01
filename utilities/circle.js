// Functions for Area and Circumference //

const area = (r) => {
    return (r * r) * Math.PI
};

const circumference = (r) => {
    return (r * 2) * Math.PI
};

module.exports = {
    area,
    circumference
};