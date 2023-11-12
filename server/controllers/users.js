import { db } from '../connect.js';

export const getUserController = (req, res) => {
  const userId = req.params.userId;
  const q = 'SELECT * FROM users WHERE id = $1';

  db.query(q, [userId], (err, data) => {
    if (err) {
      return res.status(500).json(err.message);
    }

    if (data.rows.length === 0) {
      return res.status(400).json(`User not found!`);
    }
    const { password, ...restData } = data.rows[0];
    res.status(200).json(restData);
  });
};
