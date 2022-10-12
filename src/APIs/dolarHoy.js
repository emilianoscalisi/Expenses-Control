
let url = 'https://www.dolarsi.com/api/api.php?type=dolar';


const dolarHoy =(callBackDolar)=>{ 
      
    fetch(url)
    .then((response) => response.json())    
    .then((data) => {
             callBackDolar(data);
    })
    .catch(error => console.log(error));
} 



export default dolarHoy;