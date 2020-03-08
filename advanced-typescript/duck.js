;
var logInUser = function (user) {
    return user.username === 'johnstamos';
};
var potentialUser = {
    username: 'johnstamos',
    password: 'pass123'
};
var loggedIn = logInUser(potentialUser);
