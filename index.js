

    let students = [
        {
            name: "Davlat",
            age: 15,
            isMarried: true,
            wifes: ["Asad"]
        },
        {
            name: "Jony",
            age: 20,
            isMarried: false,
            wifes: []
        },
        {
            name: "Asad",
            age: 14,
            isMarried: false,
            wifes: ["Shaxriyor"]
        },
        {
            name: "Danila",
            age: 15,
            isMarried: false,
            wifes: []
        },
        {
            name: "Shaxriyor",
            age: 15,
            isMarried: false,
            wifes: []
        },
    ]
    let oldUser = 0
    students.forEach((student) => {
    
        if (student.age > oldUser){
            oldUser = student.age
          }
        })
        console.log("Jony", oldUser);