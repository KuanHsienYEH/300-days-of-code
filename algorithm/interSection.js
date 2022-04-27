let interSection = (s1, s2) =>{
    let a1 = s1.split('');
    let a2 = s2.split('');
    if(a1.length !== a2.length){
        return false
    }else{
        let a1_counter ={};
        let a2_counter ={};
        let addcounter = (arr, counter)=>{
            for(let i=0; i < arr.length; i++){
                if(!counter[arr[i]]){
                    counter[arr[i]] = 1;
                }else{
                    counter[arr[i]]++;
                }
            }
        };
        addcounter(a1, a1_counter);
        addcounter(a2, a2_counter)

        for(let item in a1_counter){
            if(!a2_counter[item]){
                return false
            }
            if(a2_counter[item] !== a1_counter[item]){
                return false
            }
        }
    }
}
console.log(interSection("aabb","abab"))
console.log(interSection("aaaaaabb","aaaab"))