Let's try and build a Tinder inspired SPA with React.

[Prototype](https://codepen.io/krisztiiin/pen/zLePMb) of sorts...Only I am making a primarily desktop app. Why you ask? Well, I have not the first clue about React Native. To be fair, I don't have much clue about React either and yet this is a React app. So...stay tuned?

![The not so proto proto](https://krisztin.github.io/assets/img/recat.png)

# Progress

## Day 1-2

I drew up the completed project with required components and functionalities needed. The optimist in me said just go for it. The realist decided to draw up an MVP version with a couple of components taken out and some functions dumbed down or excluded.

I think I've ended up with a quite doable little few day long project. Until...

### Routing

I thought I got React Router...turns out, not so much.

#### The problem

From the opening page you should be taken to a random cat when clicking 'Start'. I got a little perplexed. Nothing I've tried with <Route to> etc. worked, and I kept breaking the <Link>.

I have an inkling I will have to get intimate with `history.push`

#### The solution

[Read the Docs](https://reacttraining.com/react-router/web/example/basic) and learn the ins and outs of React Router. Or at least find the exact solution I need.