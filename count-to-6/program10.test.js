const prg10 = require('./program10');

test ('test 1 for program10 for < and &', () => {
    expect(prg10(['User <b> ','says','!'],'<Abhinav ',' & is good')).toBe('User <b> &lt;Abhinav says &amp; is good!');
});

test ('test 2 for program10 for >', () => {
    expect(prg10(['User <b> ','says','!'],'>Abhinav ',' is good')).toBe('User <b> &gt;Abhinav says is good!');
});
