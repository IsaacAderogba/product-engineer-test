<div align="center">
  <h1>Plural AI - Product Engineering</h1>
  <br />
  <a href="https://www.plural.ai">
    <img
      height="80"
      width="80"
      alt="Plural AI"
      src="https://raw.githubusercontent.com/pluralai/open-plural/master/assets/pluralai-logo.png"
    />
  </a>
  <br />
  <br />
</div>

<hr />

# Talking in codes

When passing coded messages around the Plural offices, we use our very special in-house cipher. To make life easier for us, we’d like you to build a decoder for these messages.

## What is the code?

A substitution cipher is an algorithm that maps a letter onto something else — a letter, number or symbol. For example, you may have seen a numeric substitution cipher, where `A=1,B=2,...,Y=25,Z=26`. In this example, `HELLO` would become `8 5 12 12 15`.

Our code is very similar to the numeric substitution cipher, except that the numbers given can be larger than 26 (the number of letters in the alphabet). **If a number is 27 or larger, it needs to be _divided_ by 27 until it is 26 or less**. To give an example, `8 5 12 12 15` is still a valid encoding of `HELLO`, but so is `216 3645 12 324 405` (because it is `8*27` `5*27*27` `12` `12*27` `15*27`).

**If a number is not an integer after being divided by 27, it should be presented as a space.** For example, the message `FOO BAR` can be encoded as `6 15 15 28 2 1 18` (because `28/27` is not an integer, it is shown as a space).

## The Decoder

We would like to see a single-page web application that decodes the code into its original message.

- The user interface should include a text box (for inputting the code) and a display for the original message.
- The code is supplied as numbers separated by spaces. Your tool should handle errors gracefully.
- We don't want to give away the secret decoding algorithm, so the decoding process should be done in the backend.
- The user's state should be saved. (When I refresh the page, I should see the same code.)

You are free to use any tools and frameworks you want to complete this exercise, but remember that we will be running your solution on our machines.

Create a private Git repository or zipped folder to send your work to us.

Here are some sample messages we'd like decoding:

```
8 5 324 8748 295245 730 23 405 13122 12 108
16 12 567 486 1 12 64 27 243
4374 243 14 20 5 59049 8
23 135 64 12 9 11 3645 64 18 19683 13 5 14
```

Please include these tests, as a minimum, in your solution.

## What We’ll Do

When we get your solution, we will look at your `README` for instructions on how to set up, run and test your solution. We'll be assessing your solution on how well the code, error handling, tests, and documentation have been written. Have fun!
