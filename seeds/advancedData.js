const { Advanced } = require("../models");

const advancedData = [
  {
    title: "Spanish Language Learning Workbook",
    author: "Masterclass International School",
    // link: "https://www.amazon.com/Spanish-Language-Learning-Workbook-Communication/dp/B09K21NW84/ref=sr_1_1?crid=QLI7U6TPM36U&keywords=advanced+spanish+learning+for+adults&qid=1670942612&sprefix=advanced+spanish+learning+for+adults%2Caps%2C103&sr=8-1",
    price: "$19.95",
    audiobook: "false",
    aBook_id: 1,
  },
  {
    title: "Practice Makes Perfect: Advanced Spanish Grammar",
    author: "Rogelio Vallecillos",
    // link: "https://www.amazon.com/Practice-Makes-Perfect-Advanced-Spanish/dp/1260010813/ref=sr_1_17?crid=QLI7U6TPM36U&keywords=advanced+spanish+learning+for+adults&qid=1670942659&sprefix=advanced+spanish+learning+for+adults%2Caps%2C103&sr=8-17",
    price: "$15.30",
    audiobook: "false",
    aBook_id: 2,
  },
  {
    title: "Advanced Spanish: The Step-by-Step Guide",
    author: "Lingo Publishing",
    // link: "https://www.amazon.com/Advanced-Spanish-Step-Step-Comprehension/dp/B0BJ56VW7K/ref=sr_1_7?crid=QLI7U6TPM36U&keywords=advanced+spanish+learning+for+adults&qid=1670942659&sprefix=advanced+spanish+learning+for+adults%2Caps%2C103&sr=8-7",
    price: "$13.44",
    audiobook: "true",
    aBook_id: 3,
  },
  {
    title: "Spanish Tutor: Grammar and Vocabulary Workbook",
    author: "Juan Kattan-Ibarra",
    // link: "https://www.amazon.com/Spanish-Tutor-Vocabulary-Workbook-intermediate/dp/1473602378/ref=sr_1_8?crid=QLI7U6TPM36U&keywords=advanced+spanish+learning+for+adults&qid=1670942659&sprefix=advanced+spanish+learning+for+adults%2Caps%2C103&sr=8-8",
    price: "$21.99",
    audiobook: "false",
    aBook_id: 4,
  },
  {
    title: "Advanced Spanish Step-by-Step",
    author: "Barabra Bergstein",
    // link: "https://www.amazon.com/Advanced-Spanish-Step-Step-Accelerated/dp/0071768734/ref=sr_1_10?crid=QLI7U6TPM36U&keywords=advanced+spanish+learning+for+adults&qid=1670942659&sprefix=advanced+spanish+learning+for+adults%2Caps%2C103&sr=8-10",
    price: "$16.99",
    audiobook: "false",
    aBook_id: 5,
    
  },
];

const seedAdvanced = () => Advanced.bulkCreate(advancedData);

module.exports = seedAdvanced;
