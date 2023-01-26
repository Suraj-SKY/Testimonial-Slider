const testimonial = [
    {
        name: 'Sonny G.',
        photoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
        text: 'Best. Product. Ever! I would like to personally thank you for your outstanding product. The very best. If you want real marketing that works and effective implementation - farming\'s got you covered.'
    },
    {
        name: 'Salomone .',
        photoUrl: 'https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text: 'Best. Product. Ever! I couldn\'t have asked for more than this. Call of duty is both attractive and highly adaptable. It\'s incredible.'
    },
    {
        name: 'Neile F.',
        photoUrl: 'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXIlMjBnaXJsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        text: 'It fits our needs perfectly. Itachi is exactly what our business has been lacking. I would be lost without itachi. You\'ve saved our business!'
    }
];

const imageElement = document.querySelector('img');
const textElement = document.querySelector('.text');
const nameElement = document.querySelector('.username');

let index = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonial[index];
    // destructuring name, photoUrl, text from testimonial
    imageElement.src = photoUrl;
    textElement.textContent = text;
    // textElement.innerHTML = text;
    nameElement.textContent = name;

    index++;
    if (index === testimonial.length) {
        index = 0;
    }
    setTimeout(updateTestimonial, 5000);
}

