const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [

  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    synopsis:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    synopsis:
      "It’s been another long summer at the Dursley’s for Harry Potter. He can’t wait to get back to Hogwarts and is counting down the days until he can return. He’s surprised when, on his birthday, a strange elfish creature named Dobby shows up with dire warnings for Harry: He must not return to Hogwarts!",
    date: new Date(Date.now())
  },
  {title: "Harry Potter and the Prisoner of Azkaban",
  author: "J.K. Rowling",
  synopsis:
    "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban who they believe is one of Lord Voldemort's old allies.",
  date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    synopsis:
      "Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    synopsis:
      "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. Five million copies were sold in the first 24 hours of publication.[1] It is the longest book of the series.",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Half Blood Prince",
    author: "J.K. Rowling",
    synopsis:
      "Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J. K. Rowling and the sixth and penultimate novel in the Harry Potter series. Set during protagonist Harry Potter's sixth year at Hogwarts, the novel explores the past of Harry's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    synopsis:
      "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
