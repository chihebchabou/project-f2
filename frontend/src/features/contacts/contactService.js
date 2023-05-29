import axios from 'axios';

const API_URL = '/api/contacts/';

// Create new Contact service
const createContact = async (contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, contactData, config);
  return response.data;
};

// Get user contacts service

// Update user's contact service

// Delete user's contact service

const contactService = {
  createContact,
};

export default contactService;