// ฟังก์ชันเปิด Modal รายละเอียด
function openDetailsModal() {
    document.getElementById('detailsModal').style.display = 'flex';
}

// ฟังก์ชันปิด Modal รายละเอียด
function closeDetailsModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

// ปิด Modal เมื่อคลิกที่พื้นหลัง
window.onclick = function(event) {
    const detailsModal = document.getElementById('detailsModal');
    if (event.target === detailsModal) {
        closeDetailsModal();
    }
}

// เปิด Modal แผนที่
function openMapModal() {
    document.getElementById('mapModal').style.display = 'flex';
}

// ปิด Modal แผนที่
function closeMapModal() {
    document.getElementById('mapModal').style.display = 'none';
}


// ฟังก์ชันวันที่และเวลาปัจจุบัน
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('th-TH', options);
    const formattedTime = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('current-date-time').textContent = `${formattedDate} ${formattedTime}`;
}

setInterval(updateDateTime, 1000);

// ฟังก์ชันปิดระบบ
function closeSystem() {
    if (confirm("คุณต้องการปิดระบบหรือไม่?")) {
        window.close();
    }
}

// ฟังก์ชันติดตั้งแอป
let deferredPrompt;
function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    } else {
        alert("การติดตั้งเว็บไซต์ไม่พร้อมใช้งานในขณะนี้");
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}

// ฟังก์ชันพิมพ์หน้าเว็บไซต์
function printPage() {
    window.print();
}