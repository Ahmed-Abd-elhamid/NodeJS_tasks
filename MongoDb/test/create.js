const User = require('../models/user');
const assert = require('assert');

describe('(C)RUD on User', () => {
    it('Create User', function (done) {
        let us = new User({
            name: "Ahmed",
            age: 25,
            is: false,
        });

        us.save().then(() => {
            assert(!us.isNew);
            done();
        })
    });
});