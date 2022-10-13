if (document.querySelectorAll('[data-bss-baguettebox]').length > 0) {
   baguetteBox.run('[data-bss-baguettebox]', { animation: 'slideIn' ,  captions: function(element) {
        return element.getElementsByTagName('img')[0].dataset.title;
    }} 
    );
}