'use strict'

var SequenceSorterKata = function(){
}

SequenceSorterKata.prototype.calculateMinimumValue = function(list) {
    list.sort(function(a,b){return a-b})
    return list[0];
}

SequenceSorterKata.prototype.calculateMaximumValue = function(list) {
    list.sort(function(a,b){return a-b})
    return list[list.length-1];
}

SequenceSorterKata.prototype.calculateListLength = function(list){
    return list.length
}

SequenceSorterKata.prototype.calculateAverage = function(list) {
    var average
    ,   sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i]
    }
    average = sum/list.length
    return average;
};