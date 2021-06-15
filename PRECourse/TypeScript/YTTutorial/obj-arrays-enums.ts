// takie użyciie jest zbędne
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Maximilian',
//   age: 30
// };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  //role: [2, 'author']
}
const personTuple: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

enum Role {
  ADMIN, READ_ONLY, AUTHOR
};

const personEnum = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
// favoriteActivities = 'Sports';
// favoriteActivities = ['Sports', 1];
let favoriteActivitiesAny: any[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
  // console.log(hobby.map());
}

if (personEnum.role === Role.AUTHOR) {
  console.log('is author');
}
