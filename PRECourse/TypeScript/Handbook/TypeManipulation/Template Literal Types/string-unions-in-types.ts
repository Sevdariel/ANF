// declare function makeWatchedObject(obj: any): any;

const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});

person.on("firstNameChanged", (newValue) => {
    console.log(`firstName was changed to ${newValue}!`);
})

type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};

// Create a "watched object" with an 'on' method
// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

person.on("firstNameChanged", () => { });

// It's typo-resistent
// person.on("firstName", () => { });
// Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.

// person.on("frstNameChanged", () => {});
// Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.

person.on("firstNameChanged", newName => {
    console.log(`new name is ${newName.toUpperCase()}`);
});

person.on("ageChanged", newAge => {
    if (newAge < 0) {;
        console.warn("warning! negative age");
    }
})