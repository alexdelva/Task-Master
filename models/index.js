const User = require('./User');
const Post = require('./Post');


User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany( {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

belongsTo(Post, {
  foreignKey: 'post_id'
})

User.hasMany( {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { User, Post };
