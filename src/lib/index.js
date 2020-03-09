import faker from 'faker';

export const getRundomNumber = max => Math.floor(Math.random() * Math.floor(max));

const colors = [
  {
    id: 0,
    name: 'tomato',
  },
  {
    id: 1,
    name: 'indigo',
  },
  {
    id: 2,
    name: 'sienna',
  },
  {
    id: 3,
    name: 'darkcyan',
  },
  {
    id: 4,
    name: 'slategray',
  },
];

const getColorId = index => index % colors.length;

const generateDepartments = num =>
  Array(num)
    .fill()
    .map((value, index) => ({
      id: index,
      title: `${faker.commerce.product()} ${faker.commerce.department()}`,
      colorId: getColorId(index),
    }));

const generateUsers = (usersNum, departmentsNum) => {
  const getDepartmentsArr = () =>
    Array(getRundomNumber(10))
      .fill()
      .map(() => getRundomNumber(departmentsNum))
      .filter((value, index, arr) => arr.indexOf(value) === index);

  return Array(usersNum)
    .fill()
    .map((value, index) => ({
      id: index,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      departmentIds: getDepartmentsArr(),
    }));
};

export const generateData = (usersNum = 300, departmentsNum = 5) => ({
  colors,
  departments: generateDepartments(departmentsNum),
  users: generateUsers(usersNum, departmentsNum),
});
