/* Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]" */

var defangIPaddr = function(address) {
    const arr = address.split("")
    for(let i = 0; i <= arr.length -1; i++){
        if(arr[i] == "."){
            arr[i] = "[.]"
        }
    }
    return arr.join("")
};

console.log(defangIPaddr("1.1.1.1"))