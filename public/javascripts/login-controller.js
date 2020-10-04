const studentLoginForm = document.forms.studentLogin;
const handleSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify(Object.fromEntries(new FormData(e.target)));
    console.log("body:", body);

    const res = await postForm(body);
    const data = await res.json();
    console.log(data);
}

const postForm = (body) => {
    return fetch('http://localhost:3001/spaceconnect/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body
    });
};

//studentLoginForm.addEventListener('submit', handleSubmit);


// studentLogin.onsubmit = async (e) => {
//     e.preventDefault();
//     var form = document.querySelector("#studentLogin");
//    // var form = document.forms[0];

//       data = {
//         userid : form.querySelector('input[name="firstname"]').value,
//         lastname : form.querySelector('input[name="lastname"]').value,
//         age : 5
//       }

//       let response = await fetch('http://localhost:8482/decode', {
//               method: 'POST', // or 'PUT'
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(data),
//       })

//       let text = await response.text(); // read response body as text
//       document.querySelector("#decoded").innerHTML = text;
//   };