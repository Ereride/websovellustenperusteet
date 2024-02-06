document.querySelector('button').addEventListener('click', () => {
const random = Math.floor(Math.random() * 6 ) + 1    
document.querySelector('img').src = './img/' + random + '.png'  
})