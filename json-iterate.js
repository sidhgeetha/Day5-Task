const myResume = [
  {
    about: {
      name: "Geetha S",
      email: "sidh.geetha@gmail.com",
      phone: 91990001111,
      degree: "B.Sc Computer Science",
    },
    address: {
      street: "1, 1st Block, Koramangala",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },

    profile: {
      linkedIn: "https://www.linkedin.com/in/sidhgeetha/",
    },
    education: [
      {
        degree: "BSc Computer Science",
        college: "Bharathiyar University",
        place: "Nilgiris",
        city: "Coimbatore",
        state: "Tamil Nadu",
      },
      {
        degree: "BSc Computer Science",
        college: "Bharathiyar University",
        place: "Nilgiris",
        city: "Coimbatore",
        state: "Tamil Nadu",
      },
    ],
    languages: ["Tamil", "English"],
  },
  {
    about: {
      name: "Kannan",
      email: "xx.xx@gmail.com",
      phone: 919022221,
      degree: "B.Tech",
    },
    address: {
      street: "1, 1st Block, Koramangala",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },

    profile: {
      linkedIn: "https://www.linkedin.com/in/kk/",
    },
    education: [
      {
        degree: "B.tech",
        college: "London University",
        place: "London",
      },
    ],
    languages: ["German", "English"],
  },
];
geethaResume = myResume[0];

//Scenario 1 : for loop on array
for (let i = 0; i < myResume.length; i++) {
  console.log(myResume[i]);
}

// Scenario 2: for in loop on array
for (let i in myResume) {
  //console.log(myResume[i]);
  console.log(myResume[0].about);
}

//Scenario 3: for in loop on object and print only keys
for (let key in geethaResume) {
  console.log(key);
}

// Scenario 4: for in loop on object and print only values
for (let key in geethaResume) {
  console.log(geethaResume[key]);
}

// Scenario 5: for of loop on object and print key
for (let key of Object.keys(geethaResume)) {
  console.log(key);
}

// Scenario 6: for of loop on object and print values
for (let value of Object.values(geethaResume)) {
  console.log(value);
}

// Scenario 7: for each loop on array and using arrow function
// It return index and value at same time

myResume.forEach((resume, index) => {
  console.log("Index: " + index);
  console.log(resume.about);
});

// Scenario 8: for each loop on object and using arrow function - DOESNT NOT WORK

// Scenario 9: for each loop on array within object
// geethaResume.languages.forEach((value, index, array) => {
//   console.log("index: " + index);
//   console.log(value);
//   console.log(array);
// });



// for (let key in myResume) {
//   console.log(key, myResume[key]);
// }

// //for of
// for (let key of Object.keys(myResume)) {
//   console.log(key, myResume[key]);
// }

// print all the resume 1st language
// for (let i in myResume) {
//   console.log(myResume[i].about.name + " --> " + myResume[i].languages[0]);
// }
