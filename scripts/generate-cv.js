import fs from 'node:fs';
import path from 'node:path';

// Generate a valid minimal PDF 1.4 document containing Navod Lakshitha's CV summary
const content = `BT
/F1 20 Tf
50 750 Td
(Navod Lakshitha - Curriculum Vitae) Tj
/F1 12 Tf
0 -30 Td
(Software Engineer | Full-Stack Developer | Mobile App Developer | IoT Enthusiast) Tj
0 -20 Td
(Location: Colombo, Sri Lanka | Email: navodlakshitha2038@gmail.com | Phone: 0752302180) Tj
0 -20 Td
(GitHub: https://github.com/Ercc201 | LinkedIn: https://linkedin.com/in/navod-lakshitha) Tj
0 -35 Td
(SUMMARY) Tj
/F2 10 Tf
0 -15 Td
(Software Engineering undergraduate with practical experience developing web applications, mobile) Tj
0 -14 Td
(applications, REST API integrations, database-driven systems, and real-time IoT dashboards.) Tj
/F1 12 Tf
0 -30 Td
(EDUCATION) Tj
/F2 10 Tf
0 -15 Td
(- BSc (Hons) Software Engineering (CMU) - In Progress, ICBT Campus, Colombo, 2026-Present) Tj
0 -14 Td
(- Higher Diploma in Computing and Software Engineering (CMU) - Completed, ICBT Campus, Colombo, 2023) Tj
0 -14 Td
(- Foundation Course - Completed, 2022) Tj
/F1 12 Tf
0 -30 Td
(PROFESSIONAL EXPERIENCE) Tj
/F2 10 Tf
0 -15 Td
(Software Engineering Intern | Elevate Integrated Technologies (February - August 2026)) Tj
0 -14 Td
(- Developed responsive web applications using React.js and Tailwind CSS.) Tj
0 -14 Td
(- Built mobile applications using Flutter and Dart.) Tj
0 -14 Td
(- Developed e-commerce systems and corporate websites.) Tj
0 -14 Td
(- Designed IoT dashboards for real-time device monitoring.) Tj
0 -14 Td
(- Integrated REST APIs and external AI services.) Tj
0 -14 Td
(- Worked with PHP, MySQL, ASP.NET, HTML, CSS, JavaScript, and JSON.) Tj
0 -14 Td
(- Tools: GitHub, Postman, MQTT Explorer, VS Code, Android Studio, WebStorm, Visual Studio, etc.) Tj
/F1 12 Tf
0 -30 Td
(PROJECTS) Tj
/F2 10 Tf
0 -15 Td
(- Mobile POS System (Flutter, Dart, PHP, MySQL, REST API, JSON)) Tj
0 -14 Td
(- AI Chatbot Application (Flutter, Dart, DeepSeek API, REST API, JSON, SQLite)) Tj
0 -14 Td
(- E-Commerce Website (HTML5, CSS3, JavaScript, Tailwind CSS, PHP, MySQL)) Tj
0 -14 Td
(- Corporate Company Website (React.js, HTML5, CSS3, JavaScript, Tailwind CSS)) Tj
0 -14 Td
(- IoT Dashboard System (React.js, JavaScript, HTML5, CSS3, Tailwind CSS, REST API, MQTT, HTTP)) Tj
ET`;

const streamLength = Buffer.byteLength(content, 'utf8');

const pdfDoc = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595.28 841.89]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
      /F2 6 0 R
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length ${streamLength}
>>
stream
${content}
endstream
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
000000${(320 + streamLength).toString().padStart(4, '0')} 00000 n 
000000${(400 + streamLength).toString().padStart(4, '0')} 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
${480 + streamLength}
%%EOF`;

const outDir = path.resolve('public/cv');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'Navod_Lakshitha_CV.pdf'), pdfDoc, 'utf8');
console.log('Successfully generated public/cv/Navod_Lakshitha_CV.pdf');

