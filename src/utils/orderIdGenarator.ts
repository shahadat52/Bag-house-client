export const generateOrderId = () => {
    const letters = Array.from({ length: 3 }, () =>
        String.fromCharCode(65 + Math.floor(Math.random() * 26)) // Random uppercase letters
    ).join('');
    const numbers = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
    return `${letters}${numbers}`;
}

