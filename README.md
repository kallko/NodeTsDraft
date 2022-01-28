Installation
=============
you should have installed global git and docker

```
mkdir absence
cd absence
git init
git clone https://github.com/kallko/NodeTsDraft.git
cd NodeTsDraft/
git checkout absence
docker-compose -p absence up
```
after this  (if everything ok) you could check in browser:
http://localhost:5000/
expected response like:
```
{"response":"main route success","time":"2022-01-28T11:55:02.771Z"}
```
By default, You will have in DB 1 user: 

login: admin

password admin

and 3 quizes, created by admin.


TESTING
=============

For testing You could use Postman

step 1: registering
-------
```
POST: http://localhost:5000/register
{"login": "admin2", "password": "123"}
```
expected response:
```
User with login: admin2 created. Id is 2
```

step 2: login
-------
after login You will receive token, which is valid 1 hour after last action.

```
POST: http://localhost:5000/login
{ "login": "admin2", "password": "123"}
```
expected response
```
{ "success": true,
"token": "d3f53900-5ef3-4be8-8967-66ab4bd2916f" }
```
copy pls token and add it in header with key: x-api-key 
after this You could work with another routes

step 3: get statistic
-------
```
GET: http://localhost:5000/user/statistic
```
expected response:
```
{
    "attempts": 0,
    "fullyCompleted": 0,
    "fullyUnCompleted": 0,
    "averageScore": "0.00 %"
}
```

step 4: play quiz
-------
after req You will receive random quiz, created by another user

```
GET: http://localhost:5000/quiz/play
```
expected response:

```
{
    "result": [
        {
            "_id": "61f3e038ca5b1b22f1e5e45f",
            "title": "Star Wars 5",
            "questions": [
                {
                    "text": "Where was rebel's base hidden?",
                    "answers": [
                        {
                            "text": "planet Nabu"
                        },
                        {
                            "text": "planet Jaku"
                        },
                        {
                            "text": "planet Hoth"
                        },
                        {
                            "text": "planet Earth"
                        }
                    ]
                },
                {
                    "text": "Who is Darth Vader?",
                    "answers": [
                        {
                            "text": "Luck's Father"
                        },
                        {
                            "text": "Jedi Knight"
                        },
                        {
                            "text": "Sith Emperor"
                        },
                        {
                            "text": "Luck's San"
                        }
                    ]
                },
                {
                    "text": "Joda is...",
                    "answers": [
                        {
                            "text": "super Master"
                        },
                        {
                            "text": "grand Master"
                        },
                        {
                            "text": "Master - lomaster"
                        }
                    ]
                }
            ],
            "authorId": "1",
            "__v": 0
        }
    ]
}
```
copy _id to have possibility complete this quiz

step 5: answer quiz
-------
be sure, that you use id from previous request
this link is just for example

```
POST: http://localhost:5000/quiz/answer/61f3e038ca5b1b22f1e5e45f

[2,3,4]
```
expected response:

```
{
"score": 0,
"questions": 3
}

```
now You could repeat step 3 and receive something like:

```
{
    "attempts": 1,
    "fullyCompleted": 0,
    "fullyUnCompleted": 1,
    "averageScore": "0.00 %"
}
```

step 6: create quiz
-------
```
POST: http://localhost:5000/quiz/create
{
  "title": "test",
  "questions": [
    {
      "text": "Who killed Jaba?",
      "answers": [
        {
          "text": "Han Solo",
          "correct": "false"
        },
        {
          "text": "Princess Leya",
          "correct": "true"
        },
        {
          "text": "Luck Skywalker",
          "correct": "false"
        }
      ]
    },
    {
      "text": "When this film was released",
      "answers": [
        {
          "text": "1979",
          "correct": "false"
        },
        {
          "text": "1985",
          "correct": "true"
        },
        {
          "text": "1983",
          "correct": "true"
        }
      ]
    }
  ]
}
```

step 7: list oun quizes
-------

```
GET: http://localhost:5000/quiz/list
```

```
[
    {
        "_id": "61f3e700cfc87521ffcbb502",
        "title": "test"
    }
]
```

You could copy id to have possibility to delete quiz:

step 8: delete quiz
-------

```
DELETE: http://localhost:5000/quiz/list
```

```
{
    "success": true
}
```
to be clear at statistic for this test task i did not implemented edit of quiz.
You could delete and create new. 

TEST APP
=============
implemented 18 tests for functions with some logic

```
npm i
npm run test
```
