export default function canvasDraw(){
    let canvas = $('#contentmentCanvas'),
        ctx = canvas[0].getContext('2d'),
        data = canvas.data('info'),
        width = canvas.parent().width(),
        height = width*2/5<200? 200: width*2/5,
        fz1 = width > 500 ? 25 : width < 400 ? 16 : 20,
        fz2 = width > 500 ? 14 : width < 400 ? 10 : 12,
        coef = 5;
    
    //set size to canvas
    canvas[0].width=width;
    canvas[0].height = height;

    var rang = range(data);
    if(rang.range > 70){
        coef = 1;
    }
    if(rang.range > 70){
        coef = 1;
    }
    var i=1;
    var prev = null;
    ctx.fillStyle = '#80ba27';
    ctx.strokeStyle = '#80ba27';
    ctx.textAlign = 'center';

    for(let point in data){
            let y = parseInt(15 + (rang.max - data[point])*coef),
                x = parseInt(width * .20 * i);
        if(prev){
            ctx.moveTo(x,y);
            ctx.lineTo(prev.x,prev.y)
            ctx.stroke();
        } 
        
        prev = {x,y};
        i++;
    }
    i=1;
    for(let point in data){
        let y = parseInt(15 + (rang.max - data[point])*coef),
            x = parseInt(width * .20 * i);
        
        
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, 2 * Math.PI, true);
        ctx.fill();

        ctx.fillStyle = '#80ba27';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI, true);
        ctx.fill();

        ctx.fillStyle = '#000';
        ctx.font = `${fz2}px Arial`;
        ctx.fillText(point,x, 20 + ((10+rang.range)*coef));

        ctx.fillStyle = '#000';
        ctx.font = `bold ${fz1}px Arial`;
        ctx.fillText(data[point].replace(/\./,'.')+'%',x, 5 + ((10+rang.range) * coef));
        ctx.fillStyle = '#80ba27';
        i++;
    }
}
function range(data){
    var arr = [];
    for(let key in data){
        arr.push(data[key]);
    }
    return { 
        max: Math.max.apply(Math,arr),
        min:  Math.min.apply(Math,arr),
        range: Math.max.apply(Math,arr) - Math.min.apply(Math,arr)
    };
}