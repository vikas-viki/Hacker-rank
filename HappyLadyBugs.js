function happyLadybugs(a) {
    let hash = {},
        underScore = false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === '_') {
            underScore = true;
            continue;
        }

        if (!hash[a[i]]) {
            hash[a[i]] = 0;
        }

        hash[a[i]]++;
    }

    if (!underScore) {
        for (let i = 1; i < a.length - 1; i++) {
            if (a[i - 1] !== a[i] && a[i] !== a[i + 1]) {
                return 'NO';
            }
        }
    }


    for (const [key, value] of Object.entries(hash)) {
        if (value === 1) {
            return 'NO';
        }
    }

    return 'YES';
}
/* 
Create two variables: hash and underScore. hash is an object to keep track of the count of each color of ladybugs, and underScore is a flag to check if there is an underscore in the string.

Loop through the string a:
a. If the current character is an underscore, set the underScore flag to true and continue to the next iteration.
b. If the current character is not in hash, add it with a count of 1.
c. If the current character is already in hash, increment the count.

If there is no underscore, loop through the string a from index 1 to index a.length - 2:
a. If the current character is not equal to its neighbors, return 'NO'.

Loop through the hash object:
a. If a color has a count of 1, return 'NO'.

Return 'YES' if all checks pass.
*/