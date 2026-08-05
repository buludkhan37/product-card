import { commentsList } from './comments.js';

// ---------------------------- Level 1:

// 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.filter(number => number >= 5);
console.log(newArray);
console.log(numbers);

// 3
const booksArr = ['Три основы', 'Четыре правила', '40 Хадисов', 'Блеск убеждений', 'Украшение требовающиего знания'];
console.log(booksArr.includes('Блеск убеждений'));

// 4
function reversedArray(arr) {
    return arr.reverse();
}

console.log(reversedArray(booksArr));
console.log(reversedArray(newArray));

// ---------------------------- Level 2:

// 7
const newCommentsList = commentsList.filter(comment => comment.email.endsWith('.com'));
console.log(newCommentsList);

// 8
const updatedCommentsList = commentsList.map(comment => ({ ...comment, postId: comment.id <= 5 ? 2 : 1  }))
console.log(updatedCommentsList);

// 9
const commentsListWithIdAndName = commentsList.map(comment => ({ id: comment.id, name: comment.name }));
console.log(commentsListWithIdAndName);

// 10
const validatedComments = commentsList.map(comment => ({ ...comment, isInvalid: comment.body.length > 180 }));
console.log(validatedComments);

// ---------------------------- Level 3:

// 11
const commentsListByReduceMethod = commentsList.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);

console.log(commentsListByReduceMethod);

const commentsListByMapMethod = commentsList.map(comment => comment.email);
console.log(commentsListByMapMethod);

// 12
console.log(commentsListByReduceMethod.join(', '));
console.log(commentsListByReduceMethod.toString());