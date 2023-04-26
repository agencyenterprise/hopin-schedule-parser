const slugify = require("slugify");

module.exports = (string) =>
  slugify(string, {
    lower: true,
    strict: true,
  });
