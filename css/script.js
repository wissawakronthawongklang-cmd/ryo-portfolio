        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');

        // สลับเปิด/ปิด Sidebar (Mobile)
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            if(sidebar.classList.contains('open')) {
                menuToggle.innerHTML = '✕ Close';
            } else {
                menuToggle.innerHTML = '☰ Menu';
            }
        });

        // คลิกพื้นที่ว่างเพื่อปิดเมนู (Mobile)
        document.querySelector('.main-content').addEventListener('click', () => {
            if(window.innerWidth <= 768 && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                menuToggle.innerHTML = '☰ Menu';
            }
        });

        // ==========================================
        // ฟังก์ชัน Go to Top เมื่อคลิกคำว่า PORTFOLIO
        // ==========================================
        const goToTopBtn = document.getElementById('go-to-top');

        goToTopBtn.addEventListener('click', function(e) {
            e.preventDefault(); // กันไม่ให้หน้ากระตุกไปด้านบนสุดทันที

            // สั่งให้หน้าหลักเลื่อนขึ้นบนสุดอย่างนุ่มนวล
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // (เสริม) ถ้าดูบนมือถือและเมนูเปิดอยู่ ให้ซ่อนเมนูอัตโนมัติเมื่อกดกลับบนสุด
            if(window.innerWidth <= 768 && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                menuToggle.innerHTML = '☰ Menu';
            }
        });