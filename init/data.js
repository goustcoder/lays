const laysProducts = [
  {
    title: "LAY'S® Cheddar & Sour Cream Flavored Potato Chips",
    description: "A perfect blend of cheddar cheese and sour cream flavor, these chips offer a savory and tangy experience with each bite.",
    image: "https://i.imgur.com/cZ3KNgt.png",
    price: 2.99,
    flavour: "Cheddar & Sour Cream",
    recipe: "These chips are made from fresh potatoes, thinly sliced and fried to a perfect crisp. They are then seasoned with a blend of rich cheddar cheese and tangy sour cream, resulting in a deliciously savory snack that is both crunchy and flavorful.",
    ingredient: "Potatoes, vegetable oil, cheddar cheese, sour cream"
  },
  {
    title: "LAY'S® BBQ Flavored Potato Chips",
    description: "Deliciously crispy BBQ flavored chips, offering a smoky and slightly sweet taste that is perfect for any snack time.",
    image: "https://i.imgur.com/835ixzo.png",
    price: 2.99,
    flavour: "BBQ",
    recipe: "Crafted from select potatoes, these chips are sliced and fried until golden. They are then generously coated with a special BBQ seasoning, which includes a mix of smoky spices, brown sugar, and a hint of paprika, creating a perfect balance of sweet and savory.",
    ingredient: "Potatoes, vegetable oil, BBQ seasoning"
  },
  {
    title: "LAY'S® Sweet & Spicy Honey Potato Chips",
    description: "A sweet and spicy taste with a touch of honey, these chips offer a unique flavor profile that will keep you coming back for more.",
    image: "https://i.imgur.com/aVbkQOO.png",
    price: 2.99,
    flavour: "Sweet & Spicy Honey",
    recipe: "Starting with quality potatoes, these chips are fried to a crispy perfection. They are then flavored with a blend of honey and spices, including chili powder and cayenne pepper, giving a delightful mix of sweetness and heat that tantalizes the taste buds.",
    ingredient: "Potatoes, vegetable oil, honey, spices"
  },
  {
    title: "LAY'S® Salt & Vinegar Flavored Potato Chips",
    description: "Tangy salt and vinegar flavor, these chips provide a sharp and refreshing taste that is both bold and satisfying.",
    image: "https://i.imgur.com/1Z32j1F.png",
    price: 2.99,
    flavour: "Salt & Vinegar",
    recipe: "These chips are made from carefully selected potatoes, fried to achieve the perfect crunch. They are then seasoned with a tangy vinegar powder and a touch of sea salt, creating a sharp and savory flavor that is both zesty and invigorating.",
    ingredient: "Potatoes, vegetable oil, vinegar seasoning"
  },
  {
    title: "LAY'S® Sour Cream & Onion Flavored Potato Chips",
    description: "A classic sour cream and onion flavor, offering a rich and creamy taste with a hint of onion.",
    image: "https://i.imgur.com/90XEg1G.png",
    price: 2.99,
    flavour: "Sour Cream & Onion",
    recipe: "These chips start with premium potatoes, sliced and fried to a light crisp. They are then seasoned with a blend of sour cream and onion powder, providing a smooth and savory flavor that is both creamy and slightly tangy, perfect for any occasion.",
    ingredient: "Potatoes, vegetable oil, sour cream, onion powder"
  },
  {
    title: "PRINGLES® ORIGINAL CRISPS",
    description: "Classic Pringles original flavor, known for their consistent crunch and iconic shape.",
    image: "https://i.imgur.com/5pGDYn5.png",
    price: 2.49,
    flavour: "Original",
    recipe: "Pringles are made from a specially formulated dough of dehydrated potatoes, wheat starch, and rice flour. This dough is pressed into thin slices and fried until perfectly crispy. Each chip is then lightly salted to enhance the natural potato flavor, resulting in a simple yet satisfying snack.",
    ingredient: "Potatoes, vegetable oil, salt"
  },
  {
    title: "PRINGLES® BBQ CRISPS",
    description: "Smoky BBQ flavored Pringles, offering a rich and savory taste with every bite.",
    image: "https://i.imgur.com/5En4H12.png",
    price: 2.49,
    flavour: "BBQ",
    recipe: "These Pringles are crafted from a blend of dehydrated potatoes, pressed into thin, uniform slices, and fried to a perfect crisp. They are then seasoned with a smoky BBQ flavor, featuring a mix of spices, brown sugar, and a touch of tangy tomato, creating a rich and flavorful snack.",
    ingredient: "Potatoes, vegetable oil, BBQ seasoning"
  },
  {
    title: "PRINGLES® SOUR CREAM & ONION CRISPS",
    description: "Rich sour cream and onion flavor, these crisps are a creamy and savory delight.",
    image: "https://i.imgur.com/E8vSo3u.png",
    price: 2.49,
    flavour: "Sour Cream & Onion",
    recipe: "Made from a unique blend of dehydrated potatoes, these crisps are sliced and fried to achieve the perfect texture. They are then seasoned with a blend of sour cream and onion powder, offering a creamy and tangy flavor that is both rich and satisfying.",
    ingredient: "Potatoes, vegetable oil, sour cream, onion powder"
  },
  {
    title: "PRINGLES® CHEDDAR & SOUR CREAM CRISPS",
    description: "Cheddar cheese combined with sour cream, providing a rich and tangy flavor experience.",
    image: "https://i.imgur.com/pWbWFHe.png",
    price: 2.49,
    flavour: "Cheddar & Sour Cream",
    recipe: "These Pringles are made from a mixture of dehydrated potatoes, fried to a consistent crisp. They are then flavored with a blend of sharp cheddar cheese and creamy sour cream, creating a snack that is both rich and tangy with every bite.",
    ingredient: "Potatoes, vegetable oil, cheddar cheese, sour cream"
  },
  {
    title: "PRINGLES® PIZZA CRISPS",
    description: "Savory pizza-flavored crisps, capturing the essence of a classic pizza in every bite.",
    image: "https://i.imgur.com/SfOVoE1.png",
    price: 2.49,
    flavour: "Pizza",
    recipe: "These crisps start with a blend of dehydrated potatoes, pressed into thin slices and fried to perfection. They are then seasoned with a unique pizza flavor, including hints of tomato, cheese, and a mix of Italian herbs, creating a savory and satisfying snack reminiscent of a fresh pizza.",
    ingredient: "Potatoes, vegetable oil, pizza seasoning"
  },
  {
    title: "PRINGLES® CHEDDAR CHEESE CRISPS",
    description: "Cheddar cheese flavored Pringles, offering a bold and cheesy taste.",
    image: "https://i.imgur.com/2QYjUAJ.png",
    price: 2.49,
    flavour: "Cheddar Cheese",
    recipe: "These Pringles are crafted from a special blend of dehydrated potatoes, fried to a golden crisp. They are then seasoned with a robust cheddar cheese flavor, providing a bold and satisfying cheesy taste that is perfect for any cheese lover.",
    ingredient: "Potatoes, vegetable oil, cheddar cheese"
  },
  {
    title: "LAY'S® Wavy Original Potato Chips",
    description: "Crispy wavy original chips, known for their thick cut and extra crunch.",
    image: "https://i.imgur.com/saXdj27.png",
    price: 3.49,
    flavour: "Original",
    recipe: "These wavy chips are made from high-quality potatoes, sliced into thick, wavy cuts and fried to achieve an extra crunchy texture. Lightly salted, these chips highlight the natural potato flavor, making them a classic and satisfying snack for any occasion.",
    ingredient: "Potatoes, vegetable oil, salt"
  },
  {
    title: "LAY'S® Wavy Hickory BBQ Flavored Potato Chips",
    description: "Rich and smoky Hickory BBQ flavored chips, offering a deep and savory taste.",
    image: "https://i.imgur.com/9Lpibh1.png",
    price: 3.49,
    flavour: "Hickory BBQ",
    recipe: "Made from select potatoes, these wavy chips are fried to a crispy perfection. They are then seasoned with a robust Hickory BBQ flavor, featuring a blend of smoky spices, a touch of sweetness, and a hint of hickory smoke, creating a deep and savory taste.",
    ingredient: "Potatoes, vegetable oil, Hickory BBQ seasoning"
  },
  {
    title: "LAY'S® Wavy Ranch Flavored Potato Chips",
    description: "Crispy chips with a bold ranch flavor, offering a zesty and creamy taste.",
    image: "https://i.imgur.com/ac6is8r.png",
    price: 3.49,
    flavour: "Ranch",
    recipe: "These wavy chips are made from premium potatoes, fried to a golden crisp. They are then coated with a zesty ranch seasoning, including a mix of buttermilk, garlic, and herbs, providing a creamy and tangy flavor that is both bold and refreshing.",
    ingredient: "Potatoes, vegetable oil, ranch seasoning"
  },
  {
    title: "LAY'S® Wavy Lightly Salted Potato Chips",
    description: "Lightly salted wavy chips, offering a subtle and less intense flavor while retaining the satisfying crunch.",
    image: "https://i.imgur.com/3oV0LQ6.png",
    price: 3.49,
    flavour: "Lightly Salted",
    recipe: "These chips are made from select potatoes, sliced into thick, wavy cuts and fried to a golden crisp. They are then lightly salted to enhance the natural potato flavor without overpowering it, making them a perfect choice for a subtle yet satisfying snack.",
    ingredient: "Potatoes, vegetable oil, salt"
  },
  {
    title: "LAY'S® Wavy Salt & Pepper Flavored Potato Chips",
    description: "Wavy chips with a bold salt and pepper flavor, providing a classic and savory taste.",
    image: "https://i.imgur.com/c5sM7vY.png",
    price: 3.49,
    flavour: "Salt & Pepper",
    recipe: "Made from high-quality potatoes, these wavy chips are fried to a perfect crisp and then seasoned with a blend of sea salt and freshly ground black pepper. This combination creates a classic and savory flavor profile that is both bold and satisfying.",
    ingredient: "Potatoes, vegetable oil, salt, black pepper"
  },
  {
    title: "DORITOS® Nacho Cheese Flavored Tortilla Chips",
    description: "Classic nacho cheese flavored Doritos, known for their bold and cheesy taste.",
    image: "https://i.imgur.com/E6o73gK.png",
    price: 3.99,
    flavour: "Nacho Cheese",
    recipe: "These tortilla chips are made from ground corn, pressed into triangle shapes, and fried until crispy. They are then coated with a signature nacho cheese seasoning, which includes a blend of cheddar cheese, spices, and a hint of chili, creating a bold and cheesy flavor that is iconic to Doritos.",
    ingredient: "Corn, vegetable oil, cheddar cheese, spices"
  },
  {
    title: "DORITOS® SWEET & TANGY BBQ",
    description: "Sweet and tangy BBQ flavored Doritos, offering a unique mix of flavors in each bite.",
    image: "https://i.imgur.com/vEPYfrB.png",
    price: 3.99,
    flavour: "Sweet & Tangy BBQ",
    recipe: "These tortilla chips are crafted from finely ground corn, shaped into triangles, and fried to a crispy texture. They are then seasoned with a unique blend of sweet and tangy BBQ spices, including brown sugar, paprika, and a touch of vinegar, providing a flavorful and delightful snack experience.",
    ingredient: "Corn, vegetable oil, BBQ seasoning"
  },
  {
    title: "DORITOS® COOL RANCH® Flavored Tortilla Chips",
    description: "Cool Ranch flavored Doritos, known for their creamy and tangy taste.",
    image: "https://i.imgur.com/7R38mXV.png",
    price: 3.99,
    flavour: "Cool Ranch",
    recipe: "Made from ground corn, these tortilla chips are pressed into triangles and fried to a perfect crisp. They are then coated with a Cool Ranch seasoning, featuring a blend of buttermilk, garlic, onion, and a hint of herbs, creating a cool and tangy flavor that is both refreshing and satisfying.",
    ingredient: "Corn, vegetable oil, buttermilk, garlic, onion, herbs"
  },
  {
    title: "DORITOS® Salsa Verde Flavored Tortilla Chips",
    description: "Salsa Verde flavored Doritos, offering a vibrant and zesty taste with a hint of heat.",
    image: "https://i.imgur.com/805w3d4.png",
    price: 3.99,
    flavour: "Salsa Verde",
    recipe: "These tortilla chips are made from finely ground corn, shaped into triangles, and fried until crispy. They are then seasoned with a Salsa Verde flavor, which includes a blend of green chili peppers, tomatillo, and cilantro, creating a vibrant and zesty taste with a hint of heat.",
    ingredient: "Corn, vegetable oil, green chili peppers, tomatillo, cilantro"
  },
  {
    title: "DORITOS® Spicy Sweet Chili Flavored Tortilla Chips",
    description: "Spicy Sweet Chili flavored Doritos, combining sweet and spicy flavors for a unique taste.",
    image: "https://i.imgur.com/6hx0XP5.png",
    price: 3.99,
    flavour: "Spicy Sweet Chili",
    recipe: "Made from ground corn, these tortilla chips are pressed into triangle shapes and fried to a crispy texture. They are then coated with a Spicy Sweet Chili seasoning, featuring a blend of chili peppers, sugar, and a touch of soy sauce, creating a harmonious mix of sweet and spicy flavors.",
    ingredient: "Corn, vegetable oil, chili peppers, sugar, soy sauce"
  },
];


  
  module.exports = { data: laysProducts };