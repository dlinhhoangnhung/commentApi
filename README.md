- install & run server: 

npm i
npm start

- Test Api: 

1. Add Comment:
localhost:5001/comments
Ex:
{
    "content" : "This is content of comment.",
    "postid" : "1",
    "userid" : "1"
}

2. Get All Comments of PostId:
Ex: postid = 1
localhost:5001/comments/comments-post/1