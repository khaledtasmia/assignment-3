//kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer >= 1) {
        let meter = kilometer * 1000;
        return meter;
    }
    else if (kilometer < 1) {
        return -1;
    }
}

//budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 1 && mobile >= 1 && laptop >= 1) {
        let total = (watch * 50) + (mobile * 100) + (laptop * 500);
        return total;
    }
    else{
        return -1;
    }
}

//hotelCost
function hotelCost(days){
    if(days>=1 && days<=10){
        let cost = days*100;
        return cost;
    }
    else if(days>=11 && days<=20){
        let remainingdays = days - 10;
        let cost = (10*100) + (remainingdays*80);
        return cost;
    }
    else if(days>=21){
        let remainingdays = days - 20;
        let cost = (10*100) + (10*80) + (remainingdays*50);
        return cost;
    }
    else if(days<1){
        return -1;
    }
}

//megaFriend
function megaFriend(arr){
    if(arr.length == 0){
        return -1;
    }
    else if(arr.length>=1){
        let elementLength = arr[0].length;
    let element = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i].length>elementLength){
            elementLength = arr[i].length;
             element = arr[i];
        }
    }
    return element;
    }
}
