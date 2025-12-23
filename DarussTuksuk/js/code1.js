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

