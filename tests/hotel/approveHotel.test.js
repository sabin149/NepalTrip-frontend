const Hotel = require('../../models/userModel');
const mongoose = require('mongoose');

// use the new name of the database
const url = 'mongodb://localhost:27017/test_nepaltrip';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});

describe('Test for Hotel Schema', () => {

    it('Test for Approve Hotel',async () => {
        const hotel = await Hotel.findByIdAndUpdate({"_id":"6207ec775f69106131688a13",hotel_validaty:true});
        expect(hotel.ok);
    });

});

