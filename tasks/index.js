// arrays
const classA = [

    // objetos
    {
        name: 'Mayk',
        grade: 1.8 
    },

    {
        name: "Diego",
        grade: 10 },

    {
        name: "Fulano",
        grade: 2 
    }
    
]

const classB = [

    // objetos
    {
        name: 'Cleiton',
        grade: 10 
    },

    {
        name: "Robson",
        grade: 10 
    },

    {
        name: "Siclano",
        grade: 0
    },

    {
        name: "Maria",
        grade: 5
    }
]


function calculateAvarage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    return sum / students.length
}


function sendMessage(avarage, turma) {
    if (avarage > 5) {
        console.log(`Congratulations ${turma} the avarege is ${avarage}`)

    } else {
        console.log(`The Avarage of ${turma} is below 5`)

    }
}

function MarkerAsFlunked(student) {
    student.failed = false;

    if (student.grade < 5) {
        student.failed = true
    }
}

function sendFlunkedMessage(students) {
    if (students.failed) {
        console.log(`The student ${students.name} failed with this grade ${students.grade}`)
    }
}

function studentsFlunked(students) {
    for (let student of students) {
        MarkerAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const avarage1 = calculateAvarage(classA)
const avarage2 = calculateAvarage(classB)

sendMessage(avarage1, 'class A')
sendMessage(avarage2, 'class B')

studentsFlunked(classA)
studentsFlunked(classB) 