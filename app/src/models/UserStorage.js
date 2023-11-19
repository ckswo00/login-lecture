"use strict";

class UserStorage {
    static #users ={
        id: ["chanjae", "poir", "이찬재"],
        psword: ["1234", "1234", "123456"],
        name: ["찬재", "포일", "이찬재"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;