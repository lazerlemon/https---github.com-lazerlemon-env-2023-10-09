const { kolobok } = require("./tale");

test("дедушка", () => {
  const name = "дедушка";
  const action = kolobok(name);
  console.log(name, action);
  expect(action).toBe("Я от дедушки ушёл");
});

test("заяц", () => {
  const name = "заяц";
  const action = kolobok(name);
  console.log(name, action);
  expect(action).toBe("Я от зайца ушёл");
});

test("лиса", () => {
  const name = "лиса";
  const action = kolobok(name);
  console.log(name, action);
  expect(action).toBe("Меня съели");
});

const { newYear } = require("./tale");

test("Дед Мороз", () => {
  const characterName = "Дед Мороз";
  const message = newYear(characterName);
  console.log(characterName, message);
  expect(message).toBe("Дед Мороз! Дед Мороз! Дед Мороз!");
});

test("Снегурочка", () => {
  const characterName = "Снегурочка";
  const message = newYear(characterName);
  console.log(characterName, message);
  expect(message).toBe("Снегурочка! Снегурочка! Снегурочка!");
});
