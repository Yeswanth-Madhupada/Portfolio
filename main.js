let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top <offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });
};
const form=document.querySelector('form');
function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}
