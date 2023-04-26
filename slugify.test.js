const slugify = require("./slugify.js");

// tests based on Webflow behavior
test("", () => {
  expect(slugify("Natalie Strauss")).toBe("natalie-strauss");
  expect(slugify("D'Angelo Russell")).toBe("dangelo-russell");
  expect(slugify("Miguel Ángel García")).toBe("miguel-angel-garcia");
  expect(slugify("Jürgen Großhardt")).toBe("jurgen-grosshardt");
  expect(slugify('Edson "Pelé" Arantes')).toBe("edson-pele-arantes");
  expect(slugify("Judy Lai-Norling")).toBe("judy-lai-norling");
  expect(slugify("Dr. Joshua Fisher")).toBe("dr-joshua-fisher");
});
