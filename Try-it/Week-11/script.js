function runDemo() {
    console.clear();
    const output = [];

    let studentName = 'สมชาย';
    let age = 20;
    let isStudent = true;
    const universityName = 'มหาวิทยาลัยเทคโนโลยี';
    
    output.push("ชื่อ: " + studentName);
    console.log("ชื่อ:", studentName);
    output.push("อายุ: " + age);
    console.log("อายุ:", age);

    age = 21;
    output.push("อายุใหม่: " + age);
    console.log("อายุใหม่:", age);

    try {
        universityName = 'มหาวิทยาลัยใหม่'; 
    } catch (e) {
        output.push("Error: " + e.message);
        console.error(e.message); 
    }

    document.getElementById("outputBox").textContent = output.join("\n");
}