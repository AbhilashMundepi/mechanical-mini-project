function calculateGearRatios() {
    const gear1 = document.getElementById('gear1').value;
    const gear2 = document.getElementById('gear2').value;
    const gear3 = document.getElementById('gear3').value;
    const gear4 = document.getElementById('gear4').value;

    if (gear1 && gear2 && gear3 && gear4) {
        const ratio1 = gear2 / gear1;
        const ratio2 = gear4 / gear3;
        const overallRatio = ratio1 * ratio2;

        document.getElementById('output').innerHTML = `
            <b>Gear 1 to Gear 2 Ratio: </b>${ratio1.toFixed(2)}<br>
           <b> Gear 3 to Gear 4 Ratio: </b> ${ratio2.toFixed(2)}<br>
           <b> Overall Gear Ratio: </b> ${overallRatio.toFixed(2)}
        `;

        drawGears([gear1, gear2, gear3, gear4]);
    } else {
        document.getElementById('output').innerHTML = 'Please enter the number of teeth for all gears.';
    }
}

function drawGears(gears) {
    const canvas = document.getElementById('gearCanvas');
    const ctx = canvas.getContext('2d');
    const gearColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gears.forEach((teeth, index) => {
        const x = 100 + index * 100;
        const y = canvas.height / 2;
        const radius = teeth * 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = gearColors[index];
        ctx.stroke();
    });
}

