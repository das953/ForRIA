

var addresses = require('./addresses');

var result = [];

var regexp = /([А-ЯЇЁ0-9][^,]*[а-яїё])(?:\D*\s)?([^\s/]*[А-ЯЇЁ0-9])?(?:\D*)?(\d*)?/;


for(address of addresses){
    result.push({
        "street":regexp.exec(address)[1],
        "house": SetHouse(address),
        "flat":SetFlat(address)

    });
}

function SetHouse(adress) {
    if(regexp.exec(adress)) return regexp.exec(adress)[2];
    return "-";
}
function SetFlat(adress) {

    if (regexp.exec(adress)[3]) return regexp.exec(adress)[3];
    return "-";
}



module.exports = result;








