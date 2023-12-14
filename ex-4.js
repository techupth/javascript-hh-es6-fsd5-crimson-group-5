let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
studentProfile.hobbies = [...studentProfile.hobbies,...additionalHobbies]
let newStudentProfile = {...studentProfile}
console.log(newStudentProfile);
