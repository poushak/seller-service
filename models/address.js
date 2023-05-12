const db = require('../db');
const { v4 } = require('uuid');

class Address {
    constructor({
        id, userId, firstLine, secondLine, fullAddress, pincode, country, state, city, latitude, longitude
    }) {
        this.userId = userId;
        this.firstLine = firstLine;
        this.secondLine = secondLine;
        this.fullAddress = fullAddress;
        this.pincode = pincode;
        this.country = country;
        this.state = state;
        this.city = city;
        this.latitude = latitude;
        this.longitude = longitude;

        this.id = id || v4();
        this.deleted = false;
    }

    async createAddress() {
        try {
            const { rows } = await db.query(
                `INSERT INTO addresses(id, user_id, first_line, second_line, address_string, city, state, country, pincode, lat, long) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
                [this.id, this.userId, this.firstLine, this.secondLine, this.fullAddress, this.city, this.state, this.country, this.pincode,
                this.latitude, this.longitude]
            );

            delete this.deleted;
            delete this.userId;

            return this;
        } catch (error) {
            throw error;
        }
    }

    async getAddresses() {
        try {
            const { rows } = await db.query(`SELECT * FROM addresses WHERE deleted = false AND user_id = $1`, [this.userId]);

            return this.transformRows(rows);
        } catch (error) {
            throw error;
        }
    }

    async getAddress() {
        try {
            const { rows, rowCount } = await db.query(`SELECT * FROM addresses WHERE deleted = false AND user_id = $1 AND id = $2`, [this.userId, this.id]);
            if (!rowCount) {
                throw 'no such address';
            }

            return this.transformRows(rows)[0];
        } catch (error) {
            throw error;
        }
    }

    async updateAddress() {
        try {
            console.log(this);
            const { rows, rowCount } = await db.query(this.getUpdateQuery(), [this.userId, this.id]);
            if (!rowCount) {
                throw 'no such address to update';
            }

            delete this.deleted;
            delete this.userId;

            return this;
        } catch (error) {
            throw error;
        }
    }

    async deleteAddress() {
        try {
            const { rows, rowCount } = await db.query(`DELETE FROM addresses WHERE deleted = false AND user_id = $1 AND id = $2`, [this.userId, this.id]);
            if (!rowCount) {
                throw 'no such address';
            }

            return 'address deleted successfully';
        } catch (error) {
            throw error;
        }
    }

    getUpdateQuery() {
        const queryFields = [];
        Object.keys(this).map(key => {
            if (['userId', 'id', 'deleted', 'createdAt', 'updatedAt'].includes(key) || !this[key]) {
                return;
            } else if (key === 'latitude') {
                queryFields.push(`lat=${this[key]}`);
            } else if (key === 'longitude') {
                queryFields.push(`long=${this[key]}`);
            } else if (key === 'fullAddress') {
                queryFields.push(`address_string='${this[key]}'`);
            } else {
                queryFields.push(`${this.camelToSnake(key)}='${this[key]}'`);
            }
        })

        queryFields.push(`updated_at='${new Date().toISOString()}'`);
        const query = `UPDATE addresses SET ${queryFields.join(', ')} WHERE user_id = $1 and id = $2`;

        return query
    }

    camelToSnake(key) {
        const newKey = key.split('').reduce((acc, curr) => {
          const keyCode = curr.charCodeAt(0);
          if (keyCode < 97) {
            acc += '_' + curr.toLowerCase();
          } else {
            acc += curr
          }
      
          return acc;
        }, '')
      
        return newKey
    }

      transformRow(row) {
        const { id, first_line, second_line, address_string, city, state, country, pincode, lat, long, created_at, updated_at} = row;
        return {
            id,
            pincode,
            country,
            state,
            city,
            firstLine: first_line, 
            secondLine: second_line,
            fullAddress: address_string,
            latitude: lat,
            longitude: long,
            createdAt: created_at,
            updatedAt: updated_at,
        }
    }

    transformRows(rows) {
        const newRows = rows.map(this.transformRow)

        return newRows;
    }
};


module.exports = Address;