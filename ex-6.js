let height = undefined;
let result;


function Nullish(height) {
    return undefined ?? height
}
result = Nullish(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
