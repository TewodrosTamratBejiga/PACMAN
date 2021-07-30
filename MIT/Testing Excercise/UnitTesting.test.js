const Greet= require('./Greet');

test('Greet and Name', () => {
expect(Greet.greeting('Teddy')).toBe('Hello Teddy')
});

test('Says Just Hello', () => {
    expect(Greet.defaultGreeting()).toBe()
});

test('UpperCase Greetings', () =>{
    expect(Greet.shouting(teddy)).toBe('HELLO TEDDY')});

test('Return Two Names', () => {
    expect(Greet.twoNames('Teddy', 'Solomon')).toBe('Hello, Teddy, Solomon')
});

test('Return Multiple Names', () => {

    expect(Greet.multipleNames([‘Alex’,’Arsene’,’Jose’,’Zidane’])).toBe('Hello Alex, Arsene, Jose, Zidane')
});

