const axios = require('axios');

const AIRTABLE_API_KEY = 'YOUR_AIRTABLE_API_KEY';
const AIRTABLE_BASE_ID = 'YOUR_AIRTABLE_BASE_ID';
const AIRTABLE_TABLE_NAME = 'Certificates';

class Certificate {
  static async create(name, course) {
    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          fields: {
            Name: name,
            Course: course
          }
        },
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data.id;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = Certificate;
