
export function circle() {
    let angle = 0;
    const centerX = 200;
    const centerY = 200;
    const radius = 100;
    const speed = 0.1;

    setInterval(() => {
        angle += speed;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        // update the position of the circle
        // document.getElementById("circle").style.left = x + "px";
        // document.getElementById("circle").style.top = y + "px";                
        return {x, y};  
    }, 10);
    
};