const [pizzas] = [
  {
    id: '6372dfa2f3c3a7001639b4e2',
    title: 'Super Pizza',
    publisher: 'Kevin Fernandez',
    image:
      'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    key: 'c5e4f8af-b334-487a-8c79-5945a15bd2ae',
  },
  {
    id: '5ed6604591c37cdc054bcd09',
    title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
    publisher: 'Closet Cooking',
    image:
      'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcc13',
    title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
    publisher: 'Closet Cooking',
    image:
      'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcb34',
    title: 'Homemade Pizza',
    publisher: 'Simply Recipes',
    image: 'http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcb37',
    title: 'How to Grill Pizza',
    publisher: 'Simply Recipes',
    image:
      'http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcac4',
    title: 'Pizza Dip',
    publisher: 'Closet Cooking',
    image:
      'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg',
  },
  {
    id: '5ed6604591c37cdc054bca5d',
    title: 'Veggie Pizza',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/391236ba85.jpg',
  },
  {
    id: '5ed6604591c37cdc054bca57',
    title: 'Valentine Pizza',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/7988559586.jpg',
  },
  {
    id: '5ed6604591c37cdc054bca3b',
    title: 'Greek Pizza',
    publisher: 'A Spicy Perspective',
    image: 'http://forkify-api.herokuapp.com/images/IMG_4351180x1804f4a.jpg',
  },
  {
    id: '5ed6604591c37cdc054bca10',
    title: 'Pizza Dip',
    publisher: 'My Baking Addiction',
    image: 'http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc990',
    title: 'Pitta pizzas',
    publisher: 'BBC Good Food',
    image: 'http://forkify-api.herokuapp.com/images/1649634_MEDIUMd3fc.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc96e',
    title: 'Pizza Casserole',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/5100898cc5.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc971',
    title: 'Pizza Pinwheels',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/567c8fe.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc958',
    title: 'Pesto Pizza',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/104254d419.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc8fd',
    title: 'Hummus Pizza',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/636003da23.jpg',
  },
  {
    id: '5ed6604691c37cdc054bd0c0',
    title: 'Puff pizza tart',
    publisher: 'BBC Good Food',
    image: 'http://forkify-api.herokuapp.com/images/679637_MEDIUM765c.jpg',
  },
  {
    id: '5ed6604691c37cdc054bd0bc',
    title: 'Pizza Monkey Bread',
    publisher: "What's Gaby Cooking",
    image: 'http://forkify-api.herokuapp.com/images/PizzaMonkeyBread67f8.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcfb2',
    title: 'Veggi-Prosciutto Pizza',
    publisher: 'Epicurious',
    image: 'http://forkify-api.herokuapp.com/images/51150600f4cb.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcfcc',
    title: 'Barbecue Chicken Pizza',
    publisher: 'My Baking Addiction',
    image: 'http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcebc',
    title: 'Pizza Potato Skins',
    publisher: 'The Pioneer Woman',
    image: 'http://forkify-api.herokuapp.com/images/pizza3464.jpg',
  },
  {
    id: '5ed6604591c37cdc054bce0d',
    title: 'Mini Fruit Pizzas',
    publisher: 'Two Peas and Their Pod',
    image: 'http://forkify-api.herokuapp.com/images/minifruitpizzas52c00.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcd86',
    title: 'No-Knead Pizza Dough',
    publisher: 'Bon Appetit',
    image:
      'http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcc7e',
    title: 'Grilled Veggie Pizza',
    publisher: 'The Pioneer Woman',
    image: 'http://forkify-api.herokuapp.com/images/grilledveggie79bd.jpg',
  },
  {
    id: '5ed6604591c37cdc054bccb2',
    title: 'Mexican “Flatbread” Pizza',
    publisher: 'The Pioneer Woman',
    image:
      'http://forkify-api.herokuapp.com/images/4797377235_c07589b7d4_be953.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcc40',
    title: 'Pepperoni Pizza Burgers',
    publisher: 'The Pioneer Woman',
    image: 'http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcc3e',
    title: 'Supreme Pizza Burgers',
    publisher: 'The Pioneer Woman',
    image: 'http://forkify-api.herokuapp.com/images/burger53be.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcae1',
    title: 'Taco Quesadilla Pizzas',
    publisher: 'Closet Cooking',
    image:
      'http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc8f7',
    title: 'Hot Pizza Dip',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/580542e3ec.jpg',
  },
  {
    id: '5ed6604691c37cdc054bd0d4',
    title: 'Homemade Spicy Hummus Pizza',
    publisher: "Lisa's Kitchen",
    image: 'http://forkify-api.herokuapp.com/images/hummus_pizza25f37.jpg',
  },
  {
    id: '5ed6604691c37cdc054bd07c',
    title: 'Simple No Knead Pizza Dough',
    publisher: 'My Baking Addiction',
    image:
      'http://forkify-api.herokuapp.com/images/PizzaDough1of12edit5779.jpg',
  },
  {
    id: '5ed6604691c37cdc054bd034',
    title: 'Pepperoni Pizza Dip Recipe',
    publisher: 'Chow',
    image:
      'http://forkify-api.herokuapp.com/images/30624_RecipeImage_620x413_pepperoni_pizza_dip_4774d.jpg',
  },
  {
    id: '5ed6604691c37cdc054bd016',
    title: 'Pepperoni Pizza Hand Pies',
    publisher: "What's Gaby Cooking",
    image: 'http://forkify-api.herokuapp.com/images/PizzaHandPie4e08.jpg',
  },
  {
    id: '5ed6604691c37cdc054bd015',
    title: 'Grilled BBQ Chicken Pizza',
    publisher: "What's Gaby Cooking",
    image: 'http://forkify-api.herokuapp.com/images/IMG_15866d21.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcf8d',
    title: 'Loaded Veggie and Prosciutto Pizza',
    publisher: 'Whats Gaby Cooking',
    image: 'http://forkify-api.herokuapp.com/images/IMG_98428b96.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcf7e',
    title: 'Pizza bianco with artichoke hearts',
    publisher: 'BBC Good Food',
    image: 'http://forkify-api.herokuapp.com/images/2150654_MEDIUM6068.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcf09',
    title: 'Cauliflower Pizza Crust Recipe',
    publisher: 'Vintage Mixer',
    image:
      'http://forkify-api.herokuapp.com/images/CauliflowerPizzaCrustRecipe06fdc.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcc5b',
    title: 'Deep Dish Fruit Pizza',
    publisher: 'The Pioneer Woman',
    image: 'http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcd07',
    title: 'Best Pizza Dough Ever',
    publisher: '101 Cookbooks',
    image:
      'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
  },
  {
    id: '5ed6604591c37cdc054bccbd',
    title: 'PW’s Favorite Pizza',
    publisher: 'The Pioneer Woman',
    image:
      'http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcc76',
    title: 'One Basic Pizza Crust',
    publisher: 'The Pioneer Woman',
    image: 'http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcc72',
    title: 'Fig-Prosciutto Pizza with Arugula',
    publisher: 'The Pioneer Woman',
    image:
      'http://forkify-api.herokuapp.com/images/5278973957_3f9f9a21c2_o7a1b.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcc08',
    title: 'Salami and Brussels Sprouts Pizza',
    publisher: 'Real Simple',
    image: 'http://forkify-api.herokuapp.com/images/pizza_30061a5d763.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcbc1',
    title: 'English-Muffin Egg Pizzas',
    publisher: 'Real Simple',
    image: 'http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcb6e',
    title: 'Salami &amp; peppadew pizza',
    publisher: 'BBC Good Food',
    image: 'http://forkify-api.herokuapp.com/images/1813674_MEDIUM6f4a.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcac5',
    title: 'Pizza Quesadillas (aka Pizzadillas)',
    publisher: 'Closet Cooking',
    image:
      'http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg',
  },
  {
    id: '5ed6604591c37cdc054bca36',
    title: 'Pepperoni Pizza Monkey Bread',
    publisher: "What's Gaby Cooking",
    image:
      'http://forkify-api.herokuapp.com/images/PepperoniPizzaMonkeyBread8cd5.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc8b7',
    title: 'Fast English Muffin Pizzas',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/191121d99d.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc89a',
    title: 'Double Crust Stuffed Pizza',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/100111309d9.jpg',
  },
  {
    id: '5ed6604591c37cdc054bce32',
    title: 'Peach, Basil, Mozzarella, & Balsamic Pizza',
    publisher: 'Two Peas and Their Pod',
    image: 'http://forkify-api.herokuapp.com/images/peachbasilpizza6c7de.jpg',
  },
  {
    id: '5ed6604591c37cdc054bce0f',
    title: 'Avocado Pita Pizza with Cilantro Sauce',
    publisher: 'Two Peas and Their Pod',
    image:
      'http://forkify-api.herokuapp.com/images/avocadopizzawithcilantrosauce4bf5.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcd81',
    title: 'Fig and Goat Cheese Pizza with Arugula',
    publisher: 'Bon Appetit',
    image:
      'http://forkify-api.herokuapp.com/images/figandgoatcheesepizzawitharugula646698d.jpg',
  },
  {
    id: '5ed6604591c37cdc054bccbc',
    title: 'CPK’s BBQ Chicken Pizza',
    publisher: 'The Pioneer Woman',
    image:
      'http://forkify-api.herokuapp.com/images/4433733640_8b0a5d19fbace0.jpg',
  },
  {
    id: '5ed6604591c37cdc054bca79',
    title: 'Avocado Breakfast Pizza with Fried Egg',
    publisher: 'Closet Cooking',
    image:
      'http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc90b',
    title: 'Jay’s Signature Pizza Crust',
    publisher: 'All Recipes',
    image: 'http://forkify-api.herokuapp.com/images/237891b5e4.jpg',
  },
  {
    id: '5ed6604591c37cdc054bc886',
    title: 'Spicy Chicken and Pepper Jack Pizza',
    publisher: 'My Baking Addiction',
    image: 'http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcba5',
    title: 'Artichoke Pizzas With Lemony Green Bean Salad',
    publisher: 'Real Simple',
    image: 'http://forkify-api.herokuapp.com/images/20meals14_30007e78232.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcae5',
    title: 'Thai Chicken Pizza with Sweet Chili Sauce',
    publisher: 'Closet Cooking',
    image:
      'http://forkify-api.herokuapp.com/images/Thai2BChicken2BPizza2Bwith2BSweet2BChili2BSauce2B5002B435581bcf578.jpg',
  },
  {
    id: '5ed6604591c37cdc054bce26',
    title: 'Sweet Potato Kale Pizza with Rosemary & Red Onion',
    publisher: 'Two Peas and Their Pod',
    image:
      'http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg',
  },
  {
    id: '5ed6604591c37cdc054bca85',
    title:
      'Balsamic Strawberry and Chicken Pizza with Sweet Onions and Smoked Bacon',
    publisher: 'Closet Cooking',
    image:
      'http://forkify-api.herokuapp.com/images/Strawberry2BBalsamic2BPizza2Bwith2BChicken252C2BSweet2BOnion2Band2BSmoked2BBacon2B5002B300939d125e2.jpg',
  },
  {
    id: '5ed6604591c37cdc054bcf3a',
    title:
      'Egg, prosciutto, artichokes, olives, mozzarella, tomato sauce &amp; basil pizza topping',
    publisher: 'Jamie Oliver',
    image:
      'http://forkify-api.herokuapp.com/images/395_1_1350903959_lrgdd8a.jpg',
  },
];
