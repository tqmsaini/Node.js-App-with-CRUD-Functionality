const chai = require('chai');
const chaiHttp = require('chai-http');
const app = 'http://localhost:3000';

chai.use(chaiHttp);
const expect = chai.expect;

describe('CRUD Operations', () => {
  // Test POST (Create User)
  it('should create a new user', (done) => {
    chai.request(app)
      .post('/users')
      .send({ id: 1, name: 'John Doe', email: 'john@example.com' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.text).to.equal('User created successfully');
        done();
      });
  });

  // Test GET (Read Users)
  it('should get all users', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
      });
  });

  // Test PUT (Update User)
  it('should update an existing user', (done) => {
    chai.request(app)
      .put('/users/1')
      .send({ name: 'Jane Doe', email: 'jane@example.com' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('User updated successfully');
        done();
      });
  });

  // Test DELETE (Delete User)
  it('should delete a user', (done) => {
    chai.request(app)
      .delete('/users/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('User deleted successfully');
        done();
      });
  });
});
