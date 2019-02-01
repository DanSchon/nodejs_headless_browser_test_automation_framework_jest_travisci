module.exports = () => {
    let invalidUsername = Math.random().toString(36).substring(10);
    let invalidPassword = Math.random().toString(36).substring(8);
    return { invalidUsername, invalidPassword }; 
};