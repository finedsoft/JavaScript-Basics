let userRoles = ['admin', 'editor', 'subscriber'];
if (userRoles.includes('admin')) {
    console.log('User has admin privileges');
} else {
    console.log('User does not have admin privileges');
}


let message = "Hello world! badword1";

let prohibitedWords = ['badword1', 'badword2', 'badword3'];

let containsProhibitedWords = prohibitedWords.some(prohibitedWord =>  message.includes(prohibitedWord));

if (containsProhibitedWords) {
    console.log('Message contains prohibited words');
}
else
{
    console.log('Message does not contain prohibited words');
}
