const { SlashCommandBuilder, bold, underline, codeBlock, inlineCode } = require('discord.js');

// Code Strings.
const accessString = `int arr = {1, 2, 3}
// access an element, where i is the index of the desired element
myArray[i];`;

const traverseString = `for(int i = 0; i < array.length; i++) {
    System.out.println(array[i]);
}`;

const resizeString = `public static int resize() {
    this.capacity *= 2;
    int[] newArray = new int[this.capacity];
    for(int i = 0; i < this.length; i++) {
        newArray[i] = this.array[i];
    }
    this.array = newArray;
}`;


module.exports = {
    cooldown: 30,
    data: new SlashCommandBuilder()
        .setName('arrays')
        .setDescription('Gives a description of static and dynamic arrays'),
    async execute(interaction) {
        await interaction.reply(bold('Arrays') + "\n\nArrays are the most basic data structure in Computer Science.\n\nAn array consists of information stored contiguously (sequentially with no gaps or missing spaces)\n" +
        "There are two types of Arrays that we will discuss " + bold('Static') + " and " + bold('Dynamic.')
        + "\n\n" + bold('Static') + " Arrays are of a set size, this size cannot be changed after creation and once full, additional data can only overwrite previous data.\n\n"
        + bold('Reading from an array')
        + "\n\n" + `To read an element from an array we choose the index we want to access. Below we have an array of size ` + inlineCode(`3`) + ` called ` + inlineCode(`arr`) + ". And we attempt to access the " + inlineCode(`ith`) + ` element of this array.\n\n`
        + codeBlock('java', accessString)
        + "\nAcessing an element in an array can be done in constant time, it is always instant as each index is mapped to an address in RAM. Regardless of the size, the time taken to access an element is always constant. This is referred to as O(1) time complexity\n\n"
        + bold('Traversing through an array') + "\n\nWe can also read all values within an array by traversing through it. Below is an example of how we could traverse through out array from start to end using a " + inlineCode("for") + " loop.\n\n"
        + codeBlock('java', traverseString)
        + "\nTraversing through an array of size n takes O(n) time complexity. This is because the number of operations we must perform grows linearly with the size of our array, with an array of size 100, we would have to perform 100 operations.\n"
        + bold("Deleting from an array")
        + "");
    }
}