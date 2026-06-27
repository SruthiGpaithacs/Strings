function longestPalindrome(str) {

    let longest = "";

    for (let i = 0; i < str.length; i++) {
        let left = i;
        let right = i;
        while (left >= 0 && right < str.length && str[left] === str[right]) {

            if (right - left + 1 > longest.length) {
                longest = str.slice(left, right + 1);
            }

            left--;
            right++;
        }
        left = i;
        right = i + 1;

        while (left >= 0 && right < str.length && str[left] === str[right]) {

            if (right - left + 1 > longest.length) {
                longest = str.slice(left, right + 1);
            }

            left--;
            right++;
        }
    }

    return longest;
}

console.log(longestPalindrome("abacda"));
console.log(longestPalindrome("rsrtruv"));
console.log(longestPalindrome("abacaba"));