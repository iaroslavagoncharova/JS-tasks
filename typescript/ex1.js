// TODO: Define the interface User with username, email, and optional bio
// TODO: Create a user object using the defined interface. Add all properties
var user1 = {
    username: 'Seppo',
    email: 'a@b.fi',
    bio: 'Hei, olen Sepi',
};
// TODO: Create another user object using the defined interface. Don't add bio
var user2 = {
    username: 'Alvari',
    email: 'foo@bar.fi',
};
// Function to display user information
function displayUserInfo(user) {
    console.log(user.username);
    console.log(user.email);
    if (user.bio) {
        console.log(user.bio);
    }
    // TODO: console log all properties of a user separately. Example: console.log(user.email)
}
// Display user information
displayUserInfo(user1);
displayUserInfo(user2);
