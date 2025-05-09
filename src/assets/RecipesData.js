const RecipesData = [
    {
      id: 1,
      title: "Creamy Mushroom Risotto",
      perpTime: "10 min",
      cookTime: "25 min",
      time: "35 min",
      difficulty: "Medium",
      image:
        "https://readdy.ai/api/search-image?query=Creamy%20mushroom%20risotto%20in%20a%20white%20bowl%2C%20garnished%20with%20fresh%20herbs%20and%20parmesan%20cheese.%20Food%20photography%20with%20soft%20natural%20lighting%2C%20shallow%20depth%20of%20field%2C%20and%20a%20rustic%20wooden%20table%20background.%20Professional%20food%20styling%20with%20vibrant%20colors%20and%20textures.&width=600&height=400&seq=1&orientation=landscape",
      category: "Dinner",
      intro:"This Creamy Mushroom Risotto is the ultimate comfort food, combining arborio rice with a medley of mushrooms for a rich, earthy flavor. The slow cooking process creates a perfectly creamy texture while maintaining the rice's signature al dente bite. Finished with butter and freshly grated Parmesan cheese, this classic Italian dish is both elegant and satisfying",
      baseIngredients: [
        {
          id: 11,
          name: "Arborio rice",
          quantity: 1.5,
          unit: "cups",
        },
        {
          id: 12,
          name: "Mixed mushrooms (cremini, shiitake, oyster)",
          quantity: 8,
          unit: "oz",
        },
        {
          id: 13,
          name: "Shallots, finely diced",
          quantity: 2,
          unit: "",
        },
        {
          id: 14,
          name: "Garlic cloves, minced",
          quantity: 3,
          unit: "",
        },
        {
          id: 15,
          name: "Dry white wine",
          quantity: 0.5,
          unit: "cup",
        },
        {
          id: 16,
          name: "Vegetable or chicken broth, warm",
          quantity: 4,
          unit: "cups",
        },
        { id: 17, name: "Butter", quantity: 2, unit: "tbsp", checked: false },
        {
          id: 18,
          name: "Olive oil",
          quantity: 2,
          unit: "tbsp",
          checked: false,
        },
        {
          id: 19,
          name: "Parmesan cheese, freshly grated",
          quantity: 0.5,
          unit: "cup",
        },
        {
          id: 20,
          name: "Fresh thyme leaves",
          quantity: 1,
          unit: "tbsp",
        },
        {
          id: 21,
          name: "Salt and freshly ground black pepper",
          quantity: 0,
          unit: "to taste",
        },
        {
          id: 22,
          name: "Fresh parsley, chopped for garnish",
          quantity: 2,
          unit: "tbsp",
        },
      ],
      instructions: [
        {
          step: 1,
          instruction:
            "Clean and slice the mushrooms. If using shiitake, remove the stems.",
          time: "5 min",
        },
        {
          step: 2,
          instruction:
            "In a large skillet, heat 1 tablespoon of olive oil over medium-high heat. Add the mushrooms and cook until they release their moisture and turn golden brown, about 5-7 minutes. Season with salt and pepper, add half of the thyme, and set aside.",
          time: "7 min",
        },
        {
          step: 3,
          instruction:
            "In a large, heavy-bottomed pot or Dutch oven, heat the remaining olive oil and 1 tablespoon of butter over medium heat. Add the diced shallots and cook until translucent, about 2-3 minutes.",
          time: "3 min",
        },
        {
          step: 4,
          instruction:
            "Add the minced garlic and cook for another 30 seconds until fragrant.",
          time: "30 sec",
        },
        {
          step: 5,
          instruction:
            "Add the arborio rice to the pot and stir to coat with oil and butter. Toast the rice for about 2 minutes until the edges become translucent.",
          time: "2 min",
        },
        {
          step: 6,
          instruction:
            "Pour in the white wine and stir constantly until it is almost completely absorbed by the rice.",
          time: "2 min",
        },
        {
          step: 7,
          instruction:
            "Begin adding the warm broth, one ladle (about 1/2 cup) at a time. Stir frequently and wait until each addition is almost fully absorbed before adding more broth.",
          time: "20 min",
        },
        {
          step: 8,
          instruction:
            "Continue this process until the rice is creamy and al dente (tender but still firm to the bite), about 18-20 minutes total. You may not need all the broth, or you might need a little more.",
          time: "5 min",
        },
        {
          step: 9,
          instruction:
            "Remove from heat and stir in the remaining butter, grated Parmesan cheese, and the cooked mushrooms. Add the remaining thyme leaves.",
          time: "1 min",
        },
        {
          step: 10,
          instruction:
            "Cover and let rest for 2 minutes. Season with additional salt and pepper to taste.",
          time: "2 min",
        },
        {
          step: 11,
          instruction:
            "Serve immediately, garnished with fresh parsley and additional Parmesan cheese if desired.",
          time: "1 min",
        },
      ],
      nutritionFacts:{
        calories: 380,
        protein: 10,
        carbs: 48,
        fat: 15,
        fiber: 3,
        sugar: 2,
        sodium: 580,
        servingSize: '1 cup (240g)'
      }
    },
    {
      id: 2,
      title: "Avocado Toast with Poached Eggs",
      perpTime: "10 min",
      cookTime: "20 min",
      time: "30 min",
      difficulty: "Easy",
      image:
        "https://readdy.ai/api/search-image?query=Avocado%20toast%20with%20perfectly%20poached%20eggs%20on%20artisanal%20bread%2C%20sprinkled%20with%20red%20pepper%20flakes%20and%20microgreens.%20Bright%2C%20airy%20food%20photography%20with%20natural%20morning%20light.%20Served%20on%20a%20minimalist%20ceramic%20plate%20with%20a%20cup%20of%20coffee%20visible%20in%20the%20background.&width=600&height=400&seq=2&orientation=landscape",
      category: "Breakfast",
      intro:`This Avocado Toast with Poached Eggs is a simple yet satisfying breakfast or brunch favorite, featuring creamy smashed avocado on crispy toasted bread, topped with perfectly poached eggs. Finished with a sprinkle of chili flakes, herbs, or a drizzle of olive oil, it’s a nourishing meal that’s both wholesome and elegant.`,
      baseIngredients: [
        {
          id: 1,
          name: "Whole-grain or sourdough bread, toasted",
          quantity: 2,
          unit: "slices",
        },
        {
          id: 2,
          name: "Ripe avocado",
          quantity: 1,
          unit: "",
        },
        {
          id: 3,
          name: "Large eggs",
          quantity: 2,
          unit: "",
        },
        {
          id: 4,
          name: "White vinegar (for poaching)",
          quantity: 1,
          unit: "tbsp",
        },
        {
          id: 5,
          name: "Salt",
          quantity: 0,
          unit: "to taste",
        },
        {
          id: 6,
          name: "Black pepper",
          quantity: 0,
          unit: "to taste",
        },
        {
          id: 7,
          name: "Red pepper flakes (optional)",
          quantity: 0,
          unit: "to taste",
        },
        {
          id: 8,
          name: "Fresh lemon juice (optional)",
          quantity: 0.5,
          unit: "tsp",
        },
        {
          id: 9,
          name: "Fresh herbs like chives or cilantro, chopped (optional)",
          quantity: 1,
          unit: "tbsp",
        },
      ],
      instructions:[
        
          {
            "step": 1,
            "instruction": "Bring a saucepan of water to a simmer. Add a splash of vinegar.",
            "time": "5 min"
          },
          {
            "step": 2,
            "instruction": "Crack each egg into a small bowl.",
            "time": "1 min"
          },
          {
            "step": 3,
            "instruction": "Gently slide each egg into the simmering water. Cook for 3-4 minutes for a runny yolk.",
            "time": "4 min"
          },
          {
            "step": 4,
            "instruction": "While the eggs are poaching, toast the bread to your desired level of crispness.",
            "time": "3 min"
          },
          {
            "step": 5,
            "instruction": "Halve the avocado, remove the pit, and scoop the flesh into a bowl. Mash with a fork.",
            "time": "2 min"
          },
          {
            "step": 6,
            "instruction": "Season the mashed avocado with salt, pepper, and a squeeze of lemon juice (if using).",
            "time": "1 min"
          },
          {
            "step": 7,
            "instruction": "Spread the mashed avocado evenly onto the toasted bread.",
            "time": "1 min"
          },
          {
            "step": 8,
            "instruction": "Carefully remove the poached eggs from the water with a slotted spoon and place one or two on top of the avocado toast.",
            "time": "2 min"
          },
          {
            "step": 9,
            "instruction": "Season the poached eggs with salt, pepper, and any additional toppings you like (red pepper flakes, everything bagel seasoning, etc.).",
            "time": "1 min"
          },
          {
            "step": 10,
            "instruction": "Serve immediately and enjoy!",
            "time": "1 min"
          }
      ],
      nutritionFacts:{
        calories: 282,
        protein: 12,
        carbs: 28,
        fat: 22,
        fiber: 10,
        sugar: 4,
        sodium: 270,
        servingSize: '1 serving'
      }
    },
    {
      id: 3,
      title: "Berry Cheesecake Parfait",
      perpTime: "25 min",
      cookTime: "40 min",
      time: "1hr 5min",
      difficulty: "Easy",
      image:
        "https://readdy.ai/api/search-image?query=Layered%20berry%20cheesecake%20parfait%20in%20a%20clear%20glass%2C%20with%20alternating%20layers%20of%20creamy%20cheesecake%20filling%2C%20fresh%20strawberries%2C%20blueberries%2C%20and%20graham%20cracker%20crumbs.%20Topped%20with%20mint%20leaves%20and%20a%20light%20dusting%20of%20powdered%20sugar.%20Clean%20white%20background%20with%20soft%20shadows.&width=600&height=400&seq=3&orientation=landscape",
      category: "Desserts",
      intro:'This Berry Cheesecake Parfait is a delightful no-bake dessert that layers creamy cheesecake filling with juicy mixed berries and crunchy graham cracker crumbs. The combination of sweet, tart, and creamy textures makes it a refreshing yet indulgent treat. Perfect for individual servings, this elegant dessert comes together quickly and is ideal for any occasion.',
      baseIngredients: [
        {
          id: 1,
          name: "Cream cheese, softened",
          quantity: 8,
          unit: "oz",
        },
        {
          id: 2,
          name: "Greek yogurt or sour cream",
          quantity: 0.5,
          unit: "cup",
        },
        {
          id: 3,
          name: "Granulated sugar",
          quantity: 0.25,
          unit: "cup",
        },
        {
          id: 4,
          name: "Vanilla extract",
          quantity: 1,
          unit: "tsp",
        },
        {
          id: 5,
          name: "Mixed fresh berries (strawberries, blueberries, raspberries)",
          quantity: 2,
          unit: "cups",
        },
        {
          id: 6,
          name: "Graham cracker crumbs",
          quantity: 1,
          unit: "cup",
        },
        {
          id: 7,
          name: "Unsalted butter, melted",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 8,
          name: "Honey or maple syrup (optional, for drizzling)",
          quantity: 0,
          unit: "to taste",
        },
        {
          id: 9,
          name: "Mint leaves (optional, for garnish)",
          quantity: 0,
          unit: "to taste",
        },
      ],
      instructions:[
        
          {
            "step": 1,
            "instruction": "Prepare the graham cracker crumbs. You can crush them in a zip-top bag with a rolling pin or in a food processor.",
            "time": "5 min"
          },
          {
            "step": 2,
            "instruction": "In a medium bowl, beat the cream cheese with an electric mixer until smooth and creamy.",
            "time": "3 min"
          },
          {
            "step": 3,
            "instruction": "Gradually add the powdered sugar to the cream cheese, beating until well combined and smooth.",
            "time": "2 min"
          },
          {
            "step": 4,
            "instruction": "Stir in the vanilla extract and lemon juice (if using).",
            "time": "1 min"
          },
          {
            "step": 5,
            "instruction": "In a separate bowl, whip the heavy cream with a clean whisk or electric mixer until stiff peaks form.",
            "time": "5 min"
          },
          {
            "step": 6,
            "instruction": "Gently fold the whipped cream into the cream cheese mixture until just combined. Be careful not to overmix.",
            "time": "3 min"
          },
          {
            "step": 7,
            "instruction": "Wash and prepare your berries. Slice any large berries.",
            "time": "5 min"
          },
          {
            "step": 8,
            "instruction": "Assemble the parfaits. In individual glasses or jars, layer graham cracker crumbs, cheesecake mixture, and berries.",
            "time": "5 min"
          },
          {
            "step": 9,
            "instruction": "Repeat the layers until your glasses are full, ending with a layer of berries on top.",
            "time": "5 min"
          },
          {
            "step": 10,
            "instruction": "Chill in the refrigerator for at least 30 minutes to allow the parfaits to set slightly. This step enhances the flavors.",
            "time": "30 min"
          },
          {
            "step": 11,
            "instruction": "Garnish with additional fresh berries or a sprinkle of graham cracker crumbs before serving, if desired.",
            "time": "1 min"
          }
      ],
      nutritionFacts:{
        calories: 270,
        protein: 4,
        carbs: 30,
        fat: 15,
        fiber: 1,
        sugar: 20,
        sodium: 350,
        servingSize: '1 parfait'
      }
      
    },
    {
      id: 4,
      title: "Mediterranean Quinoa Bowl",
      perpTime: "10 min",
      cookTime: "24 min",
      time: "34 min",
      difficulty: "Easy",
      image:
        "https://readdy.ai/api/search-image?query=Mediterranean%20quinoa%20bowl%20with%20colorful%20vegetables%2C%20chickpeas%2C%20feta%20cheese%2C%20and%20olives.%20Drizzled%20with%20tahini%20dressing%20and%20garnished%20with%20fresh%20herbs.%20Vibrant%20food%20photography%20with%20bright%20colors%20against%20a%20light%20marble%20background.%20Overhead%20composition%20with%20natural%20lighting.&width=600&height=400&seq=4&orientation=landscape",
      category: "Lunch",
      intro:`This Mediterranean Quinoa Bowl is a vibrant and nutritious dish packed with protein-rich quinoa, fresh vegetables, tangy feta cheese, and briny olives. Topped with a zesty lemon-oregano dressing, it’s a flavorful and refreshing meal that’s perfect for lunch or dinner.`,
      baseIngredients: [
        {
          id: 11,
          name: "Quinoa, uncooked",
          quantity: 1,
          unit: "cup",
        },
        {
          id: 12,
          name: "Water or vegetable broth",
          quantity: 2,
          unit: "cups",
        },
        {
          id: 13,
          name: "Cherry tomatoes, halved",
          quantity: 1,
          unit: "cup",
        },
        {
          id: 14,
          name: "Cucumber, diced",
          quantity: 1,
          unit: "",
        },
        {
          id: 15,
          name: "Kalamata olives, pitted and sliced",
          quantity: 0.5,
          unit: "cup",
        },
        {
          id: 16,
          name: "Red onion, finely chopped",
          quantity: 0.25,
          unit: "cup",
        },
        {
          id: 17,
          name: "Feta cheese, crumbled",
          quantity: 0.5,
          unit: "cup",
        },
        {
          id: 18,
          name: "Fresh parsley, chopped",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 19,
          name: "Lemon juice",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 20,
          name: "Olive oil",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 21,
          name: "Salt and black pepper",
          quantity: 0,
          unit: "to taste",
        },
      ],
      instructions: [
          {
            step: 1,
            instruction: "Rinse the quinoa under cold water using a fine mesh sieve.",
            time: "2 min",
          },
          {
            step: 2,
            instruction: "In a medium saucepan, combine quinoa with water or vegetable broth (2:1 ratio). Bring to a boil, then reduce to a simmer, cover, and cook until liquid is absorbed and quinoa is fluffy.",
            time: "15 min",
          },
          {
            step: 3,
            instruction: "While the quinoa cooks, dice the cucumber, cherry tomatoes, red onion, and bell pepper.",
            time: "5 min",
          },
          {
            step: 4,
            instruction: "In a small bowl, whisk together olive oil, lemon juice, minced garlic, salt, pepper, and a pinch of dried oregano to make the dressing.",
            time: "3 min",
          },
          {
            step: 5,
            instruction: "Once quinoa is cooked, let it cool slightly. Then fluff it with a fork.",
            time: "2 min",
          },
          {
            step: 6,
            instruction: "In a large mixing bowl, combine the quinoa, chopped vegetables, Kalamata olives, and crumbled feta cheese.",
            time: "3 min",
          },
          {
            step: 7,
            instruction: "Pour the dressing over the quinoa mixture and toss until evenly coated.",
            time: "2 min",
          },
          {
            step: 8,
            instruction: "Taste and adjust seasoning with additional salt, pepper, or lemon juice as needed.",
            time: "1 min",
          },
          {
            step: 9,
            instruction: "Serve the Mediterranean quinoa bowl chilled or at room temperature, garnished with fresh parsley or mint if desired.",
            time: "1 min",
          },
      ],
      nutritionFacts:{
        calories: 415,
        protein: 31,
        carbs: 33,
        fat: 18,
        fiber: 6,
        sugar: 5,
        sodium: 400,
        servingSize: '1 bowl'
      }
    },
    {
      id: 5,
      title: "Spicy Thai Basil Chicken",
      perpTime: "10 min",
      cookTime: "20 min",
      time: "30 min",
      difficulty: "Medium",
      image:
        "https://readdy.ai/api/search-image?query=Spicy%20Thai%20basil%20chicken%20stir-fry%20with%20vibrant%20bell%20peppers%20and%20green%20beans%2C%20served%20over%20jasmine%20rice.%20Steam%20rising%20from%20the%20dish%2C%20garnished%20with%20fresh%20basil%20leaves%20and%20a%20lime%20wedge.%20Rich%2C%20aromatic%20food%20photography%20with%20dramatic%20lighting%20highlighting%20the%20glossy%20sauce%20and%20colorful%20ingredients.&width=600&height=400&seq=5&orientation=landscape",
      category: "Dinner",
      intro:`This Spicy Thai Basil Chicken (Pad Krapow Gai) is a bold, aromatic stir-fry that combines ground chicken with fiery chilies, garlic, and fragrant Thai basil. Served over jasmine rice and optionally topped with a crispy fried egg, it’s a fast and flavorful takeout-style meal made at home.`,
      baseIngredients: [
        {
          id: 11,
          name: "Chicken thighs or breast, thinly sliced",
          quantity: 1,
          unit: "lb",
        },
        {
          id: 12,
          name: "Garlic cloves, minced",
          quantity: 4,
          unit: "",
        },
        {
          id: 13,
          name: "Red chilies, finely chopped (Thai bird’s eye preferred)",
          quantity: 3,
          unit: "",
        },
        {
          id: 14,
          name: "Vegetable oil",
          quantity: 1,
          unit: "tbsp",
        },
        {
          id: 15,
          name: "Soy sauce",
          quantity: 1.5,
          unit: "tbsp",
        },
        {
          id: 16,
          name: "Oyster sauce",
          quantity: 1,
          unit: "tbsp",
        },
        {
          id: 17,
          name: "Fish sauce",
          quantity: 1,
          unit: "tsp",
        },
        {
          id: 18,
          name: "Sugar",
          quantity: 1,
          unit: "tsp",
        },
        {
          id: 19,
          name: "Water",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 20,
          name: "Fresh Thai basil leaves",
          quantity: 1,
          unit: "cup",
        },
        {
          id: 21,
          name: "Cooked jasmine rice (for serving)",
          quantity: 2,
          unit: "cups",
        },
      ],
      instructions: [
        {
          step: 1,
          instruction: "Prepare the ingredients: mince the garlic, slice the Thai chilies (or red chili), and roughly chop the Thai basil leaves.",
          time: "5 min",
        },
        {
          step: 2,
          instruction: "In a small bowl, mix together soy sauce, fish sauce, oyster sauce, and a pinch of sugar to create the sauce.",
          time: "2 min",
        },
        {
          step: 3,
          instruction: "Heat vegetable oil in a wok or large skillet over medium-high heat.",
          time: "1 min",
        },
        {
          step: 4,
          instruction: "Add the minced garlic and chilies to the hot oil. Stir-fry until fragrant but not burned.",
          time: "30 sec",
        },
        {
          step: 5,
          instruction: "Add the ground chicken and cook, breaking it apart with a spatula, until it is no longer pink and starts to brown.",
          time: "5 min",
        },
        {
          step: 6,
          instruction: "Pour in the prepared sauce mixture and stir to coat the chicken evenly.",
          time: "2 min",
        },
        {
          step: 7,
          instruction: "Add the Thai basil leaves and stir just until wilted.",
          time: "1 min",
        },
        {
          step: 8,
          instruction: "Remove from heat and serve immediately over hot jasmine rice. Optionally, top with a crispy fried egg.",
          time: "2 min",
        },
      ],
      nutritionFacts:{
        calories: 559,
        protein: 46,
        carbs: 48,
        fat: 19,
        fiber: 3.6,
        sugar: 14,
        sodium: 689,
        servingSize: '1 serving (about 2 cups)'
      }
      
      
    },
    {
      id: 6,
      title: "Blueberry Pancake Stack",
      perpTime: "10 min",
      cookTime: "10 min",
      time: "20 min",
      difficulty: "Easy",
      image:
        "https://readdy.ai/api/search-image?query=Tall%20stack%20of%20fluffy%20blueberry%20pancakes%20with%20maple%20syrup%20dripping%20down%20the%20sides.%20Topped%20with%20fresh%20blueberries%2C%20a%20pat%20of%20butter%2C%20and%20a%20light%20dusting%20of%20powdered%20sugar.%20Warm%20morning%20light%20streaming%20in%2C%20creating%20a%20cozy%20breakfast%20scene%20on%20a%20wooden%20table%20with%20a%20cup%20of%20coffee%20nearby.&width=600&height=400&seq=6&orientation=landscape",
      category: "Breakfast",
      intro:`This Blueberry Pancake Stack is a comforting breakfast classic made with fluffy, golden pancakes studded with juicy blueberries. Served warm and topped with butter and maple syrup, it's a deliciously sweet way to start your day.`,
      baseIngredients: [
        {
          id: 11,
          name: "All-purpose flour",
          quantity: 1.5,
          unit: "cups",
        },
        {
          id: 12,
          name: "Baking powder",
          quantity: 1.5,
          unit: "tsp",
        },
        {
          id: 13,
          name: "Salt",
          quantity: 0.25,
          unit: "tsp",
        },
        {
          id: 14,
          name: "Granulated sugar",
          quantity: 1,
          unit: "tbsp",
        },
        {
          id: 15,
          name: "Milk",
          quantity: 1.25,
          unit: "cups",
        },
        {
          id: 16,
          name: "Egg",
          quantity: 1,
          unit: "",
        },
        {
          id: 17,
          name: "Unsalted butter, melted",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 18,
          name: "Vanilla extract",
          quantity: 1,
          unit: "tsp",
        },
        {
          id: 19,
          name: "Fresh or frozen blueberries",
          quantity: 1,
          unit: "cup",
        },
        {
          id: 20,
          name: "Maple syrup (for serving)",
          quantity: 0,
          unit: "to taste",
        },
        {
          id: 21,
          name: "Butter (for cooking)",
          quantity: 1,
          unit: "tbsp",
        },
      ],
      instructions: [
        {
          step: 1,
          instruction: "In a large bowl, whisk together flour, baking powder, sugar, and a pinch of salt.",
          time: "3 min",
        },
        {
          step: 2,
          instruction: "In a separate bowl, beat the egg and mix in milk, melted butter (or oil), and vanilla extract.",
          time: "2 min",
        },
        {
          step: 3,
          instruction: "Pour the wet ingredients into the dry ingredients and stir gently until just combined. Do not overmix — a few lumps are fine.",
          time: "2 min",
        },
        {
          step: 4,
          instruction: "Gently fold in the fresh or frozen blueberries.",
          time: "1 min",
        },
        {
          step: 5,
          instruction: "Heat a non-stick skillet or griddle over medium heat and lightly grease with butter or oil.",
          time: "1 min",
        },
        {
          step: 6,
          instruction: "Pour 1/4 cup of batter per pancake onto the skillet. Cook until bubbles form on the surface and the edges look set.",
          time: "2-3 min",
        },
        {
          step: 7,
          instruction: "Flip the pancakes and cook for another 1-2 minutes until golden brown and cooked through.",
          time: "2 min",
        },
        {
          step: 8,
          instruction: "Repeat with remaining batter, greasing the skillet as needed.",
          time: "5 min",
        },
        {
          step: 9,
          instruction: "Stack the pancakes on a plate, top with extra blueberries, a pat of butter, and drizzle with maple syrup.",
          time: "1 min",
        },
      ],
      nutritionFacts:{
        calories: 560,
        protein: 10,
        carbs: 91,
        fat: 19,
        fiber: 2,
        sugar: 15,
        sodium: 500,
        servingSize: 'Short stack (approx. 3 pancakes)'
      }
      
    },
    {
      id: 7,
      title: "Crispy Tofu Buddha Bowl",
      perpTime: "24 min",
      cookTime: "33 min",
      time: "57 min",
      difficulty: "Easy",
      image:
        "https://readdy.ai/api/search-image?query=Vibrant%20buddha%20bowl%20with%20crispy%20tofu%20cubes%2C%20quinoa%2C%20roasted%20sweet%20potatoes%2C%20fresh%20vegetables%2C%20and%20avocado.%20Drizzled%20with%20tahini%20sauce%20and%20sprinkled%20with%20sesame%20seeds.%20Bright%20natural%20lighting%20on%20a%20light%20wooden%20surface%20with%20minimalist%20props%20and%20styling.&width=600&height=400&seq=12&orientation=landscape",
      category: "Lunch",
      intro:`This Crispy Tofu Buddha Bowl is a wholesome and colorful meal that brings together crunchy tofu, fresh vegetables, hearty grains, and a creamy tahini dressing. Packed with plant-based protein and fiber, it’s a satisfying and nutrient-rich dish perfect for any time of day.`,
      baseIngredients:[
        {
          id: 11,
          name: "Firm tofu, pressed and cubed",
          quantity: 14,
          unit: "oz",
        },
        {
          id: 12,
          name: "Cornstarch",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 13,
          name: "Soy sauce (or tamari for gluten-free)",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 14,
          name: "Sesame oil",
          quantity: 1,
          unit: "tbsp",
        },
        {
          id: 15,
          name: "Cooked brown rice or quinoa",
          quantity: 2,
          unit: "cups",
        },
        {
          id: 16,
          name: "Carrots, shredded or julienned",
          quantity: 1,
          unit: "cup",
        },
        {
          id: 17,
          name: "Cucumber, sliced",
          quantity: 1,
          unit: "",
        },
        {
          id: 18,
          name: "Red cabbage, shredded",
          quantity: 1,
          unit: "cup",
        },
        {
          id: 19,
          name: "Avocado, sliced",
          quantity: 1,
          unit: "",
        },
        {
          id: 20,
          name: "Green onions, chopped",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 21,
          name: "Sesame seeds (for garnish)",
          quantity: 1,
          unit: "tsp",
        },
        {
          id: 22,
          name: "Peanut or tahini dressing",
          quantity: 0,
          unit: "to taste",
        }
        
      ],
      instructions: [
        {
          step: 1,
          instruction: "Drain the tofu and press it for at least 15 minutes to remove excess moisture, then cut into cubes.",
          time: "15 min",
        },
        {
          step: 2,
          instruction: "Toss the tofu cubes in cornstarch, salt, and pepper until evenly coated.",
          time: "2 min",
        },
        {
          step: 3,
          instruction: "Heat oil in a non-stick skillet over medium-high heat. Add tofu cubes and pan-fry until all sides are golden and crispy.",
          time: "8 min",
        },
        {
          step: 4,
          instruction: "Cook your grain of choice (quinoa, brown rice, or farro) according to package instructions.",
          time: "20 min",
        },
        {
          step: 5,
          instruction: "Chop and prepare fresh vegetables such as cucumber, carrot, red cabbage, and bell pepper.",
          time: "5 min",
        },
        {
          step: 6,
          instruction: "Make a simple sauce by whisking together tahini, lemon juice, maple syrup, soy sauce, and a bit of warm water until smooth.",
          time: "3 min",
        },
        {
          step: 7,
          instruction: "Assemble the Buddha bowl: start with a base of grains, add crispy tofu, arrange the fresh veggies around, and drizzle with the sauce.",
          time: "3 min",
        },
        {
          step: 8,
          instruction: "Garnish with sesame seeds, chopped herbs (like cilantro or green onions), and serve immediately.",
          time: "1 min",
        },
      ],
      nutritionFacts:{
        calories: 670,
        protein: 25,
        carbs: 53,
        fat: 25,
        fiber: 10,
        sugar: 6,
        sodium: 600,
        servingSize: '1 bowl (384g)'
      }
      
    },
    {
      id: 8,
      title: "Vegan Chocolate Mousse",
      perpTime: "60 min",
      cookTime: "15 min",
      time: "1hr 15min",
      difficulty: "Easy",
      image:
        "https://readdy.ai/api/search-image?query=Decadent%20dark%20chocolate%20mousse%20made%20with%20avocado%20and%20coconut%20cream%2C%20topped%20with%20fresh%20raspberries%20and%20mint%20leaves.%20Served%20in%20elegant%20glass%20bowls%20with%20a%20dusting%20of%20cocoa%20powder.%20Moody%20lighting%20with%20rich%20textures%20and%20dramatic%20shadows.&width=600&height=400&seq=13&orientation=landscape",
      category: "Desserts",
      intro:`This Vegan Chocolate Mousse is a rich and silky dessert made with whipped coconut cream and melted dark chocolate. Light yet indulgent, it’s an elegant treat that’s entirely dairy-free and perfect for a quick, decadent finish to any meal.`,
      baseIngredients:[
        {
          id: 11,
          name: "Canned coconut milk (full fat), chilled overnight",
          quantity: 1,
          unit: "can",
        },
        {
          id: 12,
          name: "Dark chocolate (dairy-free), chopped",
          quantity: 4,
          unit: "oz",
        },
        {
          id: 13,
          name: "Maple syrup or agave nectar",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 14,
          name: "Vanilla extract",
          quantity: 1,
          unit: "tsp",
        },
        {
          id: 15,
          name: "Cocoa powder (optional, for richer flavor)",
          quantity: 1,
          unit: "tbsp",
        },
        {
          id: 16,
          name: "Pinch of salt",
          quantity: 1,
          unit: "pinch",
        },
        {
          id: 17,
          name: "Fresh berries (for topping, optional)",
          quantity: 0.5,
          unit: "cup",
        },
        {
          id: 18,
          name: "Shaved chocolate or cacao nibs (for garnish, optional)",
          quantity: 1,
          unit: "tbsp",
        }
        
      ],
      instructions: [
        {
          step: 1,
          instruction: "Scoop out the solid part of a chilled can of full-fat coconut milk or cream into a mixing bowl. Discard or save the liquid for another use.",
          time: "2 min",
        },
        {
          step: 2,
          instruction: "Using a hand mixer or whisk, beat the coconut cream until light and fluffy.",
          time: "3 min",
        },
        {
          step: 3,
          instruction: "Melt vegan dark chocolate in a heatproof bowl over a pot of simmering water (double boiler method) or in short bursts in the microwave, stirring frequently.",
          time: "5 min",
        },
        {
          step: 4,
          instruction: "Let the melted chocolate cool slightly, then gently fold it into the whipped coconut cream along with maple syrup and a splash of vanilla extract.",
          time: "3 min",
        },
        {
          step: 5,
          instruction: "Continue folding until the mixture is smooth and well combined. Taste and adjust sweetness if needed.",
          time: "2 min",
        },
        {
          step: 6,
          instruction: "Divide the mousse into serving glasses or bowls and refrigerate for at least 1 hour to set.",
          time: "1 hr",
        },
        {
          step: 7,
          instruction: "Serve chilled, optionally topped with fresh berries, shaved chocolate, or a dollop of coconut whipped cream.",
          time: "1 min",
        },
      ],
      nutritionFacts:{
        calories: 266,
        protein: 2,
        carbs: 18,
        fat: 22.5,
        fiber: 2,
        sugar: 15,
        sodium: 100,
        servingSize: '1 serving'
      }
      
    },
    {
      id: 9,
      title: "10-Minute Caprese Sandwich",
      perpTime: "10 min",
      cookTime: "0 min",
      time: "10 min",
      difficulty: "Easy",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20caprese%20sandwich%20on%20crusty%20bread%20with%20layers%20of%20tomato%2C%20mozzarella%2C%20and%20basil%20leaves%2C%20drizzled%20with%20balsamic%20glaze.%20Served%20on%20rustic%20wooden%20board%20with%20fresh%20ingredients%20scattered%20around.%20Bright%20natural%20lighting%20with%20shallow%20depth%20of%20field.&width=600&height=400&seq=14&orientation=landscape",
      category: "Breakfast",
      intro:`This 10-Minute Caprese Sandwich is a fresh and flavorful take on the Italian classic, layering slices of tomato, mozzarella, and basil between toasted bread with a swipe of pesto. Finished with a drizzle of balsamic glaze, it’s a quick and satisfying option for lunch or a light dinner.`,
      baseIngredients:[
        {
          id: 11,
          name: "Ciabatta or baguette, sliced",
          quantity: 1,
          unit: "loaf",
        },
        {
          id: 12,
          name: "Fresh mozzarella, sliced",
          quantity: 8,
          unit: "oz",
        },
        {
          id: 13,
          name: "Tomatoes, sliced",
          quantity: 2,
          unit: "",
        },
        {
          id: 14,
          name: "Fresh basil leaves",
          quantity: 0.5,
          unit: "cup",
        },
        {
          id: 15,
          name: "Balsamic glaze",
          quantity: 2,
          unit: "tbsp",
        },
        {
          id: 16,
          name: "Olive oil",
          quantity: 1,
          unit: "tbsp",
        },
        {
          id: 17,
          name: "Salt and black pepper",
          quantity: 0,
          unit: "to taste",
        }
        
      ],
      instructions: [
        {
          step: 1,
          instruction: "Slice the fresh mozzarella, tomatoes, and baguette or ciabatta roll.",
          time: "2 min",
        },
        {
          step: 2,
          instruction: "Lightly toast the bread slices or halves in a toaster or on a skillet until golden and crisp.",
          time: "2 min",
        },
        {
          step: 3,
          instruction: "Spread a thin layer of pesto on one or both sides of the toasted bread.",
          time: "1 min",
        },
        {
          step: 4,
          instruction: "Layer slices of tomato, mozzarella, and fresh basil leaves on the sandwich base.",
          time: "2 min",
        },
        {
          step: 5,
          instruction: "Drizzle with balsamic glaze or reduction and season lightly with salt and pepper.",
          time: "1 min",
        },
        {
          step: 6,
          instruction: "Top with the second slice of bread, press gently, and serve immediately.",
          time: "1 min",
        },
      ],
      nutritionFacts:{
        calories: 412,
        protein: 14,
        carbs: 47,
        fat: 18,
        fiber: 3,
        sugar: 10,
        sodium: 1163,
        servingSize: '1 sandwich'
      }
      
    },
    {
      id: 10,
      title: "5-Minute Microwave Mug Cake",
      perpTime: "0 min",
      cookTime: "5 min",
      time: "5 min",
      difficulty: "Easy",
      image:
        "https://readdy.ai/api/search-image?query=Chocolate%20mug%20cake%20topped%20with%20whipped%20cream%20and%20fresh%20berries%2C%20served%20in%20a%20stylish%20ceramic%20mug.%20Steam%20rising%20from%20the%20warm%20cake%20with%20melting%20chocolate%20visible.%20Cozy%20lighting%20setup%20with%20rustic%20textures%20and%20simple%20garnishes.&width=600&height=400&seq=15&orientation=landscape",
      category: "Desserts",
      intro:`This 5-Minute Microwave Mug Cake is the ultimate quick-fix dessert, combining pantry staples into a rich, fluffy cake in minutes. Perfect for when you need a sweet treat fast, it’s customizable, comforting, and requires no oven.`,
      baseIngredients:
        [
          {
            id: 11,
            name: "All-purpose flour",
            quantity: 4,
            unit: "tbsp"
          },
          {
            id: 12,
            name: "Granulated sugar",
            quantity: 4,
            unit: "tbsp"
          },
          {
            id: 13,
            name: "Unsweetened cocoa powder",
            quantity: 2,
            unit: "tbsp"
          },
          {
            id: 14,
            name: "Baking powder",
            quantity: 0.25,
            unit: "tsp"
          },
          {
            id: 15,
            name: "Salt",
            quantity: 0.125,
            unit: "tsp"
          },
          {
            id: 16,
            name: "Milk",
            quantity: 3,
            unit: "tbsp"
          },
          {
            id: 17,
            name: "Vegetable oil",
            quantity: 1,
            unit: "tbsp"
          },
          {
            id: 18,
            name: "Vanilla extract",
            quantity: 0.5,
            unit: "tsp"
          }
        ],
      instructions: [
        {
          step: 1,
          instruction: "In a microwave-safe mug, add flour, sugar, cocoa powder, baking powder, and a pinch of salt. Stir to combine.",
          time: "1 min",
        },
        {
          step: 2,
          instruction: "Add milk (dairy or plant-based), oil, and vanilla extract to the mug. Mix until you get a smooth batter with no lumps.",
          time: "1 min",
        },
        {
          step: 3,
          instruction: "Optional: Fold in a few chocolate chips or a spoonful of nut butter into the center of the batter.",
          time: "30 sec",
        },
        {
          step: 4,
          instruction: "Microwave the mug on high for 1 minute. If the cake is still wet in the center, microwave in 10-second intervals until set.",
          time: "1-1.5 min",
        },
        {
          step: 5,
          instruction: "Let the mug cake cool for a minute or two before enjoying. Optionally, top with whipped cream, berries, or ice cream.",
          time: "1 min",
        },
      ],
      nutritionFacts :{
        calories: 280,
        protein: 4,
        carbs: 35,
        fat: 16,
        fiber: 2,
        sugar: 20,
        sodium: 190,
        servingSize: '1 mug cake'
      }
      
    },
  ];

export default RecipesData