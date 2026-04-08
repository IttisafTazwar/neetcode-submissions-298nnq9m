class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Step 2: two pointers
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {

        // Step 3: compare both ends
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;

    }
}
