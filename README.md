1. install & run server: 

    - npm i
    - npm start

2. Test Api: 

- Add Comment:
localhost:5001/comments
Ex:
{
    "content" : "This is content of comment.",
    "postid" : "1",
    "userid" : "1"
}

- Get All Comments of PostId:
Ex: postid = 1
localhost:5001/comments/comments-post/1