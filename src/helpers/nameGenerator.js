export function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function nameGenerator(names) {
  return `${names.firstname[getRandomNumber(1000)]} ${names.lastname[getRandomNumber(1000)]}`;
}

export function getSlackUsername(name) {
  let array = name.split(' ').map(e => e.toLowerCase());
  return `@${array[0][0]}-${array[1]}`;
}

export function getTags() {
  const tags = [
    'React',
    'SASS',
    'CSS',
    'HTML',
    'Js',
    'jQuery',
    'DOM',
    'Ruby',
    'Rails',
  ]

  const array = [];
  const len = getRandomNumber(9);

  for (let i = 0; i < len; i++) {
    array.push(tags[i]);
  }

  return array;
}

export function namesObjectGenerator(n, names) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(nameGenerator(names));
  }
  return array;
}

export function getSlots() {
  let options = ['NOT AVAILABLE', 'AVAILABLE', 'PAIRED'];
  let classes = ['not-available', 'available', 'paired'];
  let array = [];

  for (let i = 0; i < 3; i++) {
    let rand = getRandomNumber(2);
    array.push({text: options[rand], class: classes[rand]})
  }

  return array;
}
