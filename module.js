/*You will need to develop a Node.js module that exports a single function 
with two parameters, n and d that computes how many numbers between 0 and 10
 ^ n (10 to the n -th power) contain the digit d at least once.  */
 
 module.exports = function number(n, d) {
    var i = 0;
	var count = 0;
    var m = 10^n;
	
	for (i=1; i<m; i++){
		while (i>0) {
			if (i%10 == d) {
				count++;
				break;
			}else{
				i = i/10;
			}
		}
	}
    return count;
};
