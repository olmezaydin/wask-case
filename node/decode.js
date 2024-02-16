const crypto = require('crypto');

const md5 = (val) => crypto.createHash('md5').update(val).digest('hex');

const decodeHash = async (hashedData) => {
    return new Promise((resolve) => {
        const characters = '1234567890abcdefghijklmnoprstuvwxyz_+.@'.match(/.{1}/g);
        const explodedData = hashedData.match(/.{32}/g);
        const lastKey = explodedData[explodedData.length - 1];
        let lastValue = null; // Uzunluğu tek Sayı olan hashedData için
        const decodedData = explodedData.map((hashedValue) => {
            return characters.map((val) => {
                if (!lastValue) lastValue = lastKey && lastKey === md5(`${md5(val)}${val}${md5(val)}`) ? val : '';
                return characters.map((val1) => {
                    return hashedValue === md5(`${md5(`${val}${val1}`)}${val}${val1}${md5(`${val}${val1}`)}`) ? `${val}${val1}` : '';
                }).join('');
            }).join('');
        }).join('');
        return resolve(`${decodedData}${lastValue ?? ''}`);
    });
}

(async () => {
    if (process.argv[2]) {
        if (process.argv[2].length >= 32) {
            console.log('Sending Arg: ', process.argv[2]);
            console.log('Decoded Value: ', await decodeHash(process.argv[2]));
        } else {
            console.log('Hash Not Valid');
        }
    } else {
        console.log('Send Arg, Example:', 'node /app/decode.js encoded_hash');
    }
})();
