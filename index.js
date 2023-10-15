function doixung(str){
    if(str < 2){
        return true;
    }
    let changes = 0;
    let first = 0;
    let last = str.length -1;
    while(first < last){
        if(str[first] != str[last]){
            changes++;
        }
        first++;
        last--;
    }
    return changes;
}

