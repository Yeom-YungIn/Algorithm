export class ReverseString {
    reverse = (str) => {
        return str.split('').reverse().join('');
    }

    reverseString(str) {
        if (str === '') {
            return '';
        } else {
            return this.reverseString(str.substring(1)) + str.charAt(0);
        }
    }
}