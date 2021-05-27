const express = require("express");
const cors = require("cors");
const port = 8000;
const app = new express();


// make sure these lines are above any app.get or app.post code blocks
app.use( cors());
app.use( express.json() );



var faker = require('faker');
const {address} = require("faker");


class User {
  constructor(){
    this._id =faker.random.uuid()
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName()
    this.phone = faker.phone.phoneNumber()
    this.email = faker.internet.email()
    this.password = faker.internet.password()
  }
}


class Company{
  constructor(){
    this._id = faker.random.uuid()
    this.name = faker.company.companyName()
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipcode: faker.address.zipCodeByState(),
      country: faker.address.country()
    }
  }
}



let user1 = new User()
console.log(user1)

let company1 = new Company()
console.log(company1)



app.get("/api/hello", (req, res) => {
  res.json( {"message": "ok"});
});

app.get("/api/users/new", (req, res) => {
  let user1 = new User()
  console.log(user1)
  res.json({"result": user1});
});

app.get("/api/companies/new", (req, res) => {
  let company1 = new Company()
  console.log(company1)
  res.json({"result": company1});
});


app.get("/api/user/company", (req, res) => {
  let user1 = new User()
  let company1 = new Company()
  console.log(user1, company1)
  res.json({"user": user1, "company": company1});
});


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

