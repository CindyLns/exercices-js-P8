function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResult = document.getElementById('binaryResult');

    const decimalNumber = parseInt(decimalInput);

    const binary = decimalNumber.toString(2);
    binaryResult.textContent = ` ${binary}`;
}