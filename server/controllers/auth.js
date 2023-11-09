import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../connect.js';

export const registerController = (req, res) => {
  const { username, email, password } = req.body;
  const q = 'SELECT * FROM users WHERE email = $1';

  if (!email || !password || !username) {
    return res
      .status(400)
      .json({ messsage: 'username, email and password are required.' });
  }

  db.query(q, [email], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.rows.length) {
      return res.status(409).json({ message: 'User already exists' });
    }

    //generate encrypted password
    const salt = bcrypt.genSaltSync(10);
    const encryptedPass = bcrypt.hashSync(password, salt);

    //create new user
    const q =
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';

    db.query(q, [username, email, encryptedPass], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json({ success: 'User created successfully' });
    });
  });
};

export const loginController = (req, res) => {
  const { email, password: reqPassword } = req.body;
  const q = 'SELECT * FROM users WHERE email = $1';

  if (!email || !reqPassword) {
    return res
      .status(400)
      .json({ messsage: 'email and password are required.' });
  }

  db.query(q, [email], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    //user is not found
    if (data.rows.length === 0) {
      return res.status(404).json({ message: 'Users not found' });
    }

    const { password: userPassword, ...restData } = data.rows[0];
    const validPassword = bcrypt.compareSync(reqPassword, userPassword);

    if (!validPassword) {
      return res.status(400).json({ message: 'Wrong password or username' });
    }

    const token = jwt.sign({ id: res.id }, 'privateKey');

    // set token to cookie
    res
      .cookie('accessToken', token, {
        httpOnly: true,
      })
      .status(200)
      .json(restData);
  });
};

export const logoutController = (req, res) => {
  res
    .clearCookie('accessToken', {
      secure: true,
      sameSite: 'none',
    })
    .status(200)
    .json({ success: 'User is logged out' });
};

// try {
// } catch (error) {
//   res.status(500).json({ message: error.message });
// }
