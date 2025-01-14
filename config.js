const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_IDBWM-XMD;;;H4sIAAAAAAAAA5VV25KqOBT9l7xqH7mKWtVVg6goinhBBadOTQUIGLlKggJd/vsptLu6H+ac6XlLhWTtlbXW3ryBJMUEzVEFBm8gy/EVUtQsaZUhMADDwvdRDtrAgxSCAYCrcTSORS28ClWiLHwrVJOenrQKNY+hrF/WAnIisjUn+90ruLdBVjgRdv8AeBC629P6WupcHGllp3MrvWBaVaJrmJWA+UU6k4NWfpFUnL6Ce4MIcY6TYJydUIxyGM1RtYI4/x59pCxKurUtzd9oEstG4dkWhsv1pLqss824eytalaie98aYSb9Hv5Wx06NxKHE+9GeCflI8++qxfBFfA3Iw7eHN7tL8NkdSOX7SJzhIkDfzUEIxrb6t+1bvQSat6fnUTYctw12yk3Bpl53U43fVPuLTnXDytNJSD8E3iQtxqVszR46yzdg5yrM0WrnhcZSHUNBsqG7G7qJkF+VY3X0lvso/shL+H91bo9XVil1zGylBaUnZxbZoVcFQCrGm+d0+t95sgqNJjf3te/T1mbpWee6qRmKxJrXbOkbnoz7VDx3nxBo7/SAwxqWjqVpAPulDWuR/YnmIev3LbciuGWO+VzsrV9x4zn6/onbsnEN4Ndd5yZxDoS8cMTdenoSyuoT2ZbnoZrw+8nd1etG0ud0xpkNfqgNblVdbef36eFGIqpkHBuy9DXIUYEJzSHGaPPZEpg2gd90iN0f0IS+wJnFpwPVeI3xkKbLem19Gl+hWBpq4iYfFtLdbZUyHWOxt9graIMtTFxGCvCkmNM0rHRECA0TA4O+fbZCgkj6Na8rxbBv4OCd0lxRZlELvw9WPj9B10yKh2ypxlWaBcjBgPrcRpTgJSKNjkcDcPeErUk6QEjDwYUTQvQ08dMUuavAAni7oP3253LCYGqHPkZ414oOG8ilNnkekrsfzAi++9JEjvggi6730JNZ74XoOdLqwK3RFAbQBfu+Z5s5vLdx4UuWfziqqhe2ZK3bzPgerKjxWgv6w4ak9ypEHBjQvUBs40A2LzExDlPwBdw+97Vmvedc0D71ppY38slU7ccH2dl9wn56CwdvnnFJSr8Hj5iJrylMJtEH8iCBuXs6JXJftS31REMQB2/+L/Lg1QsIs+5Eg2uC+i97c8BCFOCJgAJSFiUMojMbLjhg7N1WVx4GsBDL4NOkj7c80kcOm7tKlPpkgwluKs62NU4eZ1aNj7zBUV6qyz4cdU5pmOHj9FxAwAKsWW4eX1DoR2Ou516XvYCe+qP7kKDB6va/UOUcE37j0hUA+koLpjKCK1I216q+GfVxxvGMNr+Wis0OszUzS0CLLkSK/NtWeYflarM4NvjTlM9Kv7hYJkT6e2pP92mDg9ChosYL7G469KGtJPrCdtJ7EZO2GaBQGLWgvrint3M7CMTUCPl9MBIWf7KxMHAXPPnzMgeh9/uJHh7y9R8vH6DHOEhij/zbna8qZe/sLxvuA/E2Shs4kdFu5aQ43Vr5kbzFD6tTvK/qN8yfB5lwGEbz5TKvs2im433+2QRZB6qd53Px+Ey9PsQfaIIKEyp+NauIYEQrjDAxYie/2uhIj8vdfl/duWN4HAAA= || '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER :252619795445 process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

