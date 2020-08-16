const Author = require('../models/author');
const assert = require('assert');
const mongoose = require('mongoose');

describe('CRUD on Author (Nesting)', () => {

    beforeEach(function (done) {
        mongoose.connection.collections.authors.drop(() => done());
    });

    it('Create Author', function (done) {
        let authr = new Author({
            name: "Ahmed",
            age: 25,
            books: [
                { title: "Title1", pages: 400 },
                { title: "Title2", pages: 500 }
            ],
        });

        authr.save().then(() => {
            Author.findOne({ name: "Ahmed" }).then((res) => {
                assert(res);
                done();
            });
        });
    });

    it('Add Book to Author', function (done) {
        let authr = new Author({
            name: "Ahmed",
            age: 25,
            books: [
                { title: "Title1", pages: 400 },
                { title: "Title2", pages: 500 }
            ],
        });

        authr.save().then(() => {
            Author.findOne({ name: "Ahmed" }).then((res1) => {
                res1.books.push({ title: "Title3", pages: 600 });
                res1.save().then(() => {
                    Author.findOne({ name: "Ahmed" }).then((res2) => {
                        assert(res2);
                        done();
                    });
                });
            });
        });
    });
});