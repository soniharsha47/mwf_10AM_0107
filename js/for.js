var ar = [
        {
            name:'grras',
            age: 25,
            gender: 'male',
        },
        {
            name:"john",
            age: 30,
            gender: 'male'
        },
        {
            name:"Malti",
            age:25,
            gender: 'female'
        }
    ]

// console.log(ar[0]['gender'])
for(i=0;i<ar.length;i++){
    // console.log(ar[i]['gender'])
    if(ar[i]['gender']=='male'){
        continue;
    }
        console.log(ar[i])
}