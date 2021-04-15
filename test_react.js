const a = function plus (x, y) {
    return x + y;
};


const b = (x, y) => x + y;


const list = ['1', '7', '3', '4', '2', '9'];

const result = list
    .map((el) => parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value) => Math.max(max, value), 0);


const c = (x = 5, y = 5) => x - y;

// console.log(c(2, 10));


const rest = (a, b, ...params) => {
    console.log(params)
};

// rest(2,5,6,4,6,4,8,9)


const list1 = [1, 2, 3, 10, 5, 6, 7]
const list2 = [8, 1, 2, 3, 4, 11, 6]

const max = Math.max(...list1, 33, ...list2, 10)

// console.log(max)


const programming = {
    name: {
        first: 'Kirill',
        last: 'Smakovenko'
    },
    age: 17,
    position: 'Junior Python Developer',
    role: 'jun',
};

const {name: {first:fxd, last:lxd} = {}} = programming;
const {role: {login:log = 'qwerty'} = {}} = programming;

// console.log(log);

const speak = {
    people: 'bla-bla',
    dog: 'gaf',
    cat: 'myr',
    mouse: 'pi',
    leopard: 'myr',
};

const resSpeak = Object.entries(speak)
    .filter(([, value]) => value === 'myr')
    .map(([key]) => key);


// console.log(resSpeak)

const point = {
    x: [1,5],
    y: [6,2],
    z: {
        first: [3,5],
        last: [9,0]
    }
};

const {z: {first: [zx1, xz2], last: [zx2, zy2]}} = point;

// console.log(zx1, zy2);


const n = ['one', 'two', 'free'];

const text1 = `
    <ul>
        <li>${n[0]}</li>
        <lili${n[1]}</li>
        <li>${n[2]}</li>
    </ul>
`;

// console.log(text1);


const firm = {
    name: 'ddi',
    people: ['Kirill', 'Dima']
}

const shallowCopy = Object.assign({}, firm)

firm.people.push('Vadim')

// console.log(shallowCopy)
const lol = 'lul'

const shallowCopy2 = {...firm, op() {}, lol}

console.log(shallowCopy2)













