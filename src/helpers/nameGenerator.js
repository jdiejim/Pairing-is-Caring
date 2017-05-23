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
    'Python',
    'git',
    'npm',
    'node.js',
    'atom',
    'prototypes'
  ]

  const array = [];
  const len = getRandomNumber(tags.length - 1, 1);

  for (let i = 0; i < len; i++) {
    let tag = tags[getRandomNumber(len)];
    if (!array.includes(tag)) {
      array.push(tag);
    }
  }

  return array;
}

export function namesObjectGenerator(names) {
  let array = [];
  for (let i = 0; i < getRandomNumber(15, 1); i++) {
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

export function getStudentInfo(name) {
  return [name, getSlackUsername(name), getTags(), getSlots(), getRandomNumber(7)]
}
