const User = require('../models/user');
const assert = require('assert');

describe('C(R)UD on User', () => {
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

    it('Select One User by name', function (done) {
        User.findOne({ name: "Ahmed" }).then((res) => {
            assert(res);
            done();
            // console.log(res);
        })
    });

    it('Select One User by ID', function (done) {
        User.findOne({ _id: us._id }).then((res) => {
            assert(res._id.toString === us._id.toString);
            done();
            // console.log(res);
        });
    })
});