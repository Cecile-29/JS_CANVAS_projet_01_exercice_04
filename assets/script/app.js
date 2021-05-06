var ctx = document.getElementById('gingerBread').getContext('2d');

ctx.fillStyle = '#b65f02';
ctx.arc(300, 150, 100, 0, 2 * Math.PI);
ctx.rect(210, 240, 180, 200);
ctx.fill();

ctx.strokeStyle = '#b65f02';
ctx.beginPath();
ctx.moveTo(130, 240);
ctx.lineWidth = 55;
ctx.lineCap = 'round';
ctx.lineTo(470, 240);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 440);
ctx.lineWidth = 60;
ctx.lineCap = 'round';
ctx.lineTo(240, 560);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(360, 440);
ctx.lineWidth = 60;
ctx.lineCap = 'round';
ctx.lineTo(360, 560);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(300, 450, 30, 0, 2 * Math.PI);
ctx.fill();;

ctx.beginPath();
ctx.fillStyle = 'purple';
ctx.arc(250, 120, 10, 0, 2 * Math.PI);
ctx.arc(350, 120, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(300, 150, 20, 0, 2 * Math.PI);
ctx.fill();;

ctx.beginPath();
ctx.strokeStyle = 'beige';
ctx.lineWidth = 15;
ctx.arc(300, 190, 30, 0.7, 0.8 * Math.PI);
ctx.stroke();;
