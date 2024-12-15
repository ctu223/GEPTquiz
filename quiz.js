// Quiz words
const allWords = [
    { word: "a", options: ["一(個)", "二個", "三個", "四個"], correctAnswer: 0 },
    { word: "A.M.", options: ["上午", "下午", "晚上", "凌晨"], correctAnswer: 0 },
    { word: "ability", options: ["能力", "體力", "精力", "力氣"], correctAnswer: 0 },
    { word: "able", options: ["無能的", "能夠的", "困難的", "簡單的"], correctAnswer: 1 },
    { word: "about", options: ["遠離", "靠近", "大約", "精確"], correctAnswer: 2 },
    { word: "above", options: ["下面", "旁邊", "對面", "上面"], correctAnswer: 3 },
    { word: "abroad", options: ["國內", "國外", "遠方", "近處"], correctAnswer: 1 },
    { word: "absent", options: ["出席的", "缺席的", "準時的", "遲到的"], correctAnswer: 1 },
    { word: "accept", options: ["拒絕", "考慮", "接受", "思考"], correctAnswer: 2 },
    { word: "accident", options: ["計畫", "意外", "活動", "運動"], correctAnswer: 1 },
    { word: "achieve", options: ["放棄", "失敗", "嘗試", "達到"], correctAnswer: 3 },
    { word: "across", options: ["直向", "橫過", "轉彎", "迴轉"], correctAnswer: 1 },
    { word: "act", options: ["思考", "計畫", "表演", "閱讀"], correctAnswer: 2 },
    { word: "action", options: ["想法", "行動", "夢想", "計畫"], correctAnswer: 1 },
    { word: "active", options: ["消極的", "被動的", "活躍的", "安靜的"], correctAnswer: 2 },
    { word: "activity", options: ["休息", "睡眠", "活動", "放鬆"], correctAnswer: 2 },
    { word: "actor", options: ["歌手", "演員", "導演", "作家"], correctAnswer: 1 },
    { word: "actress", options: ["女演員", "女歌手", "女導演", "女作家"], correctAnswer: 0 },
    { word: "actually", options: ["可能", "或許", "也許", "事實上"], correctAnswer: 3 },
    { word: "add", options: ["減少", "加上", "除以", "乘以"], correctAnswer: 1 },
    { word: "Apple", options: ["蘋果", "香蕉", "橘子", "葡萄"], correctAnswer: 0 },
    { word: "Book", options: ["電腦", "書本", "手機", "鉛筆"], correctAnswer: 1 },
    { word: "Cat", options: ["狗", "兔子", "貓", "老鼠"], correctAnswer: 2 },
    { word: "House", options: ["公園", "醫院", "學校", "房子"], correctAnswer: 3 },
    { word: "Water", options: ["水", "茶", "咖啡", "牛奶"], correctAnswer: 0 },
    { word: "anyway", options: ["無論如何", "也許", "或許", "可能"], correctAnswer: 0 },
    { word: "anywhere", options: ["某處", "這裡", "那裡", "任何地方"], correctAnswer: 3 },
    { word: "apartment", options: ["別墅", "公寓", "房子", "大廈"], correctAnswer: 1 },
    { word: "apologize", options: ["感謝", "讚美", "道歉", "批評"], correctAnswer: 2 },
    { word: "appear", options: ["消失", "隱藏", "出現", "遮蔽"], correctAnswer: 2 },
    { word: "appearance", options: ["內在", "性格", "想法", "外表"], correctAnswer: 3 },
    { word: "apple", options: ["蘋果", "橘子", "香蕉", "葡萄"], correctAnswer: 0 },
    { word: "apply", options: ["放棄", "申請", "拒絕", "忽略"], correctAnswer: 1 },
    { word: "appreciate", options: ["討厭", "忽視", "感激", "厭惡"], correctAnswer: 2 },
    { word: "April", options: ["三月", "四月", "五月", "六月"], correctAnswer: 1 },
    { word: "area", options: ["時間", "金錢", "地區", "速度"], correctAnswer: 2 },
    { word: "argue", options: ["討論", "爭吵", "同意", "和解"], correctAnswer: 1 },
    { word: "arm", options: ["腿部", "手臂", "頭部", "腳部"], correctAnswer: 1 },
    { word: "armchair", options: ["木椅", "搖椅", "扶手椅", "板凳"], correctAnswer: 2 },
    { word: "army", options: ["海軍", "空軍", "警察", "陸軍"], correctAnswer: 3 },
    { word: "around", options: ["遠離", "直行", "附近", "離開"], correctAnswer: 2 },
    { word: "arrange", options: ["打亂", "安排", "破壞", "忽視"], correctAnswer: 1 },
    { word: "arrest", options: ["釋放", "逮捕", "表揚", "獎勵"], correctAnswer: 1 },
    { word: "arrive", options: ["離開", "出發", "到達", "返回"], correctAnswer: 2 },
    { word: "art", options: ["科學", "數學", "藝術", "體育"], correctAnswer: 2 },
    { word: "article", options: ["圖片", "文章", "音樂", "影片"], correctAnswer: 1 },
    { word: "artist", options: ["運動員", "商人", "藝術家", "科學家"], correctAnswer: 2 },
    { word: "Asia", options: ["歐洲", "美洲", "非洲", "亞洲"], correctAnswer: 3 },
    { word: "ask", options: ["回答", "詢問", "聆聽", "說話"], correctAnswer: 1 },
    { word: "asleep", options: ["清醒的", "睡著的", "疲倦的", "活躍的"], correctAnswer: 1 },
    { word: "assistant", options: ["老闆", "助理", "客戶", "同事"], correctAnswer: 1 },
    { word: "attack", options: ["防守", "撤退", "攻擊", "投降"], correctAnswer: 2 },
    { word: "attention", options: ["忽視", "注意力", "分心", "走神"], correctAnswer: 1 },
    { word: "audience", options: ["演員", "觀眾", "導演", "工作人員"], correctAnswer: 1 },
    { word: "August", options: ["七月", "八月", "九月", "十月"], correctAnswer: 1 }
];

// Randomly select 10 words for each quiz session
let words = [];
function selectRandomWords() {
    const shuffled = [...allWords].sort(() => 0.5 - Math.random());
    words = shuffled.slice(0, 10);
}

let currentWord = 0;
let score = 0;
let timer;
let timeLeft;

// DOM elements
const wordElement = document.getElementById('word');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const soundButton = document.getElementById('sound-btn');

// Speech synthesis
const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8; // 稍微放慢語速
    speechSynthesis.speak(utterance);
};

// Start timer
function startTimer() {
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(-1); // Time's up, wrong answer
        }
    }, 1000);
}

// Load word
function loadWord() {
    clearInterval(timer);
    const word = words[currentWord];
    wordElement.textContent = word.word;
    
    optionsElement.innerHTML = '';
    word.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });

    resultElement.textContent = '';
    resultElement.className = '';
    
    startTimer();
}

// Handle sound button click
soundButton.addEventListener('click', () => {
    speak(words[currentWord].word);
});

// Check answer
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const correct = selectedIndex === words[currentWord].correctAnswer;
    
    if (selectedIndex === -1) {
        resultElement.textContent = `時間到！正確答案是：${words[currentWord].options[words[currentWord].correctAnswer]}`;
        resultElement.className = 'incorrect';
    } else if (correct) {
        score++;
        resultElement.textContent = '答對了！ 🎉';
        resultElement.className = 'correct';
    } else {
        resultElement.textContent = `答錯了。正確答案是：${words[currentWord].options[words[currentWord].correctAnswer]}`;
        resultElement.className = 'incorrect';
    }

    setTimeout(() => {
        currentWord++;
        if (currentWord < words.length) {
            loadWord();
        } else {
            showFinalScore();
        }
    }, 2000);
}

// Show final score
function showFinalScore() {
    wordElement.style.display = 'none';
    soundButton.style.display = 'none';
    optionsElement.style.display = 'none';
    timerElement.style.display = 'none';
    resultElement.style.display = 'none';
    scoreElement.textContent = `測驗完成！你的得分：${score}/${words.length}`;
}

// Initialize and start the quiz
selectRandomWords();
loadWord();
