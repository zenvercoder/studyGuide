// COMPILER having a conversation with SCOPE portion of the engine (the SCOPE MANAGER)
// In the first pass, the COMPILER is going to go through and look for all of the VARIABLE DECLARATIONs it can find (including FUNCTION DECLARATIONs)

// COMPILATION PHASE (first pass)
// COMPILER : 'Hey SCOPE MANAGER! I see a VARIABLE DECLARATION for an IDENTIFIER called foo. Which current SCOPE am I in?'
// SCOPE MANAGER: 'You're in the GLOBAL SCOPE'
// COMPILER: 'I want to REGISTER the foo IDENTIFIER into my CURRENT SCOPE which happens to be the GLOBAL SCOPE'
var foo = "bar";

// 'Where's my next DECLARATION?' 'My next DECLARATION is a FUNCTION DECLARATION'
// COMPILER: 'Hey, SCOPE of bar I have a new FUNCTION DECLARATION to declare. His IDENTIFIER is foo.'
// Now let's recursively descend into the function bar and compile it
function bar (){
    // Now we are in a new unit of SCOPE.
    // COMPILER: 'Hey, SCOPE of bar I have a new DECLARATION to DECLARE. His IDENTIFIER is foo.'
    // COMPILER: 'Go ahead and add him to your DECLARATION list for SCOPE of bar'
    // COPE MANAGER: 'foo added to SCOPE of bar'
    // COMPILER: 'Do I have any more DECLARATIONS in my CURRENT SCOPE of bar?'
    // SCOPE MANAGER: 'No'
    // we are done with compiling the function bar.
    // Popping ourselves back out to the GLOBAL scope
    var foo = "baz";
}

// 'Where's my next DECLARATION?' 'My next DECLARATION is a function called baz'
// COMPILER: 'Hey GLOBAL scope I have a DECLARATION for a new IDENTIFIER called baz. It happens to be a FUNCTION DECLARATION. Go ahead and add him to your DECLARATION list for the GLOBAL SCOPE.
// Now let's recursively descend into the function baz and compile it.'
function baz(foo){
// 'Theres an IMPLICIT DECLARATION b/c we have a named parameter called foo which will be treated like a LOCAL VARIABLE.' (kind of like saying var foo)
// COMPILER: 'Which scope are we in?'
// SCOPE MANAGER: 'baz.'
// COMPILER: 'Hey SCOPE of baz. I have a DECLARATION for a new VARIABLE. He's called foo. I need you to REGISTER him there'
// COMPILER: 'Do we see any more DECLARATIONs?' No. 'Ok great, we're done compiling the function baz'
    foo = "bam";
    bam = "yay";
}
// We are done compiling our code for the purposes of SCOPE resolution




// Same code, second pass (a couple of microseconds later)
// EXECUTION PHASE
// 'Hey GLOBAL scope. I have an LHS REFERENCE for a VARIABLE called foo. Have you ever heard of him?'
// SCOPE MANAGER: 'Yes, I've heard of him because you just declared him a couple of microseconds ago.'
var foo = "bar";  // there's no more var anymore. we handled that in COMPILATION PHASE.


function bar (){
// we are inside scope of bar now.
// COMPILER: 'Hey SCOPE of bar, I have an LHS REFERENCE for a VARIABLE called foo. Ever heard of him?'
// SCOPE MANAGER: 'It's in my SCOPE of bar definition declared him a couple of microseconds ago during COMPILATION.'
// It will hand us back a REFERENCE, we go the right hand side, there is an immediate value
    var foo = "baz";
    // so we can execute the ASSIGNMENT operation foo = 'baz'
    // We are done with the function bar. Popping ourselves back out to the GLOBAL scope
}

// COMPILER: 'Hey scope of baz. I have an LHS REFERENCE for a VARIABLE called foo. Ever heard of him?'
// SCOPE MANAGER: 'It's in my definition b/c I have a parameter named after that. I have a local VARIABLE called foo that I can REFERENCE.' *hands back a REFERENCE to that so we can ASSIGN a value to it. We then ASSIGN bam into the foo
// Trying to execute bam = 'yay'
// COMPILER: 'Hey scope of baz. I have an LHS REFERENCE for a VARIABLE called 'bam'. Ever heard of him?'
// SCOPE MANAGER: 'Never heard of him. I cannot fulfill that REFERENCE for bam b/c it's not in local scope. Let's go out one level of scope into GLOBAL SCOPE.'
// COMPILER: 'Hey GLOBAL SCOPE. I have an LHS REFERENCE for a VARIABLE called 'bam'. Ever heard of him?'
// SCOPE MANAGER: (unfortunate response b/c we would expect GLOBAL SCOPE to say 'No, never heard of him') Because we are in non-strict mode and we have an LHS REFERENCE and we got to the GLOBAL SCOPE, the SCOPE MANAGER will go ahead and create a bam for us in the GLOBAL SCOPE... not the local scope, but the GLOBAL SCOPE
//  'Yes, I just created him for you because we have an LHS REFERENCE and we got to the GLOBAL SCOPE and we are in non-strict mode'
// Now we have a leaked a global VARIABLE. We tried to ASSIGN a VARIABLE that had not been DECLARED
function baz(foo){
    foo = "bam";
    bam = "yay";
}














// IMPORTANT TERMS/PHRASES TO REMEMBER:
// SCOPE: Where to look for things (We always ask local SCOPE before we go elsewhere)
// What are we looking for? The variables that we reference
// Who is doing the looking? The COMPILER

// Diff btwn COMPILED language and INTERPRETED language: INTERPRETED languages go top to bottom one line at at time. COMPILED languages do at least two passes
// JAVASCRIPT is a COMPILED language
// Example of an interpreted language: Bash


// COMPILATION phase/scope resolution = first pass
// EXECUTION PHASE = second pass
// When does the EXECUTION PHASE occur? A few microseconds after the first pass, after code has been compiled

// LHS v RHS = left hand side v right hand side (of an ASSIGNMENT)(an = operator)
// LHS is the target. RHS is the source
// You can have an LHS and RHS even when we don't see an equal operator, like when you pass in a VARIABLE to a function call. It's not obvious bc you cant see an equal sign, but there is a source and there is a target

// VARIABLE DECLARATION v FUNCTION DECLARATION
// FUNCTION DECLARATION: function keyword followed by a name followed by a block of code. an argument list and a body
// COMPILER: 'Hey (global) scope I have a DECLARATION for a new IDENTIFIER....

// UNDECLARED v UNDEFINED
// UNDECLARED VARIABLE = we were unable to find a proper LHS reference in any of the scopes that we have access to
// UNDECLARED is what it should have been called when there is no present DECLARATION for the VARIABLE in any of the SCOPES that we have access to
// UNDEFINED... was DECLARED but he has this empty value that we mistakenly call UNDECLARED.


// Extras
// var foo = 'bar'; this is two separate operations: a VARIABLE DECLARATION with an INITIALIZATION

// JustInTime Compiler: 'This function bar, we don't see it being called, so we are going to defer registering the function into the scope of bar until it is called.'
// HotSwapping (many engines like firefox will defer compilation and try to make a best guess as to how you are going to use a function, make inferences about types b/c it doesn't have enough time and information. They'll let the function run several times and monitor how well the guess was. 'Did we guess correctly? Is it being used in the way that we think it is? If not, then let's throw away the compilation and start over'