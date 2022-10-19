const EventEmitter = require('events').EventEmitter;
const { EventEmitter } = require('stream');
const util = require('util');

const Calc = function() {
    this.on('stop', function() {
        console.log('Calc에 stop이벤트 전달됨');
    });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a, b) {
    return a+b;
};

module.exports = Calc;