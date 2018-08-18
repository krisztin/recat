Let's try and build a Tinder inspired SPA with React.

[Prototype](https://codepen.io/krisztiiin/pen/zLePMb) of sorts...Only I am making a primarily desktop app. Why you ask? Well, I have not the first clue about React Native. To be fair, I don't have much clue about React either and yet this is a React app. So...stay tuned?

![The not so proto proto](https://krisztin.github.io/assets/img/recat.png)

# Progress

## Day 1-2

I drew up the completed project with required components and functionalities needed. The optimist in me said just go for it. The realist decided to draw up an MVP version with a couple of components taken out and some functions dumbed down or excluded.

Looked like it was quite doable in a few days. Until...

### Routing

I thought I got React Router...turns out, not so much.

#### The problem

From the opening page you should be taken to a random cat when clicking 'Start'. I got a little perplexed. Nothing I've tried with <Route to> etc. worked, and I kept breaking the <Link>. To be fair, it was very late at night and my brain was having one of those 'toddler tantrum' times when it refuses to put in any effort until you treat it with a little YouTube but that was not going to happen.

Now, on Day 2, with fresh eyes I have an inkling the answer lies with `history.push`

#### The solution

[Read the Docs](https://reacttraining.com/react-router/web/example/basic) and learn the ins and outs of React Router. Or at least find the exact solution I need.