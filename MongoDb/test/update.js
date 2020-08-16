const User = require('../models/user');
const assert = require('assert');

describe('CR(U)D on User', () => {
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

    it('Update One User by findOneAndRemove', function (done) {
        User.findOneAndUpdate({ name: "Ahmed" }, { name: "Mohamed" }).then(() => {
            User.findOne({ name: "Mohamed" }).then((res) => {
                assert(res);
                done();
            });
        })
    });

    it('Increment age by 1', function (done) {
        User.update({}, { $inc: {age: 1} }).then(() => {
            User.findOne({ name: "Ahmed" }).then((res) => {
                assert(res.age === 26);
                done();
            });
        })
    });

});