let testUrl;

if (process.env.NODE_ENV === 'QA') {
    // testUrl = 'qa_url';
} else if (process.env.NODE_ENV === 'stage') {
    testUrl = 'https://the-internet.herokuapp.com/login';
} else { // prod
    testUrl = 'https://the-internet.herokuapp.com/login';
}

module.exports = {
    baseUrl: testUrl
};