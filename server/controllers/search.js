import { db } from '../connect.js';

export const findUserController = (req, res) => {
  const username = req.query.username;
  const q = 'SELECT * FROM users WHERE username = $1';

  db.query(q, [username], (err, data) => {
    if (err) {
      return res.status(500).json(err.message);
    }

    //removing user password from result
    if (data.rows.length > 0) {
      const result = data.rows.map((user) => {
        const { password, ...restData } = user;
        return restData;
      });
      return res.status(200).json(result);
    }

    res.status(200).json(data.rows);
  });
};
