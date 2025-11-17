/* =====================
    Navigation
===================== */

function navigateToStory(storyPage) {
    window.location.href = storyPage;
}

function navigateToNextStory(nextStory) {
    window.location.href = nextStory;
}

/* =====================
    Common Actions
===================== */

function clickEvent(first, last) {
    if (first.value.length) {
        document.getElementById(last).focus();
    }
}

function emptyInput() {
    ['ist', 'sec', 'third', 'fourth', 'fifth', 'sixth'].forEach(id => {
        if (document.getElementById(id)) document.getElementById(id).value = '';
    });

    if (document.getElementById('ist')) {
        document.getElementById('ist').focus();
    }
}

/* =====================
    Spy Story Passcodes
===================== */

function checkPasscodeSs1() {
    let code = ist.value + sec.value + third.value + fourth.value;
    if (code === '0344') navigateToNextStory('spy-story-2.html');
    else wrong();
}

function checkPasscodeSs2() {
    let code = ist.value + sec.value + third.value + fourth.value;
    if (code === '1122') navigateToNextStory('spy-story-3.html');
    else wrong();
}

function checkPasscodeSs4() {
    if (!ist.value || !sec.value || !third.value || !fourth.value) {
        alert("모든 칸을 입력해주세요!");
        return;
    }

    let userNum = Number(ist.value + sec.value + third.value + fourth.value);
    if (isNaN(userNum)) {
        alert("숫자만 입력해주세요!");
        return;
    }

    if (Math.abs(userNum - 7871) <= 100) {
        navigateToNextStory('spy-story-5.html');
    } else wrong();
}

function checkPasscodeSs7() {
    let raw = passcodeSs7.value;
    let cleaned = raw.replace(/\s+/g, '');

    cleaned = cleaned
        .replace("히브리서", "히브리서")
        .replace("히브", "히브리서")
        .replace(/^히/, "히브리서")
        .replace(/:/g, "장")
        .replace(/-/g, "")
        .replace(/\./g, "")
        .replace(/^히브리서(\d{1,2})장?(\d{1,3})절?$/, "히브리서$1장$2절");

    if (cleaned === "히브리서9장22절") {
        localStorage.setItem("spyCleared", "1");
        navigateToNextStory("spy-story-8.html");
    } else wrongText('passcodeSs7');
}

/* =====================
    Laptop Story Passcodes
===================== */

function checkPasscodeLs1() {
    if (ist.value + sec.value + third.value === '출79')
        navigateToNextStory('laptop-story-2.html');
    else wrong();
}

function checkPasscodeLs3() {
    if (passcodeLs3.value.toUpperCase() === 'JOSHUA')
        navigateToNextStory('laptop-story-4.html');
    else wrongText('passcodeLs3');
}

function checkPasscodeLs5() {
    if (ist.value + sec.value === '52')
        navigateToNextStory('laptop-story-6.html');
    else wrong();
}

function checkPasscodeLs7() {
    if (passcodeLs7.value.toUpperCase() === 'NISSI') {
        localStorage.setItem('laptopCleared', '1');
        navigateToNextStory('laptop-story-8.html');
    } else wrongText('passcodeLs7');
}

/* =====================
    Exam Story Passcodes
===================== */

function checkPasscodeEs1() {
    if (ist.value + sec.value + third.value + fourth.value === '1522')
        navigateToNextStory('exam-story-2.html');
    else wrong();
}

function checkPasscodeEs4() {
    if (ist.value + sec.value + third.value + fourth.value + fifth.value === 'MARAH')
        navigateToNextStory('exam-story-5.html');
    else wrong();
}

function checkPasscodeEs7() {
    if (passcodeEs7.value === 'SIN(죄)')
        navigateToNextStory('exam-story-8.html');
    else wrongText('passcodeEs7');
}

function checkPasscodeEs8() {
    if (ist.value + sec.value + third.value + fourth.value === '0313')
        navigateToNextStory('exam-story-9.html');
    else wrong();
}

function checkPasscodeEs9() {
    if (passcodeEs9.value === '한마리양') {
        localStorage.setItem('examCleared', '1');
        navigateToNextStory('exam-story-10.html');
    } else wrongText('passcodeEs9');
}

/* =====================
    CLEAR + Reset
===================== */

function resetProgress() {
    if (!confirm("정말 전체 진행상황을 초기화하시겠습니까?")) return;

    localStorage.removeItem("examCleared");
    localStorage.removeItem("laptopCleared");
    localStorage.removeItem("spyCleared");

    alert("전체 진행상황이 초기화되었습니다!");
    location.reload();
}

/* =====================
    Helpers
===================== */

function wrong() {
    alert("비밀번호가 잘못되었습니다.");
    emptyInput();
}
function wrongText(id) {
    alert("비밀번호가 잘못되었습니다.");
    document.getElementById(id).value = '';
}
