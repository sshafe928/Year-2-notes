book = {
    title: 'coding',
    pages: 123,
    cover: 'hard-cover'
}


//spread operator
bookV2 = {
    ...book,
    pages: 140,
    author: 'steve'
}

//takes book with title, pages, and cover
//re-writes pages and adds on author