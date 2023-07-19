function changeShape() {
    var shape = document.getElementById('shape').value;
    var squareInputs = document.getElementById('squareInputs');
    var circularInputs = document.getElementById('circularInputs');

    if (shape === 'square') {
        squareInputs.style.display = 'block';
        circularInputs.style.display = 'none';
    } else if (shape === 'circular') {
        squareInputs.style.display = 'none';
        circularInputs.style.display = 'block';
    }
}

function calculate() {
    var shape = document.getElementById('shape').value;
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var radius = parseFloat(document.getElementById('radius').value);
    var height = parseFloat(document.getElementById('height').value);
    var capacity = parseFloat(document.getElementById('capacity').value);
    var unit = document.getElementById('unit').value;

    var resultElement = document.getElementById('result');

    if (shape === 'square') {
        var spaceVolume = length * width * height;
    } else if (shape === 'circular') {
        var spaceVolume = Math.PI * radius * radius * height;
    } else {
        resultElement.textContent = 'Invalid shape. Please choose "square" or "circular".';
        return;
    }

    if (unit === 'cubic_feet') {
        var bagQuantity = Math.ceil(spaceVolume / capacity);
        resultElement.textContent = 'Minimum number of bags needed: ' + bagQuantity;
    } else if (unit === 'cubic_meters') {
        var spaceVolumeCubicFeet = spaceVolume * 35.3147;
        var bagQuantity = Math.ceil(spaceVolumeCubicFeet / capacity);
        resultElement.textContent = 'Minimum number of bags needed: ' + bagQuantity;
    } else {
        resultElement.textContent = 'Invalid unit. Please choose "cubic_feet" or "cubic_meters".';
    }
}

changeShape();  // Initialize the shape inputs visibility
