import moment from 'moment/moment.js';
import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

export const getPostsController = (req, res) => {
  const postsOwnerId = req.query.ownerId;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'privateKey', (err, userData) => {
    if (err) return res.status(401).json('Token is not valid');

    let q;
    let values;

    if (postsOwnerId !== 'undefined') {
      q = `SELECT p.*, u.id AS user_id, username, profile_pic FROM posts AS p JOIN users AS u ON (u.id = p.user_id) WHERE p.user_id = $1 ORDER BY p.created_at DESC`;
      values = [postsOwnerId];
    } else {
      q =
        'SELECT p.* , u.id AS user_id, username, profile_pic FROM posts AS p JOIN users AS u ON (u.id = p.user_id) LEFT JOIN contacts AS c ON (p.user_id = c.contact_id) WHERE c.user_id = $1 OR p.user_id = $2 ORDER BY p.created_at DESC';
      values = [userData.id, userData.id];
    }

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err.message);

      return res.status(200).json(data);
    });
  });
};

export const addPostController = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'privateKey', (err, userData) => {
    if (err) return res.status(401).json('Token is not valid!');

    const q =
      'INSERT INTO posts (user_id, description, img, created_at) VALUES ($1, $2, $3, $4)';

    const values = [
      userData.id,
      req.body.description,
      req.body.img,
      moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    ];

    db.query(q, [...values], (err, data) => {
      if (err) return res.status(500).json(err.message);

      return res.status(200).json('Post has been created successfully!');
    });
  });
};

export const deletePostController = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'privateKey', (err, userData) => {
    if (err) return res.status(401).json('Token is not valid!');

    const q = 'DELETE FROM posts WHERE id=$1 AND user_id=$2';

    db.query(q, [req.query.postId, userData.id], (err, data) => {
      if (err) return res.status(500).json(err.message);

      return res.status(200).json('Post has been deleted successfully!');
    });
  });
};
