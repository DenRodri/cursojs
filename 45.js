const string = 'my name is 99999';
const regex = /name is ([a-z]+)/;
if(match) {
    const name = match[1];
    console.log(name);
} else{
    console.log('no match');
}