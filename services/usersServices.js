const { faker } = require('@faker-js/faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
      });
    }
  }
  create(data) {
    const newUser = { userId: faker.datatype.uuid(), ...data };

    this.users.push(newUser);
    return newUser;
  }

  find() {
    return this.users;
  }
  finOne(id) {
    return this.users.find((item) => item.userId === id);
  }

  update(id, data) {

    const index = this.users.findIndex(item => item.userId === id)
    if(index === -1){
      throw new Error('USER NOT FOUND 😫😫 ')
    }
    const user = this.users[index]
    //de esta forma asigno todo los datos y agrego solo lo que modifica
    const newUser = this.users[index]= {...user,...data}
    return newUser
  }
  delete(id){
    console.log(id);
    const index = this.users.findIndex(item => item.userId === id)
    if(index === -1){
      throw new Error('USER NOT FOUND 😫😫 ')
    }
    this.users.splice(index,1)
    return {id}
  }
}
module.exports = UsersService;
