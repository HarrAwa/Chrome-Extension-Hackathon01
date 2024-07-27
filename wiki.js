
document.addEventListener('DOMContentLoaded',function(){
    let header = document.querySelector('h1');
    let wikiText = document.getElementById('wikiText');
    let page = '';
    chrome.runtime.onMessage.addListener(function(message){
        if(message.from == 'background') page = message.message;
        //header.innerHTML = message.message;
        //console.log(message);
        getStuff();
    })
    
    
    function populate(data){
        //console.log(data['parse']['text']['*'].querySelectorAll('i'));
        header.innerHTML = data['parse']['title']
        
        wikiText.innerHTML = data['parse']['text']['*'];
        const allImg = wikiText.querySelectorAll('i');
        
        for(let i =0 ; i < allImg.length; i++){
            allImg[i].removeAttribute('href');
        }
        console.log(allImg);
        console.log(JSON.stringify(data, null, 2));
    }
    
    function getStuff(){
        fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${page}&format=json&origin=*`)
        .then(res => res.json())
        .then(function(data){
            console.log(data);
            populate(data);
        })
        .catch(header.innerHTML = 'page not found');
    }
    
    
});



