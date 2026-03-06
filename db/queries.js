const pool = require("./pool");

async function getAllUsernames(search) {
  if (search && search.trim() !== "") {
    const { rows } = await pool.query(
      "SELECT * FROM usernames WHERE username ILIKE $1",
      [`%${search}%`]
    );

    return rows;
  }

  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsers(){
  await pool.query('delete from usernames');
}
module.exports = {
  getAllUsernames,
  insertUsername,
  deleteAllUsers,
};
