//kilometerToMeter
function kilometerToMeter(km){
    let meter = km*1000;
    return meter;
}

//budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    let total = (watch*50) + (mobile*100) + (laptop*500);
    return total;
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
}

//megaFriend
function megaFriend(arr){
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
