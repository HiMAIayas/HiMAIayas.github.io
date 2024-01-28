console.log('t');

$(document).ready(function(){
    

    $('#submitBtn').on('click',function(){
        console.log('hello');
        
        let fn = $('#inp-firstname').val();
        let ln = $('#inp-lastname').val();


        let total = countName(fn)+countName(ln);
        while (total>100){
            if (total>109){
                total-=100;
            }
            else{
                total-=90;
            }
        }
        $('#num').html(total);
        $('#numContainer').removeClass("d-none");
    });
});

function countName(name){
    let alphaArr = [
        'กดทถภฤฦุ่าำAIJQY',
        'ขชงบปูเแ้BKR',
        'ฆตฑฒ๋CGLS',
        'คธญรัษโะอิDMT',
        'ฉณหฌนมฎฬฮึEHNX',
        'จลวอใUVW',
        'ซืศีส๊OZ',
        'ผฝพฟย็FP',
        'ฏฐไ์'
    ]
    let count=0;
    for (let ch of name){
        for (let i=0; i<9; i++){

            if (alphaArr[i].includes(ch)) {
                count+=i+1
                console.log(ch+" "+(i+1));
                break;
            };
        }
    }
    console.log(count);
    return count;
}
