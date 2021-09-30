function getFlags(){
    var cards=$('.card');
    var i=0;
    var flagS=[];
    var flag;
    for(i=0;i<12;i++){
    flag=$('.card').eq(i).find('img').eq(0).attr('src');
    flagS.push(flag);
    }
    return flagS;
    }

    function getRandomPositions(){
        var i=0;
        var positions=[];
        var RandomNumber=0;
            while(positions.length!=12){
            RandomNumber=Math.floor(Math.random()*12);
            while(positions.includes(RandomNumber) ){
            RandomNumber=Math.floor(Math.random()*12);
            }
            positions.push(RandomNumber);
            }
            return positions;
            }
    
    function setTheBoard(theFlags,thePositions){
                var flag='',vector='';
                for(var i=0;i<12;i++){
                flag=theFlags[thePositions[i]];
                vector=flag.split('/');
                flag=vector[vector.length-1];
                flag=flag.replace('Flag_of_','').replace('.png','');
                $('.card').eq(i).find('img').eq(0).
                attr('src',theFlags[thePositions[i]]);
                $('.card').eq(i).find('img').eq(0).
                attr('id',flag+'-'+i);
                }
            }
             
            function getRotated(){
                var cardsRotated=
                $('div[class="card rotate"]').length;
                return cardsRotated;   
               }
           
               function RotateCard() {
                var chosenCountry='';
                if(getRotated()==0){
                    console.log('rotar carta clickeada');
                    chosenCountry=$(this).find('img').attr('id');
                    console.log('pais elegido '+chosenCountry);
                    $(this).addClass('rotate');
                }

               }

               function generate2Random(){
                var i=0;
                var positions=[];
                var RandomNumber=0;
                while(positions.length!=2){
                RandomNumber=Math.floor(Math.random()*12);
                while(positions.includes(RandomNumber) ){
                RandomNumber=Math.floor(Math.random()*12);
                }
                positions.push(RandomNumber);
                }
                return positions;
                }
            
                function optionMatrix(theFlags){
                    var options=[];
                    var opInt=[];
                    var positions='',flag='';
                    var i=0,j=0;
                    for(i=0;i<12;i++){
                    positions=generate2Random();
                    while(positions.includes(thePositions[i])){
                    positions=generate2Random();
                    }
                    opInt=[];
                    for(j=0;j<2;j++){
                    flag=theFlags[positions[j]].
                    replace(document.URL,'').replace('img/flags/Flag_of_','').
                    replace('.png','');
                    
                    opInt.push(flag);
                    }
                    options.push(opInt);
                    }
                    return options;
                    }

    var theFlags=getFlags();
    var thePositions= getRandomPositions();
    setTheBoard(theFlags,thePositions);
    const board = document.querySelectorAll('.card');
    board.forEach(card => 
        card.addEventListener('click', RotateCard));
    var theOptions = optionMatrix(theFlags);