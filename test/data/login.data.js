module.exports = {
    validLogin: {
        username: 'standard_user',
        password: 'secret_sauce'
    },

    invalidLogins: [
        { username: 'wrong', password: 'secret' },
        { username: 'standard_user', password: 'wrong' },
        { username: '', password: '' }
    ]
};
