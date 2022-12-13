const { Intermediate } = require("../models");

const intermediateData = [
  {
    title: "Intermediate Spanish Short Stories",
    author: "Lingo Mastery",
    // link: "https://www.amazon.com/Intermediate-Spanish-Short-Stories-Captivating/dp/1721044612/ref=sr_1_4?crid=ZBQ5EHAHBQZO&keywords=intermediate+spanish+learning+for+adults&qid=1670942335&sprefix=intermediate+spanish+learning+for+adults%2Caps%2C92&sr=8-4",
    price: "$14.95",
    audiobook: "false",
    iBook_id: 1,
  },
  {
    title: "Intermediate Spanish Workbook for Adults",
    author: "Explore ToWin",
    // link: "https://www.amazon.com/Learn-Intermediate-Spanish-Adults-Workbook/dp/B0B6LHYY8D/ref=sr_1_5?crid=ZBQ5EHAHBQZO&keywords=intermediate+spanish+learning+for+adults&qid=1670942381&sprefix=intermediate+spanish+learning+for+adults%2Caps%2C92&sr=8-5",
    price: "$12.97",
    audiobook: "true",
    iBook_id: 2,
  },
  {
    title: "Spanish Grammar for Intermediate Learners",
    author: "Isabel Navarro Torres",
    // link: "https://www.amazon.com/Spanish-Grammar-Intermediate-Learners-Complete/dp/B0BBQ6ZWQB/ref=sr_1_6?crid=ZBQ5EHAHBQZO&keywords=intermediate+spanish+learning+for+adults&qid=1670942381&sprefix=intermediate+spanish+learning+for+adults%2Caps%2C92&sr=8-6",
    price: "$18.90",
    audiobook: "false",
    iBook_id: 3,
  },
  {
    title: "50 Spanish Coffee Breaks: Short Stories",
    author: "Coffe Break Languages",
    // link: "https://www.amazon.com/50-Spanish-Coffee-Breaks-activities/dp/1399802453/ref=sr_1_7?crid=ZBQ5EHAHBQZO&keywords=intermediate+spanish+learning+for+adults&qid=1670942381&sprefix=intermediate+spanish+learning+for+adults%2Caps%2C92&sr=8-7",
    price: "$11.59",
    audiobook: "false",
    iBook_id: 4,
  },
  {
    title: "Madrigal's Magic Key to Spanish",
    author: "Margarita Madrigal, with illustrations by Andy Warhol",
    // link: "https://www.amazon.com/50-Spanish-Coffee-Breaks-activities/dp/1399802453/ref=sr_1_7?crid=ZBQ5EHAHBQZO&keywords=intermediate+spanish+learning+for+adults&qid=1670942381&sprefix=intermediate+spanish+learning+for+adults%2Caps%2C92&sr=8-7",
    price: "$14.99",
    audiobook: "false",
    iBook_id: 5,
  },
];

const seedIntermediate = () => Intermediate.bulkCreate(intermediateData);

module.exports = seedIntermediate;
