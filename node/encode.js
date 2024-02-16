const crypto = require('crypto');

const md5 = (val) => crypto.createHash('md5').update(val).digest('hex');

const encodeHash = async (data) => {
    return new Promise((resolve) => {
        return resolve(data.match(/.{1,2}/g).map((val) => {
            return md5(`${md5(val)}${val}${md5(val)}`);
        }).join(''));
    });
}

(async () => {
    if (process.argv[2]) {
        console.log('Sending Arg: ', process.argv[2]);
        console.log('Hash Code: ', await encodeHash(process.argv[2]));
    } else {
        console.log('Send Arg, Example: ', 'node /app/encode.js a@b.com');
    }
})();
