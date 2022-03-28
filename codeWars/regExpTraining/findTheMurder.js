// An important person was murdered, he said the name of the murderer before he died, 
// but because the sound was so low it was difficult to identify.

// Given two parameters:
// said, a string, what the person said before death;
// said starts with the first letter of the name, each "~" represents an uncertain letter,
// the length of the said does not mean the length of the name, because he might have died 
// before he could say the full name of the murderer.

// suspects, a string array, name list of all suspects.
// Please refer to said, find the murderer from the suspects.
// Result will be a string. If not found, should return "", 
// if more than one suspect is found, return the name of all, separated by ','.

// Example1:

// said='b~~~~~~~~~~~~~~l'
// it means the murderer's name first char is 'b',last char is 'l'
// (Because it is spoken, so please ignore the case)

// suspects=['Bernard Deltheil','Peter Gone','Peter Reeves','Roland Scorsini']
// Let's us search in suspects, Wow~~, 'Bernard Deltheil' maybe is the murderer.

// So, return a string: 'Bernard Deltheil'

// Example2:
// said='p~t~r'
// it means the murderer's name first char is 'p',3rd char is 't',5th char is 'r'

// suspects=['Bernard Deltheil','R Steell','Peter Gone','Peter Reeves','Roland Scorsini']
// Wow~, 'Peter Gone' and 'Peter Reeves' maybe is the murderer.

// So, return a string: 'Peter Gone,Peter Reeves'

// Example3:
// said='a~b~c~~d'

// suspects=['Bernard Deltheil','R Steell','Peter Gone','Peter Reeves','Roland Scorsini']
// It seems the murderer's name is not appear in the suspects.

// So, return a empty string: ''




/*solution*/
function sc(said,suspects){
    return suspects.filter(man=> {
        return man.match(new RegExp(`^${said.replace(/~/g,'.')}`,'i'))  
    }).join(',')
}

/*short solution*/
function sc(s, p){return p.filter(m=> m.match(new RegExp(`^${s.replace(/~/g,'.')}`,'i'))).join(',')}




let sus = ['Bernard Deltheil', 'R Steell', 'Peter Gone', 'Peter Reeves', 'Roland Scorsini']

console.log(sc("b~~~~~~~~~~~~~~l", sus))
console.log(sc('p~t~r', sus))
console.log(sc('PE~er~gOnE', sus))
console.log(sc('a~b~c~~d', sus))




/*first try*/
/*
function sc(said, suspects) {
    let saidLetters = Array.from(said.matchAll(/[a-z]/gi, ''));

    return suspects.filter((man) => {
        let matches = 0;
        for (let saidLetter of saidLetters) {
            let suspLetters = Array.from(man.matchAll(new RegExp(`${saidLetter}`, 'gi')));
            for (let suspLetter of suspLetters) {
                if (saidLetter.index === suspLetter.index) {
                    ++matches;
                }
            }
        }
        return (matches === saidLetters.length) ? true : false
    }).join(',')
}
*/



// Second try
/*
function sc(said, suspects) {
    let tildas = said.match(/(~+)/g)||[];
    tildas.forEach((tilda) => {
        said=said.replace(new RegExp(`${tilda}`),`.{${tilda.length}}`)
    });
    said = new RegExp(`^${said}`,'i')
    return suspects.filter((man) => {
        return said.test(man)
    }).join(',')
}
*/

//Short second try
/*
function sc(s, p) {
    (s.match(/(~+)/g)||[]).forEach((t) => {
        s=s.replace(new RegExp(`${t}`),`.{${t.length}}`)
    });
    return p.filter((m) => {
        return (new RegExp(`^${s}`,'i')).test(m)
    }).join(',')
}
*/

//Third try
/*
function sc(said, suspects) {
    return suspects.filter(suspect => {
        let f = true;
        suspect = suspect.toLowerCase();
        said.toLowerCase().split('').forEach((letter, index,array) => {
            if (suspect[index] !== array[index] && letter !== '~')
                f = false
        });
        return f;
    }).join(',');
}
*/

//Third short try
/*
function sc(s, p) {
    return p.filter(m=> {
        return s.toLowerCase().split('').reduce((r,l,i) => {
             return (m.toLowerCase()[i] != l && l!= '~') ? false : r
        },true);
    }).join(',');
}
*/








// function sc(said, suspects) {
//     let saidLetters = said.match(/[a-z]/gi, '')||[];
//   console.log(saidLetters);

//     return suspects.filter((man) => {
//         let matches = 0;
//         for (let saidLetter of saidLetters) {
//             let suspLetters = man.match(new RegExp(`${saidLetter}`, 'gi'))||[];
//             for (let suspLetter of suspLetters) {
//                 if (saidLetter.index === suspLetter.index) {
//                     ++matches;
//                 }
//             }
//         }
//         return (matches === saidLetters.length) ? true : false
//     }).join(',')
// }

