const { Beginner } = require('../models');

const beginnerdata = [
  {
    title: 'Learn Spanish With Short Stories for Adult Beginners',
    author: 'Explore ToWin',
    // link: 'https://www.amazon.com/gp/product/B0BCNX8VKT?ref_=dbs_m_mng_rwt_calw_tpbk_0&storeType=ebooks&qid=1670517169&sr=1-6',
    price: '$12.97',
    audiobook: 'true'
  },
  {
    title: 'Complete Spanish Workbook',
    author: 'Exlore ToWin',
    // link: 'https://www.amazon.com/gp/product/B095GSMHCY?ref_=dbs_m_mng_rwt_calw_tpbk_1&storeType=ebooks&qid=1670517169&sr=1-6',
    price: '$12.97',
    audiobook: 'false'
  },
  {
    title: 'Spanish Short Stories for Beginners',
    author: 'Fluency Faster',
    // link: '',
    price: '14.95',
    audiobook: 'false'
  },
  {
    title: 'Learn Spanish for Beginners',
    author: 'Djamila Santana',
    // link: '',
    price: '$12.75',
    audiobook: 'false'
  },
  {
    title: 'Spanish Workbook for Adults',
    author: 'Spanish AllDay Publishing',
    // link: '',
    price: '$6.99',
    audiobook: 'false'
  },
];

const seedBeginner = () => Beginner.bulkCreate(beginnerdata);

module.exports = seedBeginner;
