function showorhide(button) {
    const box = button.closest('.ques-box');
    const paragraph = box.querySelector('.ques-ans');
    const allParagraphs = document.querySelectorAll('.ques-ans');
    const allPlusSigns = document.querySelectorAll('.plus-sign-img');

    let plussign = box.querySelector('.plus-sign-img');
    
    paragraph.classList.toggle('hidden');

    //if clicked to show hidden para
    if (paragraph.classList.contains('hidden') ) {
        allParagraphs.forEach((p)=>{
            p.style.display='none';
        });
        allPlusSigns.forEach((ps)=>{
            ps.style.transform = 'rotate(0deg)';
        })
        
        paragraph.style.display = 'block';
        plussign.style.transform = 'rotate(45deg)';
    }
    // hides para 
    else { 
        allParagraphs.forEach((p)=>{
            p.style.display='none';
        });
        allPlusSigns.forEach((ps)=>{
            ps.style.transform = 'rotate(0deg)';
        })
        paragraph.style.display = 'none';
        plussign.style.transform = 'rotate(0deg)';

    }
}