const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./lib/Shapes')

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter an acronym no longer than 3 characters:',
        validate: input => {
            if (input.length < 3) {
                return 'Please enter an acronym that is no longer than 3 characters.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the text color for your acronym:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape to be?',
    },
    {     
        type: 'list',
        name: 'shape',
        message: 'Choose the shape you want to use:',
        choices: ['circle', 'triangle', 'square'],
    },

]).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;

  let shapeObj;
  switch (shape) {
    case 'circle':
      shapeObj = new Circle(shapeColor);
      break;
    case 'square':
      shapeObj = new Square(shapeColor);
      break;
    case 'triangle':
      shapeObj = new Triangle(shapeColor);
      break;
    default:
      throw new Error('Invalid shape');
  }

  const svgCode = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeObj.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill='${textColor}'>${text}</text>
      </svg>
  `;

  fs.writeFile('./output/logo.svg', svgCode, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});

