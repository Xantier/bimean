'use strict';

/* jasmine specs for controllers go here */

describe('MyCtrl1', function() {

    beforeEach(module('myApp'));

    var scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('MyCtrl1', {
            $scope: scope
        });
    }));

    it('should have a list of 3 items', function() {
        expect(scope.phones.length).toBe(3);
    });
});