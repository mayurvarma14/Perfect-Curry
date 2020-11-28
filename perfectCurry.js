function makeCurry(arr) {
    sum = arr.reduce((acc,val)=>val+acc,0);
    if (sum % 3) return "noLuck";
    division = sum / 3;

    function recurse(arr, result, division, ingredient, sum, i) {
        if (sum === division) {
          
            if (ingredient === "Q") return true;
          
            first = result.indexOf('P');
            return recurse(arr, result, division, "Q", 0, first+1);
        }
        if (i >= arr.length) return false;
        
        success = recurse(arr, result, division, ingredient, sum, i+1);
        if (success) return true;
       
        if (result[i] === "R") {
            result[i] = ingredient;
            success = recurse(arr, result, division, ingredient, sum + arr[i], i+1);
            if (success) return true;
            result[i] = "R";
        }
      
        return false;
    }

  
    result =new Array(arr.length).fill('R');
    if (division === 0) return result; 
    
     success = recurse(arr, result, division, "P", 0, 1);
    return success ? result : "noLuck";
}

console.log(makeCurry([3, 7, 2, 5, 4]));
console.log(makeCurry([3,6,9]));
console.log(makeCurry([3, 7, 2, 5, 4,1,1,1]));
