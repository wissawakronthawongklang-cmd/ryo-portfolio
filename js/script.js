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

        function playVideo(cardElement) {
            // 1. รีเซ็ตการแสดงผลการ์ดอื่นๆ ทั้งหมด
            const allCards = document.querySelectorAll('.video-card');
            allCards.forEach(card => {
                if (card !== cardElement) {
                    card.classList.remove('playing');
                    const iframe = card.querySelector('iframe');
                    const poster = card.querySelector('.video-poster');
                    const playBtn = card.querySelector('.play-button');

                    iframe.src = ""; 
                    poster.style.display = "block";
                    playBtn.style.display = "flex";
                }
            });

            // 2. เปิดใช้งานการ์ดที่ถูกคลิก
            cardElement.classList.add('playing');
            const iframe = cardElement.querySelector('iframe');
            const poster = cardElement.querySelector('.video-poster');
            const playBtn = cardElement.querySelector('.play-button');

            const dataSrc = iframe.getAttribute('data-src');
            if (iframe.src === "" || !iframe.src.includes(dataSrc)) {
                iframe.src = dataSrc + "?autoplay=1";
            }

            // ซ่อนภาพปกและปุ่ม Play
            poster.style.display = "none";
            playBtn.style.display = "none";
            
        }