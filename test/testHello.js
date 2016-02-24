var lib = require('../lib/util');
var chai = require('chai');
var expect = require('chai').expect;

describe('Plus111',function(){
    it('should plus',function(){
        expect(lib.plus(22,66)).to.be.a.equal(88);

    });
});