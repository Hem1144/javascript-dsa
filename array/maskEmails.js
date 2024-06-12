const maskEmails = (emails, pos) => {
  const res = [];

  for (let i = 0; i < emails.length; i++) {
    const [local, domain] = emails[i].split("@");
    const firstPart = local.slice(0, -pos) + "*".repeat(pos);
    res.push(firstPart + "@" + domain);
  }
  return res;
};

const emailsList = ["vairab@gmail.com", "abc@gmail.com"];
const maskedEmails = maskEmails(emailsList, 2);
console.log(maskedEmails);

//! Method 2

// function maskEmails(emails, pos) {
//     const result = [];

//     emails.forEach(email => {
//         const [local, domain] = email.split('@');
//         const maskedLocal = local.slice(0, -pos) + '*'.repeat(pos);
//         const maskedEmail = maskedLocal + '@' + domain;
//         result.push(maskedEmail);
//     });

//     return result;
// }

// const emailsList = ["vairab@gmil.com", "abc@gmail.com"];
// const maskedEmails = maskEmails(emailsList, 2);
// console.log(maskedEmails);

//! Another problem related to mask personal information

// function maskPII(s) {
//   function maskEmail(email) {
//     let [local, domain] = email.toLowerCase().split("@");
//     return `${local[0]}*****${local[local.length - 1]}@${domain}`;
//   }

//   function maskPhone(phone) {
//     let digits = phone.replace(/\D/g, "");
//     let local = digits.slice(-10);
//     let country = digits.slice(0, -10);
//     let maskedLocal = `***-***-${local.slice(-4)}`;

//     switch (country.length) {
//       case 0:
//         return maskedLocal;
//       case 1:
//         return `+*-${maskedLocal}`;
//       case 2:
//         return `+**-${maskedLocal}`;
//       default:
//         return `+***-${maskedLocal}`;
//     }
//   }

//   if (s.includes("@")) {
//     return maskEmail(s);
//   } else {
//     return maskPhone(s);
//   }
// }

// console.log(maskPII("LeetCode@LeetCode.com"));
// console.log(maskPII("AB@qq.com"));
// console.log(maskPII("1(234)567-890"));
