### Goals
- Curriculum overview (using these [slides](https://docs.google.com/presentation/d/1m3R_aN4S5YoCBmXRbjaZQGatygWyZXYLcN-fkcP_HWA)) (~15 minutes)
- Writing code incrementally
- Problem solving tips
- Basic git workflow (init -> add -> commit -> push)

### Upfront
- Students should not be trying to code-along during lecture
- This is a discussion meant to facilitate a deeper learning of the coding concepts
- Lecturers will make mistakes

### Curriculum Outline
- Week 1 && 2: Fundamentals (FOCAL)
- Week 3: Web Servers
- Week 4: JavaScript in the Browser
- Week 5: Persistent Data
- Week 6: Mid-terms
- Week 7 && 8: Front-end Framework
- Week 9 && 10: Legacy Codebase
- Week 11 && 12: Finals

- Fundamental Fridays (programming tests/comp sci/research & reflect)
- Technical Interviews x 3 (W2, W4, W9)
- Career Services

### Compass
* Not an instruction manual
* It's a To Do list
* Instruction is sought elsewhere

### Problem:
> Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. If any argument is not a whole number, skip it. Do not support negative numbers though.

### Logic Syntax Data (LSD)
- Logic: have I told the computer exactly what to do?
- Syntax: am I missing a curly brace?
- Data: do I have the data I think I do in the format I expect?

### Keep in Mind
- Doing things with intention (you are not a passenger)
- Refactor the solution into functions as you go
- Write in small steps (incrementally)
- Proper indentation of code
- Avoid copy/paste
- Errors are your friend
- Google => StackOverflow => Documentation (MDN)
- Use the Node REPL to play with the code

### Python Tutor/JS Tutor

### Terrible Code

```js
const result = process
  .argv
  .slice(2)
  .filter(e => !isNaN(e))
  .map(Number)
  .filter(Number.isInteger)
  .filter(e => e > 0)
  .reduce((a, c) => a + c, 0);
  
console.log('result:', result);
```
