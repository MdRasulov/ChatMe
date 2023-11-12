import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

export const getContactsController = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'privateKey', (err, userData) => {
    if (err) return res.status(401).json('Token is not valid');

    const q =
      'SELECT contacts.id, contacts.contact_id, users.username, users.email, users.profile_pic FROM contacts INNER JOIN users ON contacts.contact_id = users.id WHERE user_id = $1';

    db.query(q, [userData.id], (err, data) => {
      if (err) return res.status(500).json(err.message);
      return res.status(200).json(data.rows);
    });
  });
};

export const addContactController = (req, res) => {
  const { contactId } = req.body;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'privateKey', (err, userData) => {
    if (err) return res.status(401).json('Token is not valid');

    const q = 'INSERT INTO contacts (user_id, contact_id) VALUES ($1, $2)';

    db.query(q, [userData.id, contactId], (err, data) => {
      if (err) return res.status(500).json(err.message);
      return res.status(200).json('Contact added');
    });
  });
};

export const deleteContactController = (req, res) => {
  const { contactId } = req.query;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'privateKey', (err, userData) => {
    if (err) return res.status(401).json('Token is not valid');

    const q = 'DELETE FROM contacts WHERE user_id = $1 AND contact_id = $2';

    db.query(q, [userData.id, contactId], (err, data) => {
      if (err) return res.status(500).json(err.message);
      return res.status(200).json('Contact deleted');
    });
  });
};
