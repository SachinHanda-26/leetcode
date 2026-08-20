/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let i = 0;
    function decode() {
        let res = "";
        let num = 0;
        while (i < s.length) {
            let char = s[i];
            if (!isNaN(char)) {
                num = num * 10 + parseInt(char);
                i++;
            }
            else if (char == "[") {
                i++;
                let str = decode();
                res = res + str.repeat(num);
                num = 0;
            }
            else if (char == "]") {
                i++;
                return res;
            }
            else {
                res = res + char;
                i++;
            }
        }
        return res;
    };
    return decode();
};