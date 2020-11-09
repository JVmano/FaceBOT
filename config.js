require('dotenv').config()

const config = {
  facebook: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    postUrl: process.env.URL,
    commentText: process.env.COMMENT_TEXT
  }
}

module.exports = {
  config
}