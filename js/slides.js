$(function(){
$('.mosaico .container .mosaico-wraper').slick({//pega o moisca-wraper pois ele engloba todas divs com o moisaco e dá um slick q é o puglin q importamos
    centerMode:false,
    slidesToShow:6,
    arrows:false,//setas
    responsive:[//quando der resize vai mexer no slide
        {
            breakpoint:768,//oq quero q aconteça quando chegar em 768:
            settings:{//aqi vão as config
                arrows:false,
                centerMode:true,
                slidesToShow:3
            }
        },
        {
            breakpoint:580,
            settings:{
                arrows:false,
                centerMode:true,//mostra o centro e as bordas  dos outros pra dizer q pode trocar
                slidesToShow:2//quando chegar em 580px mostra só um slide
            }
        },
        {
            breakpoint:400,
            settings:
            {
                arrows:false,
                centerMode:true,
                slidesToShow:0
            }
        }
            
    ]
});


    $('.tratamentos .container').slick({//pega o tratamentos e o container q engloba todas divs q contem pequenas divs de tratamento pois ai faz slide pra todas 
        centerMode:false,
        slidesToShow:3,
        arrows:false,
        infinite:false,//aqui n deixa o slide infinito
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    dots:true,//bolinhas de navegação
                    infinite:false,
                    centerMode:false,
                    slidesToShow:2
                }
            },
            {
                breakpoint:480,
                settings:{
                    arrows:false,
                    dots:true,
                    infinite:false,
                    centerMode:false,
                    slidesToShow:1
                }
            }
        ]
    });

    $('.depoimentos .container').slick({
        centerMode:false,
        slidesToShow:1,
        arrows:false,
        infinite:false,//aqui n deixa o slide infinito
        dots:true
    });



});