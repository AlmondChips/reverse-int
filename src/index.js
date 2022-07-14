module.exports = function reverse (n) {
	let pureNum = "";
	if (n.toString().includes("-"))
	{
	  pureNum += n.toString().substring(1);
  
	  pureNum = pureNum.toString().split("").reverse().join("");
	  
	  return pureNum;
	}
	else{
	  
	  
	  pureNum = n.toString().split("").reverse().join("");
	  
	  return Number(pureNum);
	}
  
   
  
	
}
