# cookies vs session

The main difference between a session and a cookie is that session data is stored on the 
server,whereas cookies store data in the visitor's browser. Sessions are more secure than 
cookies as it is stored in server. ... But the data in the session is lost when the web 
browser is closed.

# many ways to implemets session and cookeies using express
1. the simplest way but unsecure is client side cookies-session
http://expressjs.com/en/resources/middleware/cookie-session.html

2. server side express-session 
https://github.com/ABDULAZIZ94/session

3. there also package that help store session direcly to database
