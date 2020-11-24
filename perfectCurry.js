

function makeCurry(nums) {
    const sum = nums.reduce((acc,sum)=>acc + sum, 0);
    if (sum % 3) {
        return 'noLuck'
    }
    const sumToFind = sum / 3;
    console.log(sum, sumToFind)
    let result = [];
    let numMap = {}
    for (let i = 0; i < nums.length; i++) {

        numMap[nums[i]] = i;
    }
    console.log(numMap)
    let pairs=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]==sumToFind){
        console.log('Pair',i)
        pairs.push([i])
        }else {
            if(numMap[Math.abs(sumToFind-nums[i])]){
                console.log('Pair',i,numMap[Math.abs(sumToFind-nums[i])])
                 pairs.push([i,numMap[Math.abs(sumToFind-nums[i])]])
            }
        }
    }
    
    const ingredients=['P','Q','R'];
    let count=0
    pairs.forEach((pair)=>{
        if(count<3){
            pair.forEach((p)=>{result[p]=ingredients[count]})
        count++;
        }
        
    })
    return result


}

makeCurry([3, 7, 2, 5, 4])
