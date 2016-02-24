var lib = require('../../lib/util');
var chai = require('chai');
var expect = require('chai').expect;

describe('Plus333',function(){

    describe('333',function(){
        it('should plus 333',function(){
            expect(lib.plus(22,33)).to.be.a.equal(88);

        });
    });

});