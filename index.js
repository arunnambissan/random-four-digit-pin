export default function generateRandomFourDigitPin() {
    return Math.ceil(Number(Date.now().toString().substring(9, 13)) + Math.random() * 100);
}
