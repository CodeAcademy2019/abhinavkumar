const timeOut = require('./warmup');

jest.useFakeTimers();

timeOut();

test ('Testing if function prints after 300ms (FAILED TEST)', () => {
    
    expect(setTimeout).not.toHaveBeenCalledTimes(2); //failed test case
});
  
test ('Testing if function prints after 300ms and setTimeout is called only once!' , () =>{
    
    expect(setTimeout).toHaveBeenCalledTimes(1); 
});

