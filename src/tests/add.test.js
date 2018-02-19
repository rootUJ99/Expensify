const add=(a,b)=>a+b;
const generateGreeting = (name ='Anonymous')=>`Hello ${name}!`
test('should add two numbers',()=>{
    const result=add(3,4);
    if(result!==7){
        //throw new Error(`You have added ${result}, expected 7`);
        expect(result).toBe(7);
    }
});

test('check the name',()=>{
    const result=generateGreeting('Ujwal');
    expect(result).toBe('Hello Ujwal!');
})

test('check the name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
})