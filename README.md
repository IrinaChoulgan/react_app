It is a small application in React + Typescript. The application writted only through function components and hooks.
The features in application :

1. A table that cancontain an arbitrary number of rows(from 5 to 15).

2. The data in the table loaded from the server.

3. Statemanager(I did not use the state manager for implementation, because the presentation is not big and you can use Localstorage for storage.).

4. In the form of creating a new record are 5 inputs.
   i. Keep in mind that there can be any number of rows.
   ii. Inputs must contain validation (at least mandatory or complex like a valid email address)
   iii. Must have appropriate checks before submitting (disable buttons orothers)
   iv. The server may not accept the form and return errors (
   Implementation Description:
   A model is created on the backend that contains a description of the form data that needs to be received (type, length, whether it is required). If the data that came from the frontend does not pass this validation, the backend returns an error.)
5. The form must be submitted via the API.The entry is made in th etable
6. Added animation for form.
7. I used ANTD librery for UI, For the API, i used https://github.com/typicode/json-server.
