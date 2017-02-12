module.exports ={

	reverseString :function (str) {

					if(str === '') return null;
					//str = str.split("").reverse().join("");

					if (str === str.split("").reverse().join("")) return true;


				    return str.split("").reverse().join("");
				}


};