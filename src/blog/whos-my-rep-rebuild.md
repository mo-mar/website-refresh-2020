---
title: 5 things I learned rebuilding a project
date: March 20, 2021
---

One of the neatest things I've built so far is a super simple React app I called ["Who's My Rep?"](https://whos-my-rep.netlify.app/) This was the [fifth project](https://github.com/mo-mar/mohamedOmarProjectFive) I built during my time at HackerYou's web development bootcamp.

"Who's My Rep?" is super simple. The user enters their postal code and then sees all the politicians and officials whose job, officially, is to represent them. Cool. Great. Society: served. Democracy: saved. I built it, it worked, I submitted it, and I moved on.

This was in September 2019.  Since then, I've spent a decent amount of time learning (or at least trying to learn) how to be a better developer, but I wanted to see just how *much* I've learned since wrapping up that project.

So I decided to re-build "Who's My Rep?" with more modern tools or workflows like React Hooks and Styled Components.

I started this project on Nov. 9, 2020, and built it at an *extremely* casual pace. It's still not "done", and I don't think it ever will be — more on that later — but it's at a point where I feel like I can ~ reflect ~ on what I've learned.

### 1) I was more confident

Let's start with the good news. Rebuilding this project felt less terrifying.  Hurray!

Simply put, I felt more confident in the things I typed into my code editor. More than the first time I built the app, at least. Every line of code made sense, and any bugs or issues felt vastly less mystifying.

The first time around, *everything* was new to me: Interacting with the DOM, what the hell the DOM was, differentiating between vanilla JavaScript and React.js, what a class does, what "props" were, and so on. 

This was understandable, I was halfway through a 12-week web development bootcamp. You can only learn so much in that time.

During the rebuild, however, more than 18 months of work and learning made a massive difference. Not only did I have more experience with vanilla JS and React.js, but this time I had — get this — *opinions!*

I knew more about the benefits and drawbacks of class components vs. functional components, and had actual reasons for going with the latter. 

I knew when a file or function was getting too big or taking on more responsibility than it should. I knew when a piece of the UI deserved to be its own component or when it could have been sandwiched in another.

I knew more, and that made me want to do more.

### 2) More options led to more indecisiveness

When I knew next to nothing, I took anything that *did* work as a universal truth.  "Smooth scroll isn't working? This hieroglyphic function I copied from Stack Overflow fixed it. Next!*"*

As I learned more about different tools and technologies, decision-making became more complicated.

Take styling, for instance. V1 of "Who's My Rep" used SCSS because ... that's what we learned in the bootcamp. It was straightforward enough. Every component had its own stylesheet, and I had some variables and mixins that I imported into each stylesheet.

For V2, I used Styled Components, which solved some annoying scoping issues that I ran into with SCSS and meant that I didn't have to clutter up my JSX with "className."

But I *could* have used SCSS again, and used CSS modules to avoid any scoping problems. I could have also used Emotion, which is supposedly very similar to Styled Components. Or why not Tailwind?

I felt similar indecisiveness with my components.

Before I started writing anything, I would envision what maintaining or expanding this component would look like in a month or two or seven or — god forbid —  if another human being had to work on it.

Would leaving this element inside another component be a footgun? Is it overkill or overengineering to put it in its own component? Do I need some kind of container to handle more of the logic here?

Compare this internal back-and-forth with what I did back in 2019: shove everything into App.js, and only make other components if the file got too big. (That iteration had four components in total. Efficient!)

These are good questions, but they definitely prolonged the project, and over time that can demotivate me from keeping at it.

### 3) The project does not feel "done"

Allow me to illustrate just how naive I was in 2019. Here is the first day in the commit history for that project:

![First commit](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/34d5cc19-a13d-4bf5-8cf5-d5ec3bb7f692/firstcommit.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210320T222128Z&X-Amz-Expires=86400&X-Amz-Signature=4c6547d955fd148ea2db01aef7b5c9c5aef8b8ff3928e7739e34e2f3e5980a5a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22firstcommit.jpg%22)

Look at that hard worker. "Getting started with input functionality." "Need to get API call working." You did get it to work, past me. You totally did!

Now look at this fascinating update in the commit logs not even a week later.

![Final commit](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/83883c84-9818-4cac-9fa2-26900c22fd59/finalcommit.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210320T222143Z&X-Amz-Expires=86400&X-Amz-Signature=3204758334d6c9b735b86467f592542579be3b98c98831c586930cfaddd8e53c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22finalcommit.jpg%22)

**OH YEAH. FINAL COMMIT. WE'RE DONE HERE. SHIP IT.**

Beautiful. Bold. So, so wrong.

This *was* true, to be fair. For a few weeks, I did not update the project at all. It didn't mean there weren't a billion things that could be refactored, though.

But there was a feeling of finality to this project. It *worked*, and therefore it was done.

For V2, I never felt that. I can already see other ways the app can be improved or reworked. 

### **4) I think about naming and commenting a whole lot more**

For a project that was started and abandoned in about a week, I was actually surprised to see that I had some (slightly) useful comments in V1 of "Who's My Rep?" 

Some described what a function does, others explained why a function was *not* doing something.

But a lot of the comments would have been entirely unnecessary if I had used more descriptive variable and function names.

During the re-build, I immediately saw the value of higher quality naming and commenting. Now, instead of just describing what a function does, I add what it *returns.* I also use default parameters as a form of documentation. I choose longer, more verbose names over shorter ones 99% of the time.

### 5) It wasn't easier to build this time

This was the biggest surprise.

If anything, at times it even felt more complicated and daunting.

I had new problems, new concerns, and it definitely took me longer to build it this time around.

V1 had a tight deadline. My instructors were waiting for the project. I didn't have the luxury of taking my time to think about variable names or code hygiene.

With V2, having a lot more time turned almost every choice into an excruciating cost-benefit analysis.

I was surprised to learn that I actually prefer it this way. 

Yes, it means my projects will be harder to build and might take longer than I expect. Sure, it might make a project feel more frustrating and make dropping it more likely.

But out of all the things I learned with this rebuild, discovering that after a year and a half I was *thinking* more and *caring* more **about what I was coding was the biggest indicator of progress.

I was listening to David Guttman's "Junior to Senior" podcast recently, and a quote from [Sarah Drasner](https://twitter.com/sarah_edo) really stuck with me. She said that ["programming is ... ironically, rarely a Boolean."](https://podcasts.apple.com/us/podcast/ask-experts-w-scott-hanselman-wes-bos-sarah-drasner/id1524533455?i=1000513089359)

I saw everything as a Boolean the first time I built "Who's My Rep?". The second pass at it showed me that I don't think like that anymore.