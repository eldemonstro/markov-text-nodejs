# Markov Text - NodeJS

This project is aimed to make generate text via Markov Chains, it takes the
input (`alice_oz.txt`) and trains with it to generate text based on it, you
can read more about the Markov Chain on [Rosseta Code](https://rosettacode.org/wiki/Markov_chain_text_generator)
the algorithm I used is based on what is there.

You also can place other inputs to see what is the results, It just need to be a
text file, the big the better.

### Requirements

* Node JS (the latest recommended one will work just fine)

### How to run

`node index.js` - Will generate a 100 words paragraph

Inside of `index.js` you can change `generatingSize` to change the size of the
paragraph

You can also change the text file name inside there.
