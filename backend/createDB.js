const mongoose = require('mongoose');
const User = require('./models/user');
const Vote = require('./models/vote');
const logger = require('./config/winston');
const config = require('./config/config');

const db = mongoose.connect(config.mongoose.url, config.mongoose.settings);
mongoose.set('useFindAndModify', false);

mongoose.connection.on('open', () => {
  mongoose.connection.dropDatabase();
});

function createUsers(cb) {
  const admin = new User();
  admin.hashPassword('admin', (err, hash) => {
    User.create({
      username: 'Admin',
      description: 'I am admin',
      status: 'active',
      isAdmin: true,
      permissions: 1,
      email: 'admin@admin.admin',
      passwordHashed: hash,
      statistic: [],
    });
  });

  const user1 = new User();
  user1.hashPassword('kate',  (err, hash) =>{
    User.create({
      username: 'Kate',
      email: 'kate@kate.kate',
      description: 'blocked user',
      status: 'blocked',
      isAdmin: false,
      permissions: 3,
      passwordHashed: hash,
      statistic: [],
    });
  });

  const user2 = new User();
  user2.hashPassword('evo1',  (err, hash) =>{
    User.create({
      username: 'Evo',
      description: 'Evo is pending',
      status: 'pending',
      isAdmin: false,
      permissions: 3,
      email: 'evo@evo.evo',
      passwordHashed: hash,
      statistic: [{'Favorite animal': 'hippo'}, {'Favorite number': '50'}],
    });
  });

  const user3 = new User();
  user3.hashPassword('diana',  (err, hash) =>{
    User.create({
      username: 'Diana',
      description: 'Diana is pending',
      status: 'pending',
      isAdmin: false,
      permissions: 3,
      email: 'diana@diana.diana',
      passwordHashed: hash,
      statistic: [],
    });
  });

  const user4 = new User();
  user4.hashPassword('vova',  (err, hash) =>{
    User.create({
      username: 'Vova',
      description: 'Vova is active',
      status: 'active',
      isAdmin: false,
      permissions: 2,
      email: 'vova@vova.vova',
      passwordHashed: hash,
      statistic: [],
    });
  });

  const user5 = new User();
  user5.hashPassword('anna',  (err, hash) =>{
    User.create({
      username: 'Anna',
      description: 'Anna is pending',
      status: 'pending',
      isAdmin: false,
      permissions: 3,
      email: 'anna@anna.anna',
      passwordHashed: hash,
      statistic: [],
    });
  });

  const user6 = new User();
  user6.hashPassword('sasha',  (err, hash) =>{
    User.create({
      username: 'Sasha',
      description: 'Sasha is pending',
      status: 'pending',
      isAdmin: false,
      permissions: 3,
      email: 'sasha@sasha.sasha',
      passwordHashed: hash,
      statistic: [],
    });
  });

  cb();
}

createUsers(() => {logger.info('initial users created')});

function createVotes(cb) {
  Vote.create({
    name: 'Favorite animal',
    description: 'pick you fav animal',
    state: 'active',
    options: ['dog', 'hippo', 'ant', 'parrot'],
    start: new Date('December 17, 2018').toLocaleDateString(),
    end: new Date('December 17, 2019').toLocaleDateString(),
    results: {'dog': 1, 'hippo': 1, 'ant': 0, 'parrot': 0 },
    participants: ['Admin', 'Vova'],
  });
  Vote.create({
    name: 'Favorite season',
    description: 'pick you fav season',
    state: 'waiting',
    options: ['Spring', 'Summer', 'Fall', 'Winter'],
    start: new Date('December 17, 2019').toLocaleDateString(),
    end: new Date('December 17, 2029').toLocaleDateString(),
    results: {'Spring': 1, 'Summer': 2, 'Fall': 3, 'winter': 4},
    participants: ['Admin', 'Vova'],
  });
  Vote.create({
    name: 'Favorite color',
    description: 'pick you fav color',
    state: 'draft',
    options: ['red', 'blue', 'green'],
    start: new Date('December 17, 2019').toLocaleDateString(),
    end: new Date('December 17, 2059').toLocaleDateString(),
    results: {'red': 1, 'blue': 2, 'green': 3},
    participants: [],
  });
  Vote.create({
    name: 'Favorite number',
    description: 'pick you fav number',
    state: 'closed',
    options: [10, 30, 50],
    start: new Date('December 17, 2018').toLocaleDateString(),
    end: new Date('June 17, 2019').toLocaleDateString(),
    results: {'10': 1, '30': 2, '50': 3},
    participants: ['Admin', 'Vova'],
  });
  Vote.create({
    name: 'Favorite movie',
    description: 'pick up your fav movie',
    state: 'archived',
    options: ['A', 'B', 'C'],
    start: new Date('December 17, 2018').toLocaleDateString(),
    end: new Date('June 17, 2019').toLocaleDateString(),
    results: {'A': 10, 'B': 4, 'C': 3},
    participants: ['Admin', 'Vova'],
  });
  cb();
}

createVotes(() => {logger.info('initial votes created')});
