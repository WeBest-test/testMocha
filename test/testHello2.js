var lib = require('../lib/util');
var chai = require('chai');
var expect = require('chai').expect;

describe('Plus222',function(){

    describe('1111',function(){
        it('should plus 222',function(){
            expect(lib.plus(22,33)).to.be.a.equal(88);

        });
    });

});