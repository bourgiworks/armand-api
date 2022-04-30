// sign up test

const chai = require ('chai');
const chaiHttp= require('chai-http')
const app =require( '../app');

chai.should()
chai.use(chaiHttp)
describe('User APIs',()=>{
    describe('Create user',()=>{
        it('It should create user',(done)=>{
            chai
                .request(app)
                .post('/api/signUp')
                .send({
                    userName: "Kamali",
                    email: "kamali@gmail.com",
                    password: "12345",
                    role: 1
            })
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('object')
                    done()
                })
        }),
        it('It should return an error if you create an email existed',(done)=>{
            chai
                .request(app)
                .post('/api/signUp')
                .send({
                    userName: "Kamali",
                    email: "m1@gmail.com",
                    password: "12345",
                    role: 1
            })
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('object')
                    done()
                })
        })
      })
    })
            //login


chai.should();
chai.use(chaiHttp);

describe('Login API', () => {
  // Testing login end-point
  describe('/api/login', () => {
    it('A registered user should be able to login/default language', (done) => {
      const user = {
        email: 'jane@gmail.com',
        password: '123456',
      };
      chai
        .request(app)
        .post('/api/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.be.equal(
            'You have successfully logged in as an Admin'
          );
          
        });
        done();
    });
    
    
    it('A non-registered user shouldnot be able to login', (done) => {
      const user = {
        email: 'nijohn@gmail.com',
        password: 'holdon',
      };
      chai
        .request(app)
        .post('/api/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.error.should.be.equal(
            'The email is not registered! Please first register'
          );
          
        });
        done();
    });
    
    
    it('A registered user with wrong password logins shouldnot be able to login', (done) => {
      const user = {
        email: 'jane@gmail.com',
        password: 'holdon',
      };
      chai
        .request(app)
        .post('/api/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.error.should.be.equal(
            'The email or passwords entered is wrong'
          );
          
        });
        done();
    });
    
  });
});

// Articles test

chai.should();
chai.use(chaiHttp);

describe('Article API', () => {
  // Testing login end-point
  describe('/api/PostArticle', () => {
    it('A registered user should be able to upload an article', (done) => {
      const arti = {
        topic: 'java programming',
        content: 'you can build your app here',
        image: 'uploads/image/79f77455d295fd3d84ab13b7ce8f3083'
      };
      chai
        .request(app)
        .post('/api/PostArticle')
        .set('Accept', 'application/json')
        .set('auth-token', `jwt = ${token}`)
        .send(arti)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.be.equal(
            'Article posted'
          );
          
        });
        done();
    });
    
    
    it('Every user have to view all posted article', (done) => {
      const arti = {
        topic: 'java programming',
        content: 'you can build your app here',
        image: 'uploads/image/79f77455d295fd3d84ab13b7ce8f3083'
      };
      chai
        .request(arti)
        .get('/api/getAllArticles')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.error.should.be.equal(
            'list of all article'
          );
          
        });
        done();
    });
    
    
    it('each user should get single article', (done) => {
      const arti = {
        topic: 'java programming',
        content: 'you can build your app here',
        image: 'uploads/image/79f77455d295fd3d84ab13b7ce8f3083'
      };
      chai
        .request(app)
        .get('/api/GetOneArticle')
        .send(arti)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.error.should.be.equal(
            'Succesful'
          );
          done();
        });
        
    });
    
  });
});

// comment test

chai.should();
chai.use(chaiHttp);

describe('Comment API', () => {
  // Testing login end-point
  describe('/api/PostComment', () => {
    it('A registered user should be able to post a comment', (done) => {
      const com = {
        name: 'mukire richard',
        comment: 'you can build your app here',
        like: 0
      };
      chai
        .request(app)
        .post('/api/PostComment')
        .set('Accept', 'application/json')
        .set('auth-token', `jwt = ${token}`)
        .send(com)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.be.equal(
            'Comment posted'
          );
          
        });
        done();
    });
    
    
    it('Every user have to view all posted comment', (done) => {
      const com = {
        name: 'mukire richard',
        comment: 'you can build your app here',
        like: 0
      };
      chai
        .request(com)
        .get('/api/getAllComment')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.error.should.be.equal(
            'list of all comment'
          );
          
        });
        done();
    });
    
    
    it('each user should get single comment', (done) => {
      const com = {
        name: 'mukire richard',
        comment: 'you can build your app here',
        like: 0
      };
      chai
        .request(app)
        .get('/api/GetOneComment')
        .send(com)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.error.should.be.equal(
            'Succesful'
          );
          
        });
        done();
    });
    
  });
});


