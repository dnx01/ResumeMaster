// document.getElementById('cvForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const profession = document.getElementById('profession').value;
//     const photo = document.getElementById('photo').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const about = document.getElementById('about').value.replace(/\n/g, '<br>');
//     const skills = document.getElementById('skills').value.replace(/\n/g, '<br>');
//     const languages = document.getElementById('languages').value.replace(/\n/g, '<br>');
//     const education = document.getElementById('education').value.replace(/\n/g, '<br>');
//     const links = document.getElementById('links').value.split('\n').map(link => `<a href="${link.trim()}" target="_blank">${link.trim()}</a>`).join('<br>');

//     const cvPreview = document.getElementById('cvPreview');
//     cvPreview.innerHTML = `
//         <img src="${photo}" alt="Profile Photo">
//         <h2>${name}</h2>
//         <p>${profession}</p>
//         <div class="contact-info">
//             <p>${phone}</p>
//             <p>${email}</p>
//         </div>
//         <div class="main-content">
//             <div class="column">
//                 <h3>About</h3>
//                 <p>${about}</p>

//                 <h3>Skills</h3>
//                 <p>${skills}</p>

//                 <h3>Languages</h3>
//                 <p>${languages}</p>
//             </div>
//             <div class="column">
//                 <h3>Education</h3>
//                 <p>${education}</p>
                
//                 <h3>Links</h3>
//                 ${links}
//             </div>
//         </div>
//     `;
// });

// document.getElementById('downloadPDF').addEventListener('click', function() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF('p', 'pt', 'a4');

//     doc.html(document.getElementById('cvPreview'), {
//         callback: function (doc) {
//             doc.save('cv.pdf');
//         },
//         x: 10,
//         y: 10,
//         width: 580,
//         windowWidth: 900
//     });
// });


document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const photo = document.getElementById('photo').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const about = document.getElementById('about').value.replace(/\n/g, '<br>');
    const skills = document.getElementById('skills').value.replace(/\n/g, '<br>');
    const languages = document.getElementById('languages').value.replace(/\n/g, '<br>');
    const education = document.getElementById('education').value.replace(/\n/g, '<br>');
    const links = document.getElementById('links').value.split('\n').map(link => `<a href="${link.trim()}" target="_blank">${link.trim()}</a>`).join('<br>');

    const cvPreview = document.getElementById('cvPreview');
    cvPreview.innerHTML = `
        <img src="${photo}" alt="Profile Photo">
        <h2>${name}</h2>
        <p>${profession}</p>
        <div class="contact-info">
            <p>${phone}</p>
            <p>${email}</p>
        </div>
        <div class="main-content">
            <div class="column">
                <h3 class="section-title">About</h3>
                <p class="section-content">${about}</p>

                <h3 class="section-title">Skills</h3>
                <p class="section-content">${skills}</p>

                <h3 class="section-title">Languages</h3>
                <p class="section-content">${languages}</p>
            </div>
            <div class="column">
                <h3 class="section-title">Education</h3>
                <p class="section-content">${education}</p>
                
                <h3 class="section-title">Links</h3>
                <p class="section-content">${links}</p>
            </div>
        </div>
    `;
});

