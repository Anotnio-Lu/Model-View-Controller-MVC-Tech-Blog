const User = require('./User');
const Comments = require('./Comments');

// Establishing associations
User.belongsToMany(
    Comments, { 
        through: 'UserComment', 
        foreignKey: 'user_id' 
    });
Comments.belongsToMany(
    User, { 
        through: 'UserComment', 
        foreignKey: 'comment_id' 
    });

module.exports = { 
    User, 
    Comments
};
