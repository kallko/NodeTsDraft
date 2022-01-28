Installation
=============
you should have installed global git and docker

```
mkdir absence
cd absence
git init
git clone https://github.com/kallko/NodeTsDraft.git
cd NodeTsDraft/
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
POST http://localhost:5000/register
{"login": "admin2", "password": "123"}
```
