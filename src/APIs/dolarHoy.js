
let url = 'https://www.dolarsi.com/api/api.php?type=dolar';
const dolar =()=>{    
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => console.log(error));
} 

export default dolar;