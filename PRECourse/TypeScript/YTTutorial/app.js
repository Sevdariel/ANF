// takie użyciie jest zbędne
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Maximilian',
//   age: 30
// };
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var personTuple = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var personEnum = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActivities;
// favoriteActivities = 'Sports';
// favoriteActivities = ['Sports', 1];
var favoriteActivitiesAny;
favoriteActivities = ['Sports'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    // console.log(hobby.map());
}
if (personEnum.role === Role.AUTHOR) {
    console.log('is author');
}
