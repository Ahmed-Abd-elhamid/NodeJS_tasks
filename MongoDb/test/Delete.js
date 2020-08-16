const User = require('../models/user');
const assert = require('assert');

describe('CRU(D) on User', () => {
    let us;

    beforeEach(function (done) {
        us = new User({
            name: "Ahmed",
            age: 25,
            is: false,
        });

        us.save().then(() => {
            assert(!us.isNew);
            done();
        })
    });

    it('Remove One User by findOneAndRemove', function (done) {
        User.findOneAndRemove({ name: "Ahmed" }).then(() => {
            User.findOne({ name: "Ahmed" }).then((res) => {
                assert(!res);
                done();
            });
        })
    });

});