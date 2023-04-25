const root = document.getElementById("root");
const agreeQuestionsArr = [];
const questTitle = document.querySelector(".quest-title");
const questH3 = document.querySelector("h3");
const variantFlex = document.querySelector(".variants-flex");
const variant = document.querySelectorAll(".variants-variant");
let index = 0;
const agreeQuestion = [
    "1939",
    "Alaq",
    "Temurlang",
    "Neptun",
    "Xamza ibn abd al-muttalib",
    "<photo></photo>",
    "10 kun",
    "Steve Jobs",
    "Xalid ibn Al-Valid",
    "1991",
];

const questions = [
    {
        id: 1,
        question: "2 chi Jahon urushi nechinchi yil boshlangan?",
        variants: {
            a: "1914",
            b: "1945",
            c: agreeQuestion[0],
            d: "1929",
        },
        agree: false,
    },
    {
        id: 2,
        question: "Payg'ambarimiz s.a.v ga nozil bo'lgan birinchi sura qaysi?",
        variants: {
            a: agreeQuestion[1],
            b: "Fotiha",
            c: "Al-haqqoh",
            d: "Mudassir",
        },
        agree: false,
    },
    {
        id: 3,
        question: "Amir Temurning laqabi nima bo'lgan?",
        variants: {
            a: "asad(sher)",
            b: "Yengilmas",
            c: "Shoxlar Shoxi",
            d: agreeQuestion[2],
        },
        agree: false,
    },
    {
        id: 4,
        question: "Qaysi planetada olmosdan b'lgan yomg'ir yog'adi?",
        variants: {
            a: agreeQuestion[3],
            b: "Saturn",
            c: "venera",
            d: "Mars",
        },
        agree: false,
    },
    {
        id: 5,
        question:
            "Allohning sheri (Asadullah) laqabi qaysi sahobiyga tegishli?",
        variants: {
            a: "Ali ibn Abu Tolib",
            b: agreeQuestion[4],
            c: "Abu Bakr Siddiq",
            d: "Usmon ibn Affon",
        },
        agree: false,
    },
    {
        id: 6,
        question: "Bularning qaysi biri HTML teg emas?",
        variants: {
            a: "<abbr></abbr>",
            b: "<marquee></marquee>",
            c: agreeQuestion[5],
            d: "<q></q>",
        },
        agree: false,
    },
    {
        id: 7,
        question: "qancha vaqtda JavaScript dasturlash tili ishlab chiqilgan?",
        variants: {
            a: "1 yil",
            b: agreeQuestion[6],
            c: "3 oy",
            d: "8 oy",
        },
        agree: false,
    },
    {
        id: 8,
        question: "Apple kompaniyasining asoschisi kim?",
        variants: {
            a: agreeQuestion[7],
            b: "Ilon Mask",
            c: "Mark Zuckerberg",
            d: "Bill Geyts",
        },
        agree: false,
    },
    {
        id: 9,
        question: "Allohning qilichi unvonini olgan sahobiy kim?",
        variants: {
            a: "Hasan ibn Ali",
            b: agreeQuestion[8],
            c: "Umar ibn Hattob",
            d: "Abu Hurayra",
        },
        agree: false,
    },
    {
        id: 10,
        question: "O'zbekiston qaysi yili mustaqillikga erishgan?",
        variants: {
            a: "1988",
            b: "1991",
            c: "1994",
            d: "1989",
        },
        agree: false,
    },
];

variantFlex.onclick = (e) => {
    if (index < 9) {
        if (e.target.className === "variants-variant") {
            if (agreeQuestion.includes(e.target.textContent))
                agreeQuestionsArr.push(e.target.textContent);
            index++;
            questTitle.textContent = `Savol: ${index + 1}`;
            questH3.textContent = questions[index].question;
            variant[0].textContent = questions[index].variants.a;
            variant[1].textContent = questions[index].variants.b;
            variant[2].textContent = questions[index].variants.c;
            variant[3].textContent = questions[index].variants.d;
        }
    } else {
        root.innerHTML = `
        <div class="end">
        <span>To'g'ri javoblar soni ${agreeQuestionsArr.length + 1}<span>
        <button class="refresh" onclick="location.reload()">Refresh</button>
        </div>
        `;
    }
    console.log(index);
};
