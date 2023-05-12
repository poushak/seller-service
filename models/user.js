const Utils = require('./utils');
const db = require('../db');

class User extends Utils {
    constructor({
        id, firstName, lastName, fbEmail, defaultAddress
    }) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.fbEmail = fbEmail;
        this.defaultAddress = defaultAddress;
        this.id = id;
    }

    async getUser() {
        try {
            const { rows, rowCount } = await db.query(`SELECT * FROM users WHERE id = $1`, [this.id]);
            if (!rowCount) {
                throw 'no such user';
            }

            const {id, first_name, last_name, dob, gender} = rows[0];
            return {
                id, dob, gender,
                firstName: first_name,
                lastName: last_name,
            };
        } catch (err) {
            throw err
        }
    }

    async updateUser() {
        try {
            const { rows, rowCount } = await db.query(this.getUpdateQuery(), [this.id]);
            if (!rowCount) {
                throw 'no such user to update';
            }

            return await this.getUser();
        } catch (err) {
            throw err
        }
    }

    getUpdateQuery() {
        const queryFields = [];
        Object.keys(this).map(key => {
            if (['id'].includes(key) || !this[key]) {
                return;
            } else {
                queryFields.push(`${this.camelToSnake(key)}='${this[key]}'`);
            }
        })

        queryFields.push(`updated_at='${new Date().toISOString()}'`);
        const query = `UPDATE users SET ${queryFields.join(', ')} WHERE id = $1`;

        return query
    }
}

module.exports = User;