const ingredients =[
    "5 Large Mangos",
   "1/4 granulated sugar",
    "1 1/2 cold water",
    "3/4 cup silver tequila or rum (optional)",
    "3/4 cups of chamoy",
    "tajin to taste"];

const ingredientsList = document.getElementById("ingredients");
console.log(ingredientsList);

ingredients.forEach(iteam => {
    const li = document.createElement("li");
    li.textContent = iteam;
    ingredientsList.appendChild(li);
});


const recipe = [
    "Place 5 cups mango in a blender, reserving the remaining mango. Add the sugar, lime juice and ¾ cup cold water to the blender, and blend on medium-high speed until puréed. Blend in tequila or rum, if using. Blend in additional water, adding ¼ cup at a time, until mango mixture reaches the desired consistency.",
    "Chill mango mixture, covered, in refrigerator until ready to serve. For a colder mangonada, transfer mixture to the freezer until it reaches the consistency of a slushy.",
    "To serve, pour or scoop about ½ cup of mango mixture into each of four 16-ounce glasses. Add about ⅓ cup reserved mango to each glass, followed by 1½ to 2 tablespoons chamoy and a generous sprinkle of Tajín. Repeat with the remaining mango mixture, mango pieces, chamoy and a final sprinkling of Tajín on top. Garnish each glass with a tamarind candy straw, if using, and a spoon. Serve immediately."

    ];



    const recipeList = document.getElementById("recipe");
    recipe.forEach(iteam => {
        const li = document.createElement("li");
        li.textContent = iteam;
        recipeList.appendChild(li);
    });



    









