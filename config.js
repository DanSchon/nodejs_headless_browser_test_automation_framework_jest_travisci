let testUrl;

if (process.env.TestEnv === 'DEV') {
    // testUrl = 'dev_url';
} else if (process.env.TestEnv === 'QA') {
    // testUrl = 'qa_url';
} else {
    testUrl = 'https://the-internet.herokuapp.com/login';
}

module.exports = {
    baseUrl: testUrl
};