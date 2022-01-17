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

If I want to print “I am a responsible adult who likes eating vegetables” to the console — you gotta motivate yourself somehow — for every vegetable in my foods array, I know that I can reach for `forEach`.

```javascript
foods.forEach(food => console.log("I am a good boy for eating vegetables")
```

Lastly, If I want to check if some item in my array meets a certain condition, I use `some`.

```jsx
foods.some(food => food.type === vegetable)
```

You get the picture.

But not all array methods are created equal.

Case in point: `reduce()`, my arch nemesis. When I first learned about this method in bootcamp, it was the first time I genuinely felt like JavaScript might not be for me.

`reduce()` didn't have any immediate use cases, and so I was less motivated to learn how it worked.

In fact, I’ve yet to come across a real life scenario that begged for this method, so I've never spent though I’m sure there _are_ scenarios where it would be the perfect choice. I just haven’t gotten to them.

So now, in hopes of conquering my demons, I am going to (superficially) understand `reduce()` once and for all.

Let’s start with the first paragraph describing `reduce()` on MDN:

> The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

....

Like the array methods mentioned above, `reduce()` invokes a callback method on each element in an array.

But in this case, the callback function gets a bit more fancy with its arguments.

The reducer expects two positional arguments: an “accumulator” and the current value. It’s the former that gives the method its special sauce, which is:

> passing in the return value from the calculation on the preceding element

As Jeff Delaney describes it in [this video from Fireship](https://www.youtube.com/watch?v=tVCYa_bnITg&ab_channel=Fireship) — which is an excellent learning resource, by the way — this makes `reduce()` a “loop with a memory.”

Every run of the loop ends with a single returned value. This is the “accumulator,” and it gets passed into the callback function for the next run of the loop.

A great (and widespread) example of reduce’s functionality is to _add_ elements in an array. (_Reduce_ to _add?_ Yes, I’m confused, too.)

Say we have an array of vegetables:

```jsx
const veggies = ['lettuce', 'cabbage', 'potato', 'broccoli']
```

And then, say, we wanted to combine the names of these vegetables to create one super vegetable — one that, hypothetically, I could eat once a year to absolve myself of having to eat more vegetables.

We can _reduce_ all the vegetables into one value using `reduce()`. To do that, we need to pass in the aforementioned reducer function, and an initial (optional) value.

> 💡 This initial value slightly alters the behaviour of reduce. If we pass it in, it becomes the first “accumulator” in the very first run of the loop. The first item in our array will become the currentValue.
> If we omit it, the “accumulator” is the first item in our array, and the currentValue is the 2nd item in the array.

Let’s first write the reducer function that just slaps together two strings.

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

(OK, now I see how silly this example is.)

###Run 2:

“lettucecabbage” has become the accumulator. The current vegetable is “potato”.

`vegetableReducer` is now run with the following arguments:

```jsx
vegetableReducer('lettucecabbage', 'potato')
```

According to the laws of this twisted form of vegetable science we’ve just invented, the returned value from this run of the loop is “lettucecabbagepotato.”

We’ve now reached the last run of the loop. Our final value is “broccoli.”

For the last time, `vegetableReducer` gets called with these arguments:

```jsx
vegetableReducer('lettucecabbagepotato', 'broccoli')
```

And the end result is our glorious, vitamin-loaded frankenveggie, `lettucecabbagepotatobroccoli`.

Bon appétit.

Now that I’ve gone through this mental exercise and written about it, I realize two very important things:

1. Reduce’s name makes a lot more sense when I think of it as a giant pot. You throw in a bunch of stuff and it reduces them into one value. The pot, in this elaborate example, is the reducer function.

2. I could go for some veggies right now
