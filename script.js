


// =========================
// 기본 이동 함수
// =========================
function navigateToStory(storyPage) {
    window.location.href = storyPage;
}

function navigateToNextStory(nextStory) {
    window.location.href = nextStory;
}

function startLaptopStory() {
    window.location.href = 'laptop/laptop.html';
}

function startSpyStory() {
    window.location.href = 'spy/spy.html';
}

function startExamStory() {
    window.location.href = 'exam/exam.html';
}


// =========================
// Passcode 입력 유틸
// =========================
function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}

function emptyInput() {
    const ids = ['ist','sec','third','fourth','fifth','sixth'];
    ids.forEach(id => {
        if (document.getElementById(id)) document.getElementById(id).value = '';
    });
    if (document.getElementById('ist')) document.getElementById('ist').focus();
}


// =========================
// 입력값 가져오기
// =========================
function get2() {
    return document.getElementById('ist').value +
           document.getElementById('sec').value;
}

function get3() {
    return document.getElementById('ist').value +
           document.getElementById('sec').value +
           document.getElementById('third').value;
}

function get4() {
    return document.getElementById('ist').value +
           document.getElementById('sec').value +
           document.getElementById('third').value +
           document.getElementById('fourth').value;
}

function get5() {
    return document.getElementById('ist').value +
           document.getElementById('sec').value +
           document.getElementById('third').value +
           document.getElementById('fourth').value +
           document.getElementById('fifth').value;
}


// =========================
// Wrong Answer Handler
// =========================
function wrong4() { alert("비밀번호가 잘못되었습니다."); emptyInput(); }
function wrong3() { alert("비밀번호가 잘못되었습니다."); emptyInput(); }
function wrong2() { alert("비밀번호가 잘못되었습니다."); emptyInput(); }
function wrong5() { alert("비밀번호가 잘못되었습니다."); emptyInput(); }


// =========================
// Spy Story
// =========================
function checkPasscodeSs1() {
    var v = get4();
    if (v === '0344') navigateToNextStory('spy-story-2.html');
    else wrong4();
}

function checkPasscodeSs2() {
    var v = get4();
    if (v === '1122') navigateToNextStory('spy-story-3.html');
    else wrong4();
}

function checkPasscodeSs4() {
    var v = get4();
    if (!v) return;

    var num = Number(v);
    if (isNaN(num)) { alert("숫자만 입력해주세요!"); return; }

    if (Math.abs(num - 7871) <= 100) {
        navigateToNextStory('spy-story-5.html');
    } else {
        wrong4();
    }
}

function checkPasscodeSs7() {
    var raw = document.getElementById('passcodeSs7').value.trim();
    var cleaned = raw.replace(/\s+/g, '')
                     .replace("히브리서", "히브리서")
                     .replace("히브", "히브리서")
                     .replace(/^히/, "히브리서")
                     .replace(/:/g, "장")
                     .replace(/ㅡ|-|\./g, "")
                     .replace(/^히브리서(\d{1,2})장?(\d{1,3})절?$/, "히브리서$1장$2절");

    if (cleaned === "히브리서9장22절") {
        localStorage.setItem('spyCleared','1');
        navigateToNextStory('spy-story-8.html');
    } else {
        alert("비밀번호가 잘못되었습니다.");
        document.getElementById('passcodeSs7').value = '';
    }
}


// =========================
// Laptop Story
// =========================
function checkPasscodeLs1() {
    var v = get3();
    if (v === '출79') navigateToNextStory('laptop-story-2.html');
    else wrong3();
}

function checkPasscodeLs3() {
    var input = document.getElementById('passcodeLs3').value.toUpperCase();
    if (input === 'JOSHUA') navigateToNextStory('laptop-story-4.html');
    else { alert("비밀번호가 잘못되었습니다."); document.getElementById('passcodeLs3').value = ''; }
}

function checkPasscodeLs5() {
    var v = get2();
    if (v === '52') navigateToNextStory('laptop-story-6.html');
    else wrong2();
}

function checkPasscodeLs7() {
    var input = document.getElementById('passcodeLs7').value.toUpperCase();
    if (input === 'NISSI') {
        localStorage.setItem('laptopCleared','1');
        navigateToNextStory('laptop-story-8.html');
    } else {
        alert("비밀번호가 잘못되었습니다.");
        document.getElementById('passcodeLs7').value = '';
    }
}


// =========================
// Exam Story
// =========================
function checkPasscodeEs1() {
    var v = get4();
    if (v === '1522') navigateToNextStory('exam-story-2.html');
    else wrong4();
}

function checkPasscodeEs4() {
    var v = get5();
    if (v.toUpperCase() === 'MARAH') navigateToNextStory('exam-story-5.html');
    else wrong5();
}

function checkPasscodeEs7() {
    var v = document.getElementById('passcodeEs7').value.trim();
    if (v === 'SIN(죄)') navigateToNextStory('exam-story-8.html');
    else { alert("비밀번호가 잘못되었습니다."); document.getElementById('passcodeEs7').value = ''; }
}

function checkPasscodeEs8() {
    var v = get4();
    if (v === '0313') navigateToNextStory('exam-story-9.html');
    else wrong4();
}

function checkPasscodeEs9() {
    var v = document.getElementById('passcodeEs9').value.trim();
    if (v === '한마리양') {
        localStorage.setItem('examCleared','1');
        navigateToNextStory('exam-story-10.html');
    } else { alert("비밀번호가 잘못되었습니다."); document.getElementById('passcodeEs9').value = ''; }
}


// =========================
// Reset Progress
// =========================
function resetProgress() {
    if (!confirm("정말 전체 진행상황을 초기화하시겠습니까?")) return;
    localStorage.removeItem('examCleared');
    localStorage.removeItem('laptopCleared');
    localStorage.removeItem('spyCleared');
    alert("전체 진행상황이 초기화되었습니다!");
    location.reload();
}


// =========================
// Morse
// =========================
function playMorse() {
    document.getElementById("morseSound").play();
}

