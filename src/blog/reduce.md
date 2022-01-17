---
title: Time to reduce my ignorance
date: Jan 17, 2022
---

When I first started learning about JavaScript array methods like `filter` and `forEach`, their names did a lot of the heavy lifting in helping me understand their utility.

`filter` kicks out or keeps specific items in an array, depending on whether they meet a certain condition.

`forEach` does something, like calling a function, for _each_ item in the array.

`some` checks if there is _some_ (i.e. at least one) item in the array that meets a certain condition.

If I have an array of foods, and I want to filter for vegetables, the `filter` method's name practically _tells_ me to use it.

```javascript
const foods = [
  {
    name: 'apple',
    type: 'fruit',
  },
  {
    name: 'spinach',
    type: 'vegetable',
  },
]
```

```javascript
foods.filter(food => food.type === vegetable)
```

If I want to print “I am a responsible adult who definitely eats vegetables” to the console — what? you don't do this? — for every vegetable in my foods array, I know that I can reach for `forEach`.

```javascript
foods.forEach(food => console.log("I am a good boy for eating vegetables")
```

Lastly, If I want to check if some item in my array meets a certain condition, I use `some`.

```jsx
foods.some(food => food.type === vegetable)
```

You get the picture.

But not all array methods are created equal.

Case in point: `reduce()`, my archnemesis.

I distinctly remember learning about `reduce()` in bootcamp back in 2019. It felt like someone had just cranked up a difficulty slider.

I found it less straightforward than its array method siblings, and it also didn't have any immediate use cases, so I was less motivated to learn how it worked.

Even my instructor said something along the lines of "this one is confusing, don't expect to use it much." (He was right on both counts.)

But it's been bugging me ever since. So now, in hopes of conquering this JavaScript ghost of my past, I am going to (superficially) understand `reduce()` once and for all.

Let’s start with the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" noopener target="_blank">`reduce()` docs on MDN:</a>

> The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

<em>\* has flashbacks to 2019 \*</em>

Like the array methods mentioned above, `reduce()` invokes a callback method on each element in an array.

But in this case, the callback function gets a bit more fancy with its arguments.

The reducer expects two positional arguments: an “accumulator” and the current value. It’s the former that gives the method its special sauce, which is:

> passing in the return value from the calculation on the preceding element

As Jeff Delaney describes it in <a href="https://www.youtube.com/watch?v=tVCYa_bnITg&ab_channel=Fireship" noopener target="_blank">this video from Fireship</a> — which is an excellent learning resource, by the way — this makes `reduce()` a “loop with a memory.”

Every run of the loop ends with a single returned value. This is the “accumulator,” and it gets passed into the callback function for the next run of the loop.

A great (and widespread) example of reduce’s functionality is to _add_ elements in an array. (_Reducing_ to _add_ hurts my head.)

Say we have an array of vegetables:

```jsx
const veggies = ['lettuce', 'cabbage', 'potato', 'broccoli']
```

And then, say, we wanted to combine the names of these vegetables to create one super vegetable — one that, hypothetically, I could eat once a year to absolve myself of having to eat more vegetables.

We can _reduce_ all the vegetables into one value using `reduce()`. To do that, we need to pass in the aforementioned reducer function, and an initial (optional) value.

> 💡 This initial value slightly alters the behaviour of reduce. If we pass it in, it becomes the first “accumulator” in the very first run of the loop while the first item in our array becomes the currentValue.
> If we omit it, the “accumulator” is the first item in our array, while the currentValue is the 2nd item in the array.

Let’s first write a function that just slaps two strings together.

```jsx
const vegetableReducer = (previousVegetable, currentVegetable) =>
  previousVegetable + currentVegetable
```

Now, we can pass this reducer function into the `reduce()` array method.

```jsx
const veggies = ['lettuce', 'cabbage', 'potato', 'broccoli']
veggies.reduce(vegetableReducer)
```

Let’s break down what each run of the loop will look like.

###Run 1:

Vegetable reducer gets called. By omitting the initial value when we called `reduce()`, `previousVegetable` is set to the first item in our array — “lettuce” — while `currentVegetable` is set to the 2nd item, “cabbage.”

```jsx
vegetableReducer('lettuce', 'cabbage')
```

Here’s where the magic starts: The first run of the loop returns `previousVegetable` + `currentVegetable`, which is “lettucecabbage.”

(OK, I just realized how ridiculous this example is. Moving on.)

###Run 2:

“lettucecabbage” has become the accumulator. The current vegetable is “potato”. That is an incredible sentence, no matter how I read it.

`vegetableReducer` is now run with the following arguments:

```jsx
vegetableReducer('lettucecabbage', 'potato')
```

According to this twisted vegetable science we’ve just invented, the returned value from this run of the loop is “lettucecabbagepotato.”

We’ve now reached the last run of the loop. Our final value is “broccoli.”

For the last time, `vegetableReducer` gets called with these arguments:

```jsx
vegetableReducer('lettucecabbagepotato', 'broccoli')
```

And the end result is our glorious frankenveggie, `lettucecabbagepotatobroccoli`.

Bon appétit.

Now that I’ve gone through this mental exercise and written about it, I realize two very important things:

1. Reduce’s name makes a lot more sense when I think of it in food terms. It's like a giant pot. You throw in a bunch of stuff, and it reduces them into one value.

2. This very well could be the first time the word `lettucecabbagepotatobroccoli` is seen on the internet.

I now understand what `reduce()` does, and we've made internet culinary history.
