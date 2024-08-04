function sendmail(){
    var para={
        name: document.getElementById('name1').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        phone:document.getElementById('phone').value,

    };
    const serviceId="service_mmktj1j";
    const templateId="template_zf86z0n";
    
    emailjs
    .send(serviceId,templateId,para)
    .then(
        (res) =>{
            document.getElementById("name1").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            document.getElementById("phone").value="";
            console.log(res);
            alert("Email has been sent successfully!");
    
    
        }
    )
    .catch((error) =>console.log(error));

}
