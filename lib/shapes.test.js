const {Triangle, Square, Circle} = require('./Shapes');

describe('Triangle', () => {
    test('render() method returns SVG string with correct color', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    })
})

describe('Square', () => {
    test('render() method returns SVG string with correct color', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="75" y="35" width="150" height="150" fill="blue" />');
    })
})

describe('Circle', () => {
    test('render() method returns SVG string with correct color', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    })
})

