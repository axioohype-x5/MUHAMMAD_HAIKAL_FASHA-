document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Menghitung posisi elemen dikurangi tinggi navbar (sekitar 70px-80px)
            const navbarHeight = 80; 
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            // Melakukan scroll presisi ke koordinat tersebut
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});