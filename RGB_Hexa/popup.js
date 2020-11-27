// author: https://github.com/fireworks99/

let btn = document.getElementById('convert');
let output = document.getElementById('output');
let copyBtn = document.getElementById('copy');

btn.onclick = function() {
	let val = document.getElementById('input').value;
	val = val.replace(/\ /g, "");
	val = val[0] === '#' ? hex2rgb(val) : rgb2hex(val);
	output.value = val;
	output.style.visibility = "visible";
	btn.style.backgroundColor = val[0] === '#' ? val : "rgb(" + val + ")";
	copyBtn.innerText = "Copy";
	copyBtn.style.visibility = "visible";
}


copyBtn.onclick = function() {
	output.select();
	if(document.execCommand('copy')) {
		document.execCommand('copy');
		copyBtn.innerText = "Copied";
	}
}

function hex2rgb(hexColor) {
    hexColor = hexColor.substring(1);
    if(hexColor.length === 4) {
    	hexColor = hexColor.substr(0, 3);
    }
    if(hexColor.length === 3) {
    	let temp = "";
    	for(let j = 0; j < 3; ++j) {
    		temp += hexColor[j];
    		temp += hexColor[j];
    	}
    	hexColor = temp;
    }
    hexColor = hexColor.toLowerCase();
    let std = "0123456789abcdef";
    let ans = [];
    for (let x = 0; x < 3; ++x) {
        let t = hexColor.substr(x * 2, 2);
        let t1 = t.substr(0, 1);
        let t2 = t.substr(1, 1);
        ans.push(std.indexOf(t1) * 16 + std.indexOf(t2));
    }
    return ans[0] + "," + ans[1] + "," + ans[2];
}

function rgb2hex(rgbColor){
    hexColor = "#";
    var rgb = rgbColor.split(',');
    var rgbLength = rgb.length;
    for(var i=0; i<rgbLength; i++) {
        var c = "0123456789ABCDEF",
            b = "",
            a = rgb[i] % 16;
        b = c.substr(a, 1);
        a = (rgb[i]-a) / 16;
        hexColor += c.substr(a, 1) + b;
    }
    return hexColor;
}
