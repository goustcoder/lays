const laysProducts = [
  {
    title: "LAY'S® Cheddar & Sour Cream Flavored Potato Chips",
    description: "Classic potato chips infused with a rich cheddar and sour cream flavor, offering a savory and creamy taste experience.",
    image: "https://i.imgur.com/cZ3KNgt.png",
    price: 3.49,
    flavour: "Cheddar & Sour Cream",
    recipe: "These chips are made from premium potatoes, sliced thin and fried to a crispy perfection. They are then coated with a blend of sharp cheddar cheese and tangy sour cream seasoning, providing a rich and creamy flavor that is both savory and satisfying. The careful balance of cheddar and sour cream creates a harmonious taste that lingers on the palate.",
    ingredients: "Potatoes, vegetable oil, cheddar cheese, sour cream, salt, whey, onion powder, yeast extract"
  },
  {
    title: "LAY'S® BBQ Flavored Potato Chips",
    description: "Bold and tangy BBQ flavored chips, perfect for those who enjoy a smoky and sweet taste.",
    image: "https://i.imgur.com/835ixzo.png",
    price: 3.49,
    flavour: "BBQ",
    recipe: "Made from high-quality potatoes, these chips are thinly sliced and fried until golden and crispy. They are then seasoned with a BBQ flavor, featuring a blend of tomato, brown sugar, paprika, and a hint of smoke, creating a bold and tangy taste. The smoky flavor is complemented by the sweetness of brown sugar, making each bite a deliciously balanced experience.",
    ingredients: "Potatoes, vegetable oil, tomato powder, brown sugar, paprika, smoke flavor, garlic powder, onion powder"
  },
  {
    title: "LAY’S® Sweet & Spicy Honey Potato Chips",
    description: "Sweet and spicy honey flavored chips, offering a unique and delightful taste.",
    image: "https://i.imgur.com/aVbkQOO.png",
    price: 3.49,
    flavour: "Sweet & Spicy Honey",
    recipe: "These chips are made from selected potatoes, sliced thin and fried to a crisp. They are then coated with a sweet and spicy honey seasoning, featuring a blend of honey, chili powder, and a touch of garlic, creating a perfect balance of sweetness and heat. The combination of honey and spices delivers a unique flavor that is both sweet and spicy.",
    ingredients: "Potatoes, vegetable oil, honey powder, chili powder, garlic powder, sugar, salt, onion powder"
  },
  {
    title: "LAY'S® Salt & Vinegar Flavored Potato Chips",
    description: "Crispy chips with a classic salt and vinegar flavor, providing a tangy and savory taste.",
    image: "https://i.imgur.com/1Z32j1F.png",
    price: 3.49,
    flavour: "Salt & Vinegar",
    recipe: "Crafted from premium potatoes, these chips are thinly sliced and fried until crispy. They are then seasoned with a blend of sea salt and vinegar, creating a tangy and savory flavor that is both refreshing and satisfying. The sharpness of vinegar is perfectly balanced by the sea salt, making these chips a zesty treat.",
    ingredients: "Potatoes, vegetable oil, sea salt, vinegar, maltodextrin, citric acid"
  },
  {
    title: "LAY'S® Sour Cream & Onion Flavored Potato Chips",
    description: "Classic sour cream and onion flavored chips, known for their creamy and savory taste.",
    image: "https://i.imgur.com/90XEg1G.png",
    price: 3.49,
    flavour: "Sour Cream & Onion",
    recipe: "These chips are made from high-quality potatoes, sliced thin and fried to a golden crisp. They are then seasoned with a blend of sour cream and onion powder, creating a creamy and savory flavor that is both delicious and satisfying. The rich taste of sour cream combined with the sharpness of onion creates a delightful flavor profile.",
    ingredients: "Potatoes, vegetable oil, sour cream powder, onion powder, salt, whey, lactose, parsley"
  },
  {
    title: "PRINGLES® ORIGINAL CRISPS",
    description: "Classic Pringles Original crisps, known for their uniform shape and satisfying crunch.",
    image: "https://i.imgur.com/5pGDYn5.png",
    price: 2.99,
    flavour: "Original",
    recipe: "Made from a blend of dried potatoes, corn flour, and rice flour, these crisps are uniformly shaped and stacked. They are lightly salted to enhance the natural potato flavor, providing a simple yet satisfying snack experience. The unique Pringles shape ensures each crisp delivers the perfect amount of crunch and flavor.",
    ingredients: "Dried potatoes, corn flour, rice flour, salt, vegetable oil"
  },
  {
    title: "PRINGLES® BBQ CRISPS",
    description: "BBQ flavored Pringles crisps, offering a smoky and tangy taste.",
    image: "https://i.imgur.com/5En4H12.png",
    price: 2.99,
    flavour: "BBQ",
    recipe: "These crisps are made from a blend of dried potatoes, corn flour, and rice flour, uniformly shaped and stacked. They are then coated with a BBQ seasoning, featuring a mix of tomato, brown sugar, and smoky spices, creating a bold and tangy flavor. The seasoning is carefully crafted to deliver a barbecue experience in every bite.",
    ingredients: "Dried potatoes, corn flour, rice flour, tomato powder, brown sugar, smoky spices, salt, onion powder"
  },
  {
    title: "PRINGLES® SOUR CREAM & ONION CRISPS",
    description: "Sour cream and onion flavored Pringles crisps, known for their creamy and savory taste.",
    image: "https://i.imgur.com/E8vSo3u.png",
    price: 2.99,
    flavour: "Sour Cream & Onion",
    recipe: "Made from a blend of dried potatoes, corn flour, and rice flour, these crisps are uniformly shaped and stacked. They are then coated with a sour cream and onion seasoning, featuring a blend of sour cream powder and onion powder, creating a creamy and savory flavor. Each crisp delivers a smooth taste with a hint of tanginess from the sour cream.",
    ingredients: "Dried potatoes, corn flour, rice flour, sour cream powder, onion powder, salt, garlic powder"
  },
  {
    title: "PRINGLES® CHEDDAR & SOUR CREAM CRISPS",
    description: "Cheddar and sour cream flavored Pringles crisps, offering a rich and creamy taste.",
    image: "https://i.imgur.com/pWbWFHe.png",
    price: 2.99,
    flavour: "Cheddar & Sour Cream",
    recipe: "These crisps are made from a blend of dried potatoes, corn flour, and rice flour, uniformly shaped and stacked. They are then coated with a cheddar and sour cream seasoning, featuring a blend of cheddar cheese powder and sour cream powder, creating a rich and creamy flavor. The combination of cheddar and sour cream provides a delightful taste that is both savory and smooth.",
    ingredients: "Dried potatoes, corn flour, rice flour, cheddar cheese powder, sour cream powder, salt, yeast extract"
  },
  {
    title: "PRINGLES® PIZZA CRISPS",
    description: "Pizza flavored Pringles crisps, known for their tangy and savory taste.",
    image: "https://i.imgur.com/SfOVoE1.png",
    price: 2.99,
    flavour: "Pizza",
    recipe: "Made from a blend of dried potatoes, corn flour, and rice flour, these crisps are uniformly shaped and stacked. They are then coated with a pizza seasoning, featuring a blend of tomato, cheese, and Italian herbs, creating a tangy and savory flavor. The pizza seasoning captures the essence of classic pizza, making each crisp a delightful snack.",
    ingredients: "Dried potatoes, corn flour, rice flour, tomato powder, cheese powder, Italian herbs, garlic powder"
  },
  {
    title: "PRINGLES® CHEDDAR CHEESE CRISPS",
    description: "Cheddar cheese flavored Pringles crisps, offering a bold and cheesy taste.",
    image: "https://i.imgur.com/2QYjUAJ.png",
    price: 2.99,
    flavour: "Cheddar Cheese",
    recipe: "These crisps are made from a blend of dried potatoes, corn flour, and rice flour, uniformly shaped and stacked. They are then coated with a cheddar cheese seasoning, featuring a blend of cheddar cheese powder and spices, creating a bold and cheesy flavor. The rich taste of cheddar cheese is enhanced by a hint of spice, making these crisps a cheesy delight.",
    ingredients: "Dried potatoes, corn flour, rice flour, cheddar cheese powder, spices, salt, garlic powder"
  },
  {
    title: "LAY'S® Wavy Original Potato Chips",
    description: "Classic wavy potato chips, known for their perfect crunch and classic taste.",
    image: "https://i.imgur.com/saXdj27.png",
    price: 3.49,
    flavour: "Original",
    recipe: "Made from carefully selected potatoes, these chips are sliced thick to create their distinctive wavy texture. The thick slices are fried until golden and crispy, then lightly salted to enhance the natural potato flavor. The wavy shape provides an extra crunch and makes them ideal for dipping.",
    ingredients: "Potatoes, vegetable oil, salt"
  },
  {
    title: "LAY'S® Wavy Hickory BBQ Flavored Potato Chips",
    description: "Wavy chips with a bold hickory BBQ flavor, perfect for those who enjoy a smoky and sweet taste.",
    image: "https://i.imgur.com/9Lpibh1.png",
    price: 3.49,
    flavour: "Hickory BBQ",
    recipe: "Crafted from high-quality potatoes, these chips are thickly sliced and fried to achieve their wavy texture. They are then seasoned with a hickory BBQ flavor, which combines the smokiness of hickory wood with the sweetness of brown sugar and the tanginess of tomato. This blend of flavors creates a rich and bold BBQ taste that is both sweet and smoky.",
    ingredients: "Potatoes, vegetable oil, tomato powder, brown sugar, hickory smoke flavor, salt, onion powder, garlic powder"
  },
  {
    title: "LAY'S® Wavy Ranch Flavored Potato Chips",
    description: "Wavy chips with a cool and creamy ranch flavor, offering a savory and tangy taste.",
    image: "https://i.imgur.com/ac6is8r.png",
    price: 3.49,
    flavour: "Ranch",
    recipe: "These chips are made from premium potatoes, sliced thick and fried to a crisp. They are then coated with a ranch seasoning, featuring a blend of buttermilk, garlic, onion, and herbs. The result is a cool and creamy flavor that is both tangy and savory, making these chips a delightful snack.",
    ingredients: "Potatoes, vegetable oil, buttermilk powder, garlic powder, onion powder, salt, parsley, dill"
  },
  {
    title: "LAY'S® Wavy Lightly Salted Potato Chips",
    description: "Lightly salted wavy chips, perfect for those who prefer a less salty snack.",
    image: "https://i.imgur.com/3oV0LQ6.png",
    price: 3.49,
    flavour: "Lightly Salted",
    recipe: "Made from selected potatoes, these chips are thickly sliced and fried until crispy. They are lightly salted to bring out the natural flavor of the potatoes without overwhelming them. The wavy texture provides an extra crunch and makes these chips ideal for dipping.",
    ingredients: "Potatoes, vegetable oil, sea salt"
  },
  {
    title: "LAY'S® Wavy Salt & Pepper Flavored Potato Chips",
    description: "Wavy chips with a classic salt and pepper flavor, offering a simple yet flavorful taste.",
    image: "https://i.imgur.com/c5sM7vY.png",
    price: 3.49,
    flavour: "Salt & Pepper",
    recipe: "Crafted from high-quality potatoes, these chips are thickly sliced and fried to achieve their wavy texture. They are then seasoned with a blend of sea salt and cracked black pepper, creating a simple yet flavorful taste. The combination of salt and pepper enhances the natural potato flavor while adding a hint of spiciness.",
    ingredients: "Potatoes, vegetable oil, sea salt, black pepper"
  },
  {
    title: "DORITOS® Nacho Cheese Flavored Tortilla Chips",
    description: "Bold and cheesy nacho cheese flavored tortilla chips, perfect for a satisfying snack.",
    image: "https://i.imgur.com/E6o73gK.png",
    price: 3.99,
    flavour: "Nacho Cheese",
    recipe: "Made from high-quality corn, these tortilla chips are fried to achieve a perfect crunch. They are then coated with a nacho cheese seasoning, featuring a blend of cheddar cheese, spices, and tangy flavors. The bold cheese flavor is complemented by a hint of tanginess, making these chips a delicious and satisfying snack.",
    ingredients: "Corn, vegetable oil, cheddar cheese powder, salt, whey, buttermilk powder, onion powder, garlic powder"
  },
  {
    title: "DORITOS® SWEET & TANGY BBQ",
    description: "Sweet and tangy BBQ flavored tortilla chips, offering a unique and delightful taste.",
    image: "https://i.imgur.com/vEPYfrB.png",
    price: 3.99,
    flavour: "Sweet & Tangy BBQ",
    recipe: "These tortilla chips are made from selected corn, fried to a perfect crunch. They are then seasoned with a BBQ flavor that combines the sweetness of brown sugar with the tanginess of vinegar and the smokiness of hickory. The result is a unique flavor that is both sweet and tangy, providing a delightful taste experience.",
    ingredients: "Corn, vegetable oil, brown sugar, tomato powder, vinegar powder, hickory smoke flavor, salt, onion powder, garlic powder"
  },
  {
    title: "DORITOS® COOL RANCH® Flavored Tortilla Chips",
    description: "Cool ranch flavored tortilla chips, known for their creamy and savory taste.",
    image: "https://i.imgur.com/7R38mXV.png",
    price: 3.99,
    flavour: "Cool Ranch",
    recipe: "Made from high-quality corn, these tortilla chips are fried until crispy. They are then coated with a cool ranch seasoning, featuring a blend of buttermilk, garlic, onion, and herbs. The result is a creamy and savory flavor that is both tangy and satisfying, making these chips a popular choice.",
    ingredients: "Corn, vegetable oil, buttermilk powder, garlic powder, onion powder, salt, parsley, dill"
  },
  {
    title: "DORITOS® Salsa Verde Flavored Tortilla Chips",
    description: "Salsa verde flavored tortilla chips, offering a spicy and tangy taste.",
    image: "https://i.imgur.com/805w3d4.png",
    price: 3.99,
    flavour: "Salsa Verde",
    recipe: "These tortilla chips are made from selected corn, fried to a perfect crunch. They are then seasoned with a salsa verde flavor, featuring a blend of tomatillo, jalapeño, and lime. The combination of spicy and tangy flavors creates a bold and zesty taste that is both refreshing and satisfying.",
    ingredients: "Corn, vegetable oil, tomatillo powder, jalapeño powder, lime powder, salt, onion powder, garlic powder"
  },
  {
    title: "DORITOS® Spicy Nacho Flavored Tortilla Chips",
    description: "Spicy nacho flavored tortilla chips, offering a bold and fiery taste.",
    image: "https://i.imgur.com/8UjIlZc.png",
    price: 3.99,
    flavour: "Spicy Nacho",
    recipe: "Crafted from high-quality corn, these tortilla chips are fried to a perfect crunch. They are then coated with a spicy nacho seasoning, featuring a blend of cheddar cheese, jalapeño, and spices. The bold cheese flavor is complemented by the heat of jalapeño, creating a fiery taste that is both intense and satisfying.",
    ingredients: "Corn, vegetable oil, cheddar cheese powder, jalapeño powder, salt, whey, onion powder, garlic powder"
  },
  {
    title: "DORITOS® Spicy Sweet Chili Flavored Tortilla Chips",
    description: "Spicy sweet chili flavored tortilla chips, offering a unique and balanced taste.",
    image: "https://i.imgur.com/1lX1ZfA.png",
    price: 3.99,
    flavour: "Spicy Sweet Chili",
    recipe: "These tortilla chips are made from selected corn, fried to a perfect crunch. They are then seasoned with a spicy sweet chili flavor, featuring a blend of chili peppers, soy sauce, and brown sugar. The combination of spicy and sweet flavors creates a unique taste that is both bold and balanced.",
    ingredients: "Corn, vegetable oil, chili powder, soy sauce powder, brown sugar, salt, onion powder, garlic powder"
  },
  {
    title: "DORITOS® FLAMIN' HOT® Nacho Flavored Tortilla Chips",
    description: "Flamin' Hot nacho flavored tortilla chips, known for their intense heat and bold flavor.",
    image: "https://i.imgur.com/mxts7Ud.png",
    price: 3.99,
    flavour: "Flamin' Hot Nacho",
    recipe: "Made from high-quality corn, these tortilla chips are fried to a perfect crunch. They are then coated with a Flamin' Hot seasoning, featuring a blend of cheddar cheese, chili pepper, and spices. The intense heat of the chili pepper combined with the bold cheese flavor creates a fiery taste that is both bold and satisfying.",
    ingredients: "Corn, vegetable oil, cheddar cheese powder, chili pepper, salt, whey, onion powder, garlic powder"
  },  {
        title: "DORITOS® FLAMIN' HOT® COOL RANCH®",
        description: "Enjoy the bold, fiery kick of Flamin' Hot seasoning combined with the cool, tangy flavor of Ranch in every crunch of DORITOS® FLAMIN' HOT® COOL RANCH® Tortilla Chips.",
        image: "https://i.imgur.com/6qkL9tx.png",
        price: 3.99, // Example price in dollars
        flavour: "Flamin' Hot Cool Ranch",
        recipe: "Create a zesty nacho dip by mixing melted cheddar cheese, diced jalapeños, sour cream, and a touch of lime juice. Serve with these chips for a deliciously spicy and creamy snack.",
        ingredient: "Cheddar cheese, jalapeños, sour cream, lime juice",
    },
    {
        title: "DORITOS® FLAMIN' HOT® Limón Flavored Tortilla Chips",
        description: "Indulge in the intense heat of Flamin' Hot with a refreshing twist of tangy Limón flavor, perfectly balanced for a mouthwatering snack experience.",
        image: "https://i.imgur.com/J8LptBN.png",
        price: 3.99, // Example price in dollars
        flavour: "Flamin' Hot Limón",
        recipe: "Prepare a spicy guacamole by mashing ripe avocados with diced tomatoes, cilantro, lime juice, and a sprinkle of salt. Pair with these chips for a zesty and satisfying snack.",
        ingredient: "Ripe avocados, tomatoes, cilantro, lime juice, salt",
    },
     {
        title: "LAY'S® Kettle Cooked Flamin’ Super Hot",
        description: "Experience intense heat with LAY'S® Kettle Cooked Flamin’ Super Hot potato chips, crafted for those who crave fiery flavors.",
        image: "https://i.imgur.com/iNFhJv9.png",
        price: 2.99,  // Example price
        flavour: "Spicy",
        recipe: "Create a spicy nacho dip by melting cheddar cheese with diced jalapeños, sour cream, and a touch of lime juice. Serve alongside these chips for a bold snack.",
        ingredient: "Cheddar cheese, jalapeños, sour cream, lime juice."
    },
    {
        title: "LAY'S® Kettle Cooked Jalapeño Flavored Potato Chips",
        description: "Enjoy the perfect balance of heat and flavor with LAY'S® Kettle Cooked Jalapeño Flavored Potato Chips, featuring a satisfying crunch and spicy kick.",
        image: "https://i.imgur.com/m8a7FYZ.png",
        price: 2.99,  // Example price
        flavour: "Spicy",
        recipe: "Prepare a creamy jalapeño dip by blending cream cheese with diced jalapeños, garlic powder, and a dash of cumin. Serve chilled with these chips for a creamy-spicy delight.",
        ingredient: "Cream cheese, jalapeños, garlic powder, cumin."
    },
    {
        title: "LAY'S® Kettle Cooked Sea Salt & Cracked Pepper Flavored Potato Chips",
        description: "Indulge in the classic taste of sea salt combined with the boldness of cracked pepper in LAY'S® Kettle Cooked Sea Salt & Cracked Pepper Flavored Potato Chips.",
        image: "https://i.imgur.com/NPIMaTd.png",
        price: 2.99,  // Example price
        flavour: "Salty, Peppery",
        recipe: "Make a simple yet savory dip by mixing Greek yogurt with freshly cracked black pepper and a pinch of sea salt. Pair with these chips for a light and flavorful snack.",
        ingredient: "Greek yogurt, black pepper, sea salt."
    },
    {
        title: "RUFFLES® FLAMIN' HOT CHEDDAR & SOUR CREAM",
        description: "Dive into the bold flavors of RUFFLES® FLAMIN' HOT CHEDDAR & SOUR CREAM potato chips, combining spicy heat with creamy cheddar goodness.",
        image: "https://i.imgur.com/8dTLDGg.png",
        price: 2.99,  // Example price
        flavour: "Spicy, Cheesy",
        recipe: "Create a tangy cheese dip by melting cheddar cheese with sour cream, diced green chilies, and a hint of hot sauce. Serve warm with these chips for a zesty treat.",
        ingredient: "Cheddar cheese, sour cream, green chilies, hot sauce."
    },
    {
        title: "RUFFLES® FLAMIN' HOT BBQ & CHILI",
        description: "Experience a fusion of smoky BBQ and spicy chili flavors with RUFFLES® FLAMIN' HOT BBQ & CHILI potato chips, delivering a fiery crunch.",
        image: "https://i.imgur.com/UeqVFYB.png",
        price: 2.99,  // Example price
        flavour: "Smoky, Spicy",
        recipe: "Make a savory BBQ dip by mixing BBQ sauce with mayonnaise, smoked paprika, and a touch of cayenne pepper. Serve with these chips for a bold BBQ kick.",
        ingredient: "BBQ sauce, mayonnaise, smoked paprika, cayenne pepper."
    },
    {
        title: "RUFFLES® JALAPEÑO RANCH FLAVORED POTATO CHIPS",
        description: "Enjoy the creamy coolness of ranch dressing combined with the bold kick of jalapeño in RUFFLES® JALAPEÑO RANCH FLAVORED POTATO CHIPS.",
        image: "https://i.imgur.com/CeOwCgA.png",
        price: 2.99,  // Example price
        flavour: "Creamy, Spicy",
        recipe: "Whip up a refreshing ranch dip by blending ranch dressing with chopped fresh dill, diced jalapeños, and a squeeze of lemon juice. Pair with these chips for a flavorful snack.",
        ingredient: "Ranch dressing, fresh dill, jalapeños, lemon juice."
    },
    {
        title: "SUNCHIPS® Harvest Cheddar Flavored Whole Grain Snacks",
        description: "Delight in the rich cheddar flavor and wholesome goodness of SUNCHIPS® Harvest Cheddar Flavored Whole Grain Snacks, made with whole grains.",
        image: "https://i.imgur.com/p587zqx.png",
        price: 2.99,  // Example price
        flavour: "Cheddar",
        recipe: "Prepare a creamy cheddar dip by mixing shredded sharp cheddar cheese with Greek yogurt, garlic powder, and a dash of Worcestershire sauce. Serve with these chips for a hearty snack.",
        ingredient: "Sharp cheddar cheese, Greek yogurt, garlic powder, Worcestershire sauce."
    },
    {
        title: "SUNCHIPS® French Onion Flavored Whole Grain Snacks",
        description: "Experience the savory-sweet taste of caramelized onions combined with whole grains in SUNCHIPS® French Onion Flavored Whole Grain Snacks.",
        image: "https://i.imgur.com/XdUrppU.png",
        price: 2.99,  // Example price
        flavour: "French Onion",
        recipe: "Create a French onion dip by caramelizing onions and mixing them with sour cream, mayonnaise, and a sprinkle of onion powder. Serve chilled with these chips for a delightful snack.",
        ingredient: "Caramelized onions, sour cream, mayonnaise, onion powder."
    },
     {
        title: "LAY’S® Gourmet Chips Black Edition",
        description: "Indulge in the sophisticated flavors of LAY’S® Gourmet Chips Black Edition, featuring a blend of premium ingredients and a satisfying crunch.",
        image: "https://i.imgur.com/sxkWtVo.png",
        price: 3.49,  // Example price
        flavour: "Premium",
        recipe: "Pair these gourmet chips with a creamy goat cheese and fig spread for a luxurious snack experience.",
        ingredient: "Goat cheese, figs."
    },
    {
        title: "LAY’S® Gourmet Chips Red and Spicy Edition",
        description: "Enjoy the bold flavors of LAY’S® Gourmet Chips Red and Spicy Edition, crafted with a spicy kick and irresistible crunch.",
        image: "https://i.imgur.com/kySg8cN.png",
        price: 3.49,  // Example price
        flavour: "Spicy",
        recipe: "Create a zesty salsa by combining diced tomatoes, jalapeños, cilantro, and lime juice. Serve with these chips for a fiery snack.",
        ingredient: "Tomatoes, jalapeños, cilantro, lime juice."
    },
    {
        title: "LAY’S® Iconic KFC Crunchy Chicken Edition",
        description: "Experience the iconic flavor of KFC crunchy chicken in chip form with LAY’S® Iconic KFC Crunchy Chicken Edition, delivering savory satisfaction.",
        image: "https://i.imgur.com/GHzdrIa.png",
        price: 3.49,  // Example price
        flavour: "Chicken",
        recipe: "Enjoy these chips with a side of ranch dressing or honey mustard for a classic chicken dinner-inspired snack.",
        ingredient: "Ranch dressing, honey mustard."
    },
    {
        title: "DORITOS® Dipass Italian Cheese Chips",
        description: "Delight in the rich flavors of Italy with DORITOS® Dipass Italian Cheese Chips, featuring a blend of savory cheeses and Italian herbs.",
        image: "https://i.imgur.com/Glch1MK.png",
        price: 3.99,  // Example price
        flavour: "Cheese",
        recipe: "Create an Italian-inspired dip by mixing ricotta cheese with sun-dried tomatoes, basil, and garlic. Serve with these chips for a Mediterranean twist.",
        ingredient: "Ricotta cheese, sun-dried tomatoes, basil, garlic."
    },
    {
        title: "PRINGLES® Minecraft Spicy TNT Crisps",
        description: "Embark on a spicy adventure with PRINGLES® Minecraft Spicy TNT Crisps, featuring explosive flavor and a crispy texture.",
        image: "https://i.imgur.com/YRcxCEH.png",
        price: 2.99,  // Example price
        flavour: "Spicy",
        recipe: "Pair these chips with a creamy avocado dip made with mashed avocados, lime juice, diced jalapeños, and cilantro for a Minecraft-inspired snack.",
        ingredient: "Avocados, lime juice, jalapeños, cilantro."
    },
    {
        title: "PRINGLES® Bourbon BBQ with Extra Spicy Crisps",
        description: "Savor the bold flavors of bourbon BBQ combined with an extra spicy kick in PRINGLES® Bourbon BBQ with Extra Spicy Crisps, perfect for barbecue lovers.",
        image: "https://i.imgur.com/l4cjOyy.png",
        price: 2.99,  // Example price
        flavour: "BBQ, Spicy",
        recipe: "Make a tangy BBQ dip by mixing BBQ sauce with mayonnaise, Worcestershire sauce, and a touch of hot sauce. Serve with these chips for a smoky-spicy treat.",
        ingredient: "BBQ sauce, mayonnaise, Worcestershire sauce, hot sauce."
    },
    {
        title: "LAY'S® Classic Potato Chips 10 Multi-Pack",
        description: "Enjoy the timeless taste of LAY'S® Classic Potato Chips in a convenient 10-pack, perfect for sharing or snacking on the go.",
        image: "https://i.imgur.com/5QHbRKQ.png",
        price: 8.99,  // Example price
        flavour: "Classic",
        recipe: "Pair these classic chips with your favorite sandwich or enjoy them straight out of the pack for a simple and satisfying snack.",
        ingredient: "None specified."
    },
    {
        title: "LAY'S® Mix 10 Potato Chips Multi-Variety Pack",
        description: "Discover a variety of flavors with LAY'S® Mix 10 Potato Chips Multi-Variety Pack, featuring a selection of classic and flavored chips.",
        image: "https://i.imgur.com/pVMMlk0.png",
        price: 9.99,  // Example price
        flavour: "Assorted",
        recipe: "Perfect for parties or gatherings, pair these assorted chips with dips like salsa, guacamole, or cheese for a crowd-pleasing snack.",
        ingredient: "Varies with flavors."
    },
    {
        title: "DORITOS® Nacho Cheese Flavored Chips 10 Multi-Pack",
        description: "Enjoy the bold and cheesy flavor of DORITOS® Nacho Cheese Flavored Chips in a convenient 10-pack, ideal for sharing or stocking up.",
        image: "https://i.imgur.com/IRevygd.png",
        price: 8.99,  // Example price
        flavour: "Nacho Cheese",
        recipe: "Create a creamy nacho cheese dip by melting cheddar cheese with diced tomatoes and green chilies. Serve warm with these chips for a classic snack.",
        ingredient: "Cheddar cheese, tomatoes, green chilies."
    },
    {
        title: "DORITOS® Multiple Flavored Mix Variety Pack",
        description: "Explore a variety of flavors with DORITOS® Multiple Flavored Mix Variety Pack, featuring a selection of bold and spicy chips.",
        image: "https://i.imgur.com/iEnZF3T.png",
        price: 9.99,  // Example price
        flavour: "Assorted",
        recipe: "Pair these assorted chips with different dips for a flavor adventure. Try salsa, guacamole, or ranch dressing to complement each chip flavor.",
        ingredient: "Varies with flavors."
    },
    {
        title: "PRINGLES® Grab & Go Multipack 3 Crisp Flavors",
        description: "Enjoy the convenience of PRINGLES® Grab & Go Multipack featuring three popular crisp flavors, perfect for snacking anytime, anywhere.",
        image: "https://i.imgur.com/vt0jBR0.png",
        price: 6.99,  // Example price
        flavour: "Assorted",
        recipe: "These versatile chips go well with any dip or as a standalone snack. Try them with hummus, spinach artichoke dip, or your favorite cheese dip.",
        ingredient: "Varies with flavors."
    }
];


  
  module.exports = { data: laysProducts };