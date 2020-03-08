interface User {
  username: string;
  password: string;
};

const logInUser = (user: User): boolean => {
  return user.username === 'johnstamos';
};

const potentialUser = {
  username: 'johnstamos',
  password: 'pass123',
};

const loggedIn = logInUser(potentialUser);
