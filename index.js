// Add your code here
function submitData(name, email) {
    console.log('here')
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
        })
    }
   
    fetch('http://localhost:3000/users', config)
      .then(function (response) {
            if(!response.ok){
                const error = new Error('Unauthorized Access');
                error.code = response.status;
                throw error;
            }
            return response.json();
        })

        .then(function (data) {
            const createdP = document.createElement('p');
            const body = document.body;
            createdP.textContent = `${data.id}`;
            body.appendChild(createdP);
            
        }).catch((error) => {
            const createdHeader = document.createElement('p');
            const body = document.body;
            createdHeader.textContent = error.error.message;
            body.appendChild(createdHeader);
        })
}

submitData('Steve', 'steve@steve.com');

// function configfetch (method){
//     return{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             name: 'Steve',
//             email: 'steve@steve.com',
//         })
//     }
// }


// ssubmitData();
// const submitData = async () => {
//     const config = {
//         method: 'POST',//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             name: 'Steve',
//             email: 'steve@steve.com',
//         })
//     }

//     const url = 'http://localhost:3000/users';

//     const response = await axios.post(url, {
//         name: const submitData = async () => {
//     const config = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             name: 'Steve',
//             email: 'steve@steve.com',
//         })
//     }

//     const url = 'http://localhost:3000/users';

//     const response = await axios.post(url, {
//         name: 'Steve',
//         email: 'steve@steve.com',
//     });
//     console.log(response.data.id);
// }'Steve',
//         email: 'steve@steve.com',
//     });
//     console.log(response.data.id);
// }
