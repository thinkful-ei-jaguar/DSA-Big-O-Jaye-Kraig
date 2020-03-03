function TOH(n,source,dest,temp){

    if (n===1){
        print(source,dest)
        return;
    }


    TOH(n-1,source,temp,dest) 
    print(source,dest)
TOH(n-1,temp,dest,source)

}

function print(a,b){
    console.log(`moving from ${a} to ${b}`)
}

TOH(4,'source','destination','temporary')