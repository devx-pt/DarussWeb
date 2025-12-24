function openPopup(id) {
  document.getElementById('popup1').style.display = 'none';
  document.getElementById('popup2').style.display = 'none';
 // เปิดเฉพาะตัวที่กด
  document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

// ลบข้อมูล
function removeStudent(index) {
    students.splice(index, 1);
    saveData();
    render();
}
// โหลดข้อมูลตอนเปิดเว็บ
function login() {
  let user = document.getElementById("login-username").value;
  let pass = document.getElementById("login-password").value;

  // กำหนด user / password ตัวอย่าง
  if (user === "admin" && pass === "1234") {
    // บันทึกสถานะการล็อกอิน
    localStorage.setItem("login", "true");
    window.location.href = "news.html";
  } else {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
}
