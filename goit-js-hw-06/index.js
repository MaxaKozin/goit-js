import Users from './users.js'; //eslint-disable-line

console.log('===============Task-1================');

const getUserNames = users => {
  const userNames = users.map(user => user.name);
  return userNames;
};

console.log(getUserNames(Users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.log('===============Task-2================');

const getUsersWithEyeColor = (users, color) => {
  const usersWithSameEyeColor = users.filter(user => user.eyeColor === color);
  return usersWithSameEyeColor;
};

console.log(getUsersWithEyeColor(Users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log('===============Task-3================');

const getUsersWithGender = (users, gender) => {
  const usersWithSameGender = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return usersWithSameGender;
};

console.log(getUsersWithGender(Users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log('===============Task-4================');

const getInactiveUsers = users => {
  const innactiveUsers = users.filter(user => user.isActive === false);
  return innactiveUsers;
};

console.log(getInactiveUsers(Users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log('===============Task-5================');

const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find(user => user.email === email);
  return userWithEmail;
};

console.log(getUserWithEmail(Users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(Users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

console.log('===============Task-6================');

const getUsersWithAge = (users, min, max) => {
  const usersWithAge = users.filter(user => user.age >= min && user.age <= max);
  return usersWithAge;
};

console.log(getUsersWithAge(Users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(Users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log('===============Task-7================');

const calculateTotalBalance = users => {
  const totalBalances = users
    .map(user => user.balance)
    .reduce((acc, value) => acc + value, 0);
  return totalBalances;
};

console.log(calculateTotalBalance(Users)); // 20916

console.log('===============Task-8================');

const getUsersWithFriend = (users, friendName) => {
  const filteredUsers = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
  return filteredUsers;
};

console.log(getUsersWithFriend(Users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(Users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

console.log('===============Task-9================');

const getNamesSortedByFriendsCount = users => {
  const sortedByFriendsCount = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
  return sortedByFriendsCount;
};

console.log(getNamesSortedByFriendsCount(Users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.log('===============Task-10================');

const getSortedUniqueSkills = users => {
  const sortedUniqueSkills = users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((value, i, arr) => arr.indexOf(value) === i)
    .sort();
  return sortedUniqueSkills;
};
console.log(getSortedUniqueSkills(Users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
