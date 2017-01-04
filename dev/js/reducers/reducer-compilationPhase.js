/*
 * The comments reducer will always return an array of comments no matter what
 * You need to return something, so if there are no comments then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            comment: "// COMPILER: 'Hey, SCOPE of bar I have a new FUNCTION DECLARATION to declare. His IDENTIFIER is foo.' ",
            seconds: 10
        },
        {
            id: 2,
            comment: "// Now we are in a function, a new unit of SCOPE. let's recursively descend into the function bar and compile it",
            seconds: 10
        },
        {
            id: 3,
            comment: "// COMPILER: 'Hey, SCOPE of bar I have a new DECLARATION to DECLARE. His IDENTIFIER is foo' ",
            seconds: 10
        },
        {
            id: 4,
            comment: "// COMPILER: 'Go ahead and add him to your DECLARATION list for SCOPE of bar' ",
            seconds: 5
        },
        {
            id: 5,
            comment: "// Now we are in a function, a new unit of SCOPE. let's recursively descend into the function bar and compile it",
            seconds: 10
        },
        {
            id: 6,
            comment: "// Now we are in a function, a new unit of SCOPE. let's recursively descend into the function bar and compile it",
            seconds: 5
        },
        {
            id: 7,
            comment: "// Now we are in a function, a new unit of SCOPE. let's recursively descend into the function bar and compile it",
            seconds: 10
        },
        {
            id: 8,
            comment: "// Now we are in a function, a new unit of SCOPE. let's recursively descend into the function bar and compile it",
        },
        {
            id: 9,
            compiler: " ",
            comment: "// Now we are in a function, a new unit of SCOPE. let's recursively descend into the function bar and compile it",
            scopeManager: " "
        }
    ]
}
