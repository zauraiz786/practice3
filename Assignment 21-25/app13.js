var userName = prompt(`Enter Username`);
if (/[@.,!]/.test(userName)) {
    alert('enter valid userName');
}