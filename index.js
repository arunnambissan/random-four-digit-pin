module.exports = {
    generate: () => {
        let pin = Date.now().toString();
        pin = Math.ceil(Number(pin.substr(pin.length - 4)) + Math.random() * 100);
        return pin;
    }
}
