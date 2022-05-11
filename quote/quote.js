const quotes = [
  {
    quote: `Don't worry if something doesn't work. If everything worked, you would be fired.`,
    author: 'Mosher’s Law of Software Engineering'
  },
  {
    quote: 'Programming today is a race of software developers striving to write programs with more and better idiot resistance, and a universe that is trying to create more selective idiots. As long as the universe wins.',
    author: 'Rick Cook'
  },
  {
    quote: 'Measuring a programmer is productivity by counting lines of code is like judging an airplane is build by its weight.',
    author: 'Bill Gates'
  },
  {
    quote: 'Most programs today are like Egyptian pyramids with a million bricks stacked on top of each other and without structural integrity—they are simply built by brute force and thousands of slaves.',
    author: 'Alan Kay'
  },
  {
    quote: 'Most good programmers do their jobs not because they expect to be paid or recognized, but because they enjoy programming.',
    author: 'Linus Torvalds'
  },
  {
    quote: 'Programs must be written for the people who will read them, and the machines that will execute these programs are secondary.',
    author: 'Harold Abelson'
  },
  {
    quote: 'People who think they hate computers actually hate bad programmers.',
    author: 'Larry Niven'
  },
  {
    quote: 'If you give a person a program, you will keep him busy for one day. If you teach a person to program, you will keep him busy for life.',
    author: 'Waseem Latif'
  },
  {
    quote: `A language that doesn't change the way you think about programming is not worth learning.`,
    author: 'Alan J. Perlis'
  },
  {
    quote: 'Sometimes the best programs are written on paper. Programming them is a secondary thing.',
    author: 'Max Kanat-Alexander'
  },
  {
    quote: 'Programming is about turning something big and impossible into something small and real.',
    author: 'Jazzwant'
  },
  {
    quote: 'Programmers are not mathematicians, as much as we would like them to be.',
    author: 'Richard P. Gabriel'
  },
  {
    quote: 'Programming is hard. The basic rules on which everything is built are very simple, but as the program develops, it itself begins to introduce its own rules and laws. Thus, the programmer builds a labyrinth in which he himself can get lost.',
    author: 'Marijn Haverbeke'
  },
  {
    quote: 'Working? Do not touch.',
    author: 'Любой программист'
  },
  {
    quote: 'Java is C++ with all guns, knives and clubs removed.',
    author: 'James Gosling'
  },
  {
    quote: `The bad name of the method is akin to the election promises of politicians. It seems to be talking about something, but if you think about it, it’s not clear what it is.`,
    author: 'C. MacConnell'
  },
  {
    quote: `A program that doesn't work usually does less harm than a program that doesn't work well.`,
    author: 'Dave Thomas'
  },
  {
    quote: 'How much easier it would be to write programs if it were not for customers.',
    author: 'R. S. Martin'
  },
  {
    quote: 'Young professionals don’t know how to work, while experienced professionals know not to work.',
    author: 'Alexander Golov'
  },
  {
    quote: 'I think the art of programming is a little more complicated than other human skills. Programming makes you better in the same way that learning a foreign language, math, or reading books helps you develop.',
    author: 'Jack Dorsey'
  },
  {
    quote: 'Just as painting a picture is an art for the soul, so writing a program is an art for the mind.',
    author: 'Volnik'
  },
  {
    quote: 'Testing does not detect errors such as creating the wrong application.',
    author: 'Steve McConnell'
  },
  {
    quote: `Some people, while solving a problem, think: "Why don't I use regular expressions?". After that, they already have two problems ...`,
    author: 'Jamie Zawinski'
  },
  {
    quote: 'Small programs accidentally compile and run correctly the first time they try. But if this happens to any non-trivial program, then it is very, very suspicious.',
    author: 'Bjarne Stroustrup'
  },
  {
    quote: 'The main problem of programmers is that their mistakes cannot be predicted.',
    author: 'Seymour Cray'
  },
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function quoteGenerateRandom() {
  let idx = getRandomInt(0, quotes.length + 1)
  if (idx < 0) return;
  let quote = quotes[idx]
  return quote
}

module.exports = quoteGenerateRandom