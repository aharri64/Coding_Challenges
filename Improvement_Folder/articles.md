# [How to Get Better At Solving Coding Challenges](https://www.microverse.org/blog/how-to-get-better-at-solving-coding-challenges)

## Why learn coding challenges

-   It improves your problem-solving skills as it helps you understand the logic behind everyday tools, and assists you in coming up with interesting ways of solving problems.
-   It helps you to learn some design paradigms like [divide-and-conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm), [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming), and the [greedy method](https://en.wikipedia.org/wiki/Greedy_algorithm).
-   Oh! And you can also learn some really fun math skills.

## 1. Don't Rush

Many people jump right into coding without understanding the problem. This is the most important part

Once you understand the problem, try solving it on a piece of paper first.

Don't worry about syntax

## 2. Break the Solution

When solving a problem, break things into smaller steps. This helps in building simple code, analyzing what makes it work, and discovering other solutions.

Let’s look at an example - the “Repeated String” challenge;

The challenge is to find and print the number of occurrences of the letter “a” in the first n letters of an infinite string.

```
def repeatedString(s, n)
end
```

s is the string to be repeated.

n is the number of characters to consider.

If we have a string ‘aba’ and n is 6 then the substring to consider will be ‘abaaba’. The letter “a” appears 4 times.

This is quite easy to solve on paper but how can the computer solve it? Let’s break the solution into smaller steps:

1. What will be our output? An Integer.
2. How can we count the a’s in the string? Set a counter to 0 and iterate through the string and increase the counter if a is found.
3. How can we find the number of times the string can repeat itself in n characters; Divide n by the length of the string s.
4. How do we get the number of a’s in the repeated string? We simply multiply the number of a’s in the original string (step 2) and the number of times the string can repeat itself in n characters (step 3).
   Note: We set n as 6 because we have 3 characters in the string. This will ensure the string repeats itself without cutting off any character and makes it easier to solve. By doing this, we’re halfway to solving the challenge.
5. How do we find the number of characters that are cut off? We use the **modulo operation**.
6. How do we check if the remaining characters contain the letter a? We iterate through the remaining characters and add them to our counter if a is found.
7. We return the counter.

There are likely better ways of solving this, but it’s an example of how to break down solutions.

## Don't Look Up the Solution

It can be tempting to look up solutions to a challenge but this is bad practice. It’s bad practice as it’s easy to be constrained to thinking in a certain way after looking at the solution, so you have to resist - resist it like you do procrastination.

In all seriousness, looking up the solution should be your last resort. If you must look it up, get a solution that has everything explained in detail, this will ensure you understand the logic behind the solution and you’re not just memorizing the code. Then, once you understand the logic, come up with a different solution. Your solution might not be as effective as the one you saw but this process will improve your problem-solving skills.

## Efficiency

Examine your solution carefully; this is where you should pay attention to time and space complexity. The explanation for that is beyond the scope of this article but you can read more about it [here](https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/).

## Practice

Practice makes perfect... The more coding challenges you do, the better you become at them. Start with the easy ones and move your way up. Then come back to the challenges you’ve completed and try to solve them differently or solve similar challenges.

Remember, everything takes time, don’t beat yourself up if you can’t solve a challenge!
