export function kolobok(name) {
  let action = "";

  switch (name) {
    case "дедушка":
      action = "Я от дедушки ушёл";
      break;
    case "заяц":
      action = "Я от зайца ушёл";
      break;
    case "лиса":
      action = "Меня съели";
      break;
    default:
      action = "Нет такого персонажа";
  }

  return action;
}

export function newYear(characterName) {
  let message = "";

  switch (characterName) {
    case "Дед Мороз":
      message = `${characterName}! ${characterName}! ${characterName}!`;
      break;
    case "Снегурочка":
      message = `${characterName}! ${characterName}! ${characterName}!`;
      break;
    default:
      message = "Нет такого персонажа в сказке";
  }

  return message;
}

module.exports = {
  kolobok,
  newYear,
};
