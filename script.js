window.onload = function() {
    setCurrentDateTime();
    updateDisplay();
};

function setCurrentDateTime() {
    const now = new Date();
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    document.getElementById('datetime').value = `${hours}:${minutes}`;
}

function padZero(number) {
    return number < 10 ? '0' + number : number;
}

function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    let formattedDate = new Date(date).toLocaleDateString('th-TH', options);
    formattedDate = formattedDate.replace(/ /g, ' ').replace(/\./g, '');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const day = padZero(formattedDate.split(' ')[0]);
    const month = months[new Date(date).getMonth()];
    const year = formattedDate.split(' ')[2];
    return `${day} ${month} ${year}`;
}

let qrCodeImage = null;
let powerSavingMode = false;


function handlePaste(event) {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
            const blob = items[i].getAsFile();
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = new Image();
                img.onload = function() {
                    qrCodeImage = img;
                    updateDisplay();
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(blob);
        }
    }
}

function updateDisplay() {
    const datetime = document.getElementById('datetime').value || '-';
    const batteryLevel = document.getElementById('battery').value || '100';
    const monthandyear = document.getElementById('monthandyear').value || '-';
    const monthmonthyear = document.getElementById('monthmonthyear').value || '-';
    
    const bank1 = document.getElementById('bank1').value || '-';
    const senderaccount1 = document.getElementById('senderaccount1').value || '-';
    const name1 = document.getElementById('name1').value || '-';
    
    //1
    const choose1 = document.getElementById('choose1').value || '-';
    let money1 = document.getElementById('money1').value || '-';
    const time1 = document.getElementById('time1').value || '-';
    
        //2
    const choose2 = document.getElementById('choose2').value || '-';
    let money2 = document.getElementById('money2').value || '-';
    const time2 = document.getElementById('time2').value || '-';
    
    //3
    const choose3 = document.getElementById('choose3').value || '-';
    let money3 = document.getElementById('money3').value || '-';
    const time3 = document.getElementById('time3').value || '-';
    
    //4
    const choose4 = document.getElementById('choose4').value || '-';
    let money4 = document.getElementById('money4').value || '-';
    const time4 = document.getElementById('time4').value || '-';
    
    //5
    const choose5 = document.getElementById('choose5').value || '-';
    let money5 = document.getElementById('money5').value || '-';
    
    const formattedTime = datetime;
    
    
    
   //1
            if (choose1 === 'โอนเงินออก' && !money1.startsWith('-')) {
                if (money1.startsWith('+')) {
                    money1 = '-' + money1.substring(1);
                } else {
                    money1 = '-' + money1;
                }
            } else if (choose1 === 'รับเงินโอน' && !money1.startsWith('+')) {
                if (money1.startsWith('-')) {
                    money1 = '+' + money1.substring(1);
                } else {
                    money1 = '+' + money1;
                }
            }

            document.getElementById('money1').value = money1;
    
    
   //2
            if (choose2 === 'โอนเงินออก' && !money2.startsWith('-')) {
                if (money2.startsWith('+')) {
                    money2 = '-' + money2.substring(1);
                } else {
                    money2 = '-' + money2;
                }
            } else if (choose2 === 'รับเงินโอน' && !money2.startsWith('+')) {
                if (money2.startsWith('-')) {
                    money2 = '+' + money2.substring(1);
                } else {
                    money2 = '+' + money2;
                }
            }

            document.getElementById('money2').value = money2;
    
   //3
            if (choose3 === 'โอนเงินออก' && !money3.startsWith('-')) {
                if (money3.startsWith('+')) {
                    money3 = '-' + money3.substring(1);
                } else {
                    money3 = '-' + money3;
                }
            } else if (choose3 === 'รับเงินโอน' && !money3.startsWith('+')) {
                if (money3.startsWith('-')) {
                    money3 = '+' + money3.substring(1);
                } else {
                    money3 = '+' + money3;
                }
            }

            document.getElementById('money3').value = money3;
    
    
   //4
            if (choose4 === 'โอนเงินออก' && !money4.startsWith('-')) {
                if (money4.startsWith('+')) {
                    money4 = '-' + money4.substring(1);
                } else {
                    money4 = '-' + money4;
                }
            } else if (choose4 === 'รับเงินโอน' && !money4.startsWith('+')) {
                if (money4.startsWith('-')) {
                    money4 = '+' + money4.substring(1);
                } else {
                    money4 = '+' + money4;
                }
            }

            document.getElementById('money4').value = money4;
    
    
   //5
            if (choose5 === 'โอนเงินออก' && !money5.startsWith('-')) {
                if (money5.startsWith('+')) {
                    money5 = '-' + money5.substring(1);
                } else {
                    money5 = '-' + money5;
                }
            } else if (choose5 === 'รับเงินโอน' && !money5.startsWith('+')) {
                if (money5.startsWith('-')) {
                    money5 = '+' + money5.substring(1);
                } else {
                    money5 = '+' + money5;
                }
            }

            document.getElementById('money5').value = money5;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = 'https://github.com/useronlineid/Enter-T1/blob/main/backgroundEnter-T1.jpg?raw=true';
    backgroundImage.onload = function() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Draw text with custom styles
        drawText(ctx, `${datetime}`, 63.4, 45.8, '22.50px SF Thonburi', '#ffffff', '600', 'left', 1.5, 3, 0, 0, 800, 0);
        
        //1
        let textColor1 = '#24be2c';
        if (choose1 === 'โอนเงินออก') {
            textColor1 = '#e13d28';
        }
        
        //2
        let textColor2 = '#24be2c';
        if (choose2 === 'โอนเงินออก') {
            textColor2 = '#e13d28';
        }
        
        //3
        let textColor3 = '#24be2c';
        if (choose3 === 'โอนเงินออก') {
            textColor3 = '#e13d28';
        }
        
        //4
        let textColor4 = '#24be2c';
        if (choose4 === 'โอนเงินออก') {
            textColor4 = '#e13d28';
        }
        
        
        //5
        let textColor5 = '#24be2c';
        if (choose5 === 'โอนเงินออก') {
            textColor5 = '#e13d28';
        }
        
        
        drawText(ctx, `${monthandyear}`, 34.9, 311.9, '20.6px TTB Money', '#0f2c5f', '600', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${monthmonthyear}`, 21.8, 472.1, '18.03px TTB Money', '#747f90', '600', 'left', 1.5, 3, 0, 0, 800, 0);

        
        drawText(ctx, `${choose1}`, 43.3, 534.8, '22.96px TTB Money', '#0f2c5f', '600', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${money1}`, 80.0, 534.8, '21.46px TTB Money', textColor1, '600', 'right', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${monthmonthyear}, ${time1} น.`, 43.3, 573.4, '18.03px TTB Money', '#747f90', '600', 'left', 1.5, 3, 0, 0, 800, 0);

        drawText(ctx, `${senderaccount1}`, 40.6, 636.5, '19.65px TTB Money', '#0f2c5f', '700', 'right', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${name1}`, 40.6,  668.7,'19.65px TTB Money', '#0f2c5f', '700', 'right', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${bank1}`, 40.6, 705.5, '19.65px TTB Money', '#0f2c5f', '700', 'right', 1.5, 3, 0, 0, 800, 0);

        drawText(ctx, `${choose2}`, 43.3, 813.4, '22.96px TTB Money', '#0f2c5f', '600', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${money2}`, 80.0, 813.4, '21.46px TTB Money', textColor2, '600', 'right', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${monthmonthyear}, ${time2} น.`, 43.3, 851.3, '18.03px TTB Money', '#747f90', '600', 'left', 1.5, 3, 0, 0, 800, 0);

        drawText(ctx, `${choose3}`, 43.3, 937.2, '22.96px TTB Money', '#0f2c5f', '600', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${money3}`, 80.0, 937.2, '21.46px TTB Money', textColor3, '600', 'right', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${monthmonthyear}, ${time3} น.`, 43.3, 975.9, '18.03px TTB Money', '#747f90', '600', 'left', 1.5, 3, 0, 0, 800, 0);

        drawText(ctx, `${choose4}`, 43.3, 1061.4, '22.96px TTB Money', '#0f2c5f', '600', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${money4}`, 80.0, 1061.4, '21.46px TTB Money', textColor4, '600', 'right', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${monthmonthyear}, ${time4} น.`, 43.3, 1100.1, '18.03px TTB Money', '#747f90', '600', 'left', 1.5, 3, 0, 0, 800, 0);



        drawText(ctx, `${choose5}`, 43.3, 1185.3, '22.96px TTB Money', '#0f2c5f', '600', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${money5}`, 80.0, 1185.3, '21.46px TTB Money', textColor5, '600', 'right', 1.5, 3, 0, 0, 800, 0);
        

   
        if (qrCodeImage) {
            ctx.drawImage(qrCodeImage, 0, 130.3, 555, 951); // Adjust position and size as needed
        }


        // Draw battery
        drawBattery(ctx, batteryLevel, powerSavingMode);
    };
}

function drawText(ctx, text, x, y, font, color, weight, align, lineHeight, maxLines, shadowColor, shadowBlur, maxWidth, letterSpacing) {
    ctx.font = `${weight} ${font}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'left'; // Always use left alignment for drawing text with custom letterSpacing
    ctx.shadowColor = shadowColor;
    ctx.shadowBlur = shadowBlur;

    const paragraphs = text.split('<br>');
    let currentY = y;

    paragraphs.forEach(paragraph => {
        const words = paragraph.split(' ');
        let currentLine = '';
        const lines = [];

        for (let i = 0; i < words.length; i++) {
            const testLine = currentLine + words[i] + ' ';
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

            if (testWidth > maxWidth && i > 0) {
                lines.push(currentLine);
                currentLine = words[i] + ' ';
            } else {
                currentLine = testLine;
            }
        }
        lines.push(currentLine);

        lines.forEach((line, index) => {
            let currentX = x;
            if (align === 'center') {
                currentX = (ctx.canvas.width - ctx.measureText(line).width) / 1.98 - ((line.length - 1) * letterSpacing) / 2;
            } else if (align === 'right') {
                currentX = ctx.canvas.width - x - ctx.measureText(line).width - ((line.length - 1) * letterSpacing);
            }

            drawTextLine(ctx, line.trim(), currentX, currentY, letterSpacing);
            currentY += lineHeight;
            if (maxLines && index >= maxLines - 1) {
                return;
            }
        });
    });
}

function drawTextLine(ctx, text, x, y, letterSpacing) {
    if (!letterSpacing) {
        ctx.fillText(text, x, y);
        return;
    }

    const characters = text.split('');
    let currentPosition = x;

    characters.forEach((char, index) => {
        const charCode = char.charCodeAt(0);
        const prevChar = index > 0 ? characters[index - 1] : null;
        const prevCharCode = prevChar ? prevChar.charCodeAt(0) : null;

        const isUpperVowel = (charCode >= 0x0E34 && charCode <= 0x0E37);
        const isToneMark = (charCode >= 0x0E48 && charCode <= 0x0E4C);
        const isBeforeVowel = (charCode === 0x0E31);
        const isBelowVowel = (charCode >= 0x0E38 && charCode <= 0x0E3A);

        let yOffset = 0;
        let xOffset = 0;

        if (isUpperVowel) {
            yOffset = -1;
            xOffset = 0;
        }

        if (isToneMark) {
            if (prevChar && ((prevChar.charCodeAt(0) >= 0x0E34 && prevChar.charCodeAt(0) <= 0x0E37) || prevChar.charCodeAt(0) === 0x0E31)) {
                yOffset = -8; // วรรณยุกต์ที่มีสระ เลื่อนขึ้น 8 หน่วย
                xOffset = 0; // เลื่อนในแนวนอน ซ้าย 5 หน่วย
            } else {
                yOffset = 0; // วรรณยุกต์ไม่มีสระ เลื่อนขึ้น 8 หน่วย
                xOffset = -7; // เลื่อนในแนวนอน ซ้าย 5 หน่วย
            }
        }

        if (isBeforeVowel) {
            yOffset = -1;
            xOffset = 1;
        }

        if (isBelowVowel) {
            yOffset = 0;
            xOffset = -10;
        }

        ctx.fillText(char, currentPosition + xOffset, y + yOffset);

        if (!isToneMark && !isBeforeVowel && !isBelowVowel) {
            currentPosition += ctx.measureText(char).width + letterSpacing;
        } else {
            currentPosition += ctx.measureText(char).width;
        }
    });
}

function drawBattery(ctx, batteryLevel, powerSavingMode) {
    // วาดกรอบแบตเตอรี่ด้วยมุมโค้งมน
    ctx.lineWidth = 2; // กำหนดความหนาของเส้นเป็น 2 พิกเซล
    ctx.strokeStyle = '#9b9b9b'; // กำหนดสีเส้นขอบเป็นสีเทา
    ctx.fillStyle = '#ffffff'; // กำหนดสีพื้นหลังของกรอบแบตเตอรี่เป็นสีขาว



    // กำหนดสีแบตเตอรี่ตามระดับและโหมดประหยัดพลังงาน
    let batteryColor = '#ffffff'; // สีเขียวสำหรับโหมดปกติ
    if (batteryLevel <= 20) {
        batteryColor = '#ff0000'; // สีแดงสำหรับแบตเตอรี่ต่ำ
    } else if (powerSavingMode) {
        batteryColor = '#fccd0e'; // สีส้มสำหรับโหมดประหยัดพลังงาน
    }

// วาดการเติมแบตเตอรี่
const fillWidth = (batteryLevel / 100) * 35.5; // คำนวณความกว้างของการเติมแบตเตอรี่ตามระดับแบตเตอรี่
const x = 478.0;
const y = 27.5;
const height = 18.7;
const radius = 6; // รัศมีของโค้ง

ctx.fillStyle = batteryColor; // กำหนดสีการเติมแบตเตอรี่ตามที่คำนวณ

// เริ่มวาดรูปร่างที่มีมุมโค้ง
ctx.beginPath(); // เริ่มวาดรูปใหม่
ctx.moveTo(x, y + radius); // เริ่มต้นที่มุมบนซ้าย
ctx.lineTo(x, y + height - radius); // วาดเส้นตรงไปที่มุมล่างซ้าย
ctx.arcTo(x, y + height, x + radius, y + height, radius); // วาดส่วนโค้งที่มุมล่างซ้าย
ctx.lineTo(x + fillWidth - radius, y + height); // วาดเส้นตรงไปที่มุมล่างขวา
ctx.arcTo(x + fillWidth, y + height, x + fillWidth, y + height - radius, radius); // วาดส่วนโค้งที่มุมล่างขวา
ctx.lineTo(x + fillWidth, y + radius); // วาดเส้นตรงขึ้นไปที่มุมบนขวา
ctx.arcTo(x + fillWidth, y, x + fillWidth - radius, y, radius); // วาดส่วนโค้งที่มุมบนขวา
ctx.lineTo(x + radius, y); // วาดเส้นตรงไปที่มุมบนซ้าย
ctx.arcTo(x, y, x, y + radius, radius); // วาดส่วนโค้งที่มุมบนซ้าย
ctx.closePath(); // ปิดเส้นที่วาดเพื่อสร้างรูปร่างปิด
ctx.fill(); // เติมสีการเติมแบตเตอรี่ะสูง 16



    ctx.font = '800 17px SF Thonburi';
    ctx.fillStyle = '#204fe7';
    ctx.textAlign = 'center';
    ctx.fillText(`${batteryLevel}`, x + 35.5 / 2, y + height / 1.25);
}






function togglePowerSavingMode() {
    powerSavingMode = !powerSavingMode;
    const powerSavingButton = document.getElementById('powerSavingMode');
    powerSavingButton.classList.toggle('active', powerSavingMode);
    updateDisplay();
}
function updateBatteryDisplay() {
    const batteryLevel = document.getElementById('battery').value;
    document.getElementById('battery-level').innerText = batteryLevel;
}

function downloadImage() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'canvas_image.png';
    link.click();
}

document.getElementById('generate').addEventListener('click', updateDisplay);

function drawImage(ctx, imageUrl, x, y, width, height) {
    const image = new Image();
    image.src = imageUrl;
    image.onload = function() {
        ctx.drawImage(image, x, y, width, height);
    };
}
