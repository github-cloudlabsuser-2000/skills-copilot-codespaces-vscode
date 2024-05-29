/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleChange} 
      />
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;

// take a sentence as input
  // reverse the input sentence
  // the start of the sentence must start with a capital
  // for javascript
    // split the sentence into words
    // reverse the array of words
    // join the array of words into a string
    // capitalize the first letter of the string
    const reverseSentence = (sentence) => {
        const reversedWords = sentence.split(' ').reverse();
        const capitalizedSentence = reversedWords.join(' ');
        return capitalizedSentence.charAt(0).toUpperCase() + capitalizedSentence.slice(1);
    };

    const inputSentence = 'Hello, how are you?';
    const reversedAndCapitalizedSentence = reverseSentence(inputSentence);
    console.log(reversedAndCapitalizedSentence);

    const data = [
        [
          { name: 'John', age: 25 },
          { name: 'Jane', age: 30 }
        ],
        [
          { name: 'Bob', age: 40 }
        ]
      ];

      let names = [];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    names.push(data[i][j].name);
  }
}

console.log(names); // Outputs: ['John', 'Jane', 'Bob']

// As an illustration, pull names out of the data array
// Create an empty array to store the names
// Loop through the outer array
    // Loop through the inner array
        // Push the name of each object into the names array    
// Output the names array

// Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']
  
  let names2 = data.map(innerArray => 
  innerArray.map(obj => obj.name2)
).flat();

console.log(names); // Outputs: ['John', 'Jane', 'Bob']