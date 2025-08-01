
npm i:
express
dotenv
mongoose
cookie-parser
validator
bcrypt
jsonwebtoken
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
redis
axios



- in .env you can use "" or not , as your wish

-     const IsAllowed = mandatoryField.every((k)=> Object.keys(data).includes(k)); 
here, Object.keys(data) will form array of keys of data


### HTTP Status Code
- 200 ok: request succeeded (i.e. GET or POST completed)
- 201 created: successful post request
- 400 bad request
- 401 unauthrized access


### Frontend:
- dazyai , sersian for ui


### Mongoose Commands
- create
- exist
- findOne


### JS Command:
- array.join(','); // return a string with comma seperated elements


### why we use Axios if we have Fetch ??
- it automatically transforms JSON data, so you don't hv to do response.json() like with Fetch
- error handling: with Fetch you hv to check if the response is ok and throw an error yourself. Axios does this automatically


Tasks To Be resolved:
1) register krne ke baad, login page pe jana chaiye ki bhai abb dobara login krr