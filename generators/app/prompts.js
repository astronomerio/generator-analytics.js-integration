'use strict';


module.exports = [
    {
        message: 'Description',
        name: 'description',
        validate: function (str) {
            return !!str;
        }
    }
];