

const images = [
    'img/horsesss.jpg',
    'img/img01.jpg',
    'img/img06.jpg',
    'img/img08.jpg',
    'img/img04.jpg',
    'img/img05.jpg',

    ];


    const colors=[
        'black',
        'white',
        'white',
        'white',
        'white',
        'black',
    ]
    
      
    let index = 0;
    const max = images.length;
    
     
    const Paragraph=document.querySelector('.content__Paragraph');
    const containerElement = document.querySelector('.container');
    const prevSlideButton = document.querySelector('.prevSlide');
    const nextSlideButton = document.querySelector('.nextSlide');


    function changeParagraphColor(colors,index){
        Paragraph.style.color=colors[index];
        
        
    }

    
    prevSlideButton.addEventListener('click', function () {
        index--;
        changeParagraphColor(colors,index);
        setImageIndex();
        changeBackgroundImage(images[index], containerElement);
    });
    nextSlideButton.addEventListener('click', function () {
        index++;
        changeParagraphColor(colors,index);
        setImageIndex();
        changeBackgroundImage(images[index], containerElement);
    });
    
    function setImageIndex() {
        if (index < 0) index = max - 1;
        if (index === max) index = 0; 
    }

    function changeBackgroundImage(backgroundImage, element) {
        element.style.backgroundImage = `url(${backgroundImage})`;
    }

    
    
    
    
    
    
    
    


