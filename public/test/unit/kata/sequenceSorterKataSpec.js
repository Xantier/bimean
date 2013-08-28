'use strict'

/*
Your task is process a integer sequence to determine the following statistics:

   Minimum Value
   Maximum Value
   Sequence Length
   Average Value

E.g. For a integer sequence "6, 9, 15, -2, 92, 11" we have the following answers:

   Minimum Value: -2
   Maximum Value: 92
   Sequence Length: 6
   Average Value: 18.1666666
*/

describe("Sequence Sorter Kata Test Suite", function() {
    var kata
    ,   list;

    beforeEach(function() {
        kata = new SequenceSorterKata()
        list = [6,-3,4,64,234,-54,32,64]
    })

    it("should create a Kata object", function() {
        expect(kata).not.toBe(undefined);
    })

    it("should return a value when the list is passed to it", function() {
        var answer = kata.calculateMinimumValue(list);
        expect(answer).not.toBe(null)
    })

    it("should return the minimum value from the list", function() {
        var answer = kata.calculateMinimumValue(list);
        expect(answer).toBe(-54)
    })

    it("should return the correct minimum value from the list", function() {
        list.push(-55)
        var answer = kata.calculateMinimumValue(list);
        expect(answer).toBe(-55)
    })

    it("should return the maximum value from the list", function() {
        var answer = kata.calculateMaximumValue(list);
        expect(answer).toBe(234)
    })

    it("should return the correct maximum value from the list", function() {
        list.push(235)
        var answer = kata.calculateMaximumValue(list);
        expect(answer).toBe(235)
    })

    it("should calculate the length of the list", function() {
        var answer = kata.calculateListLength(list)
        expect(answer).toBe(8)
    })

    it("should return the average of the numbers from the list", function(){
        var answer = kata.calculateAverage(list)
        ,   sum =0
        ,   average
        ,   length = list.length;
        for (var i = 0; i < list.length; i++) {
            sum += list[i];
        }
        average = sum/length

        expect(answer).toBe(average)
    })

})