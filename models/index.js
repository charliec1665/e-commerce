// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id'
})

// Products belongToMany Tags (through ProductTag)
  // the 'as' section stipulates what the name of the vote model should be displayed as when queried on
  Product.belongsToMany(Tag, {
    through: { model: ProductTag, unique: false },
    foreignKey: 'product_id'
  })
  
// Tags belongToMany Products (through ProductTag)
  // the 'as' section stipulates what the name of the vote model should be displayed as when queried on
Tag.belongsToMany(Product, {
  through: { model: ProductTag, unique: false },
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
