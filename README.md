# REACHINBOX-ASSIGNMENT-ASSOCIATE-FRONTEND-ENGINEER
ReachInbox assignment for the Associate frontend engineer 


The assignment is to use the designs and APIs provided and create a functional web app as per the following
instructions -
1. Implement the login page - Use the design provided
2. Once logged in the user should be taken to the onebox screen. /google-login
3. Implement fetching of data in onebox using api integration
/onebox/list
GET /onebox/:thread_id
DELETE /onebox/:thread_id
4. Implement keyboard shortcuts in onebox - “D” should delete. “R” should open Reply box
5. Implement custom text editor (Need to Add Custom button in editor like “SAVE” and “Variables”)
6. Implement Reply - Clicking on send should send Reply
POST /reply/:thread_id
{from: “email”, to:”email”, “subject”: “”, “body”: “<html></html>”}
7. Implement both - light and dark mode
   
Design File -
https://www.figma.com/file/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?type=design&node-id=0-1&mode=design

API File -
https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27
