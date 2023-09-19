// TODO: generation of keys
// TODO: key validation

const chars = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let key = [];
let private_key = [];

for(var i = 0; i < 64; i++) {
    let index = Math.floor(Math.random() * chars.length);
    key.push(chars[index]);

    switch(i % 4) {
        case 0: 
            index += i/4;
            break;
        case 1: 
            index += 2*i/4;
            break;    
        case 2: 
            index += 3*i/4;
            break;
        case 3: 
            index += i;
            break;
    }

    while(index >= chars.length) {
        index -= chars.length-1;    
    }

    private_key.push(chars[Math.floor(index)]);
}

console.log(`public key:\n${key.join("")}`);
console.log(`private key:\n${private_key.join("")}`);

