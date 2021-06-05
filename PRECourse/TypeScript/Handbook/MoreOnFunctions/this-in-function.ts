const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};

interface User {
    id: number;
    admin: boolean;
}

declare const getDB: () => DB;

interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admin = db.filterUsers(function (this: User) {
    return this.admin;
});

// const admins = db.filterUsers(() => this.admin);
// The containing arrow function captures the global value of 'this'.
// Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.