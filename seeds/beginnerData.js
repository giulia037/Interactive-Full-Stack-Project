const { Beginner } = require("../models");

const beginnerData = [
  {
    title: "Learn Spanish With Short Stories for Adult Beginners",
    author: "Explore ToWin",
    // link: "https://www.amazon.com/gp/product/B0BCNX8VKT?ref_=dbs_m_mng_rwt_calw_tpbk_0&storeType=ebooks&qid=1670517169&sr=1-6",
    price: "$12.97",
    audiobook: "true",
    bBook_id:1,
  },
  {
    title: "Complete Spanish Workbook",
    author: "Exlore ToWin",
    // link: "https://www.amazon.com/gp/product/B095GSMHCY?ref_=dbs_m_mng_rwt_calw_tpbk_1&storeType=ebooks&qid=1670517169&sr=1-6",
    price: "$12.97",
    audiobook: "false",
    bBook_id: 2,
  },
  {
    title: "Spanish Short Stories for Beginners",
    author: "Fluency Faster",
    // link: "https://www.amazon.com/Spanish-Short-Stories-Beginners-Vocabulary/dp/B0914TWXL4/ref=sr_1_6?keywords=spanish+short+stories+for+beginners&qid=1670942005&sr=8-6",
    price: "14.95",
    audiobook: "false",
    bBook_id:3,
  },
  {
    title: "Learn Spanish for Adult Beginners",
    author: "Explore ToWin",
    // link: "https://www.amazon.com/Learn-Spanish-Adult-Beginners-Books/dp/B09HG58SNP/ref=sr_1_5?crid=ETTISJIP1Y56&keywords=learn+spanish+for+beginners&qid=1670942074&sprefix=learn+spanish+for+beginner%2Caps%2C97&sr=8-5",
    price: "$16.31",
    audiobook: "true",
    bBook_id: 4,
  },
  {
    title: "No Nonsense Spanish Workbook",
    author: "Cailtin H. Cueno",
    // link: "https://www.amazon.com/Nonsense-Spanish-Workbook-Jam-packed-intermediate/dp/153332672X/ref=sr_1_5?crid=1KWNSA8QKKEGP&keywords=spanish+workbook+for+adults&qid=1670942221&sprefix=spaniush+workbook+%2Caps%2C95&sr=8-5",
    price: "$11.99",
    audiobook: "false",
    bBook_id: 5,
  },
];

const seedBeginner = () => Beginner.bulkCreate(beginnerData);

module.exports = seedBeginner;
