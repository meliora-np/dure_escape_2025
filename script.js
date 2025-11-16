function navigateToStory(storyPage) {
    window.location.href = storyPage;
}

function navigateToNextStory(nextStory) {
    window.location.href = nextStory;
}

/* function checkAnswer1() {
    var userInput = document.getElementById('answerInput').value.toLowerCase(); // assuming answers are case-insensitive
    if (userInput === 'correctanswer') {
        // Allow access to the next stage
        window.location.href = 'laptop-story-3.html';
    } else {
        // Display an error message or take other actions
        alert('비밀번호가 맞지 않습니다. 다시 입력해주세요.');
    }
} */

// Function to check user progress and redirect accordingly
/* function checkUserProgress() {
    var userProgress = localStorage.getItem('userProgress');

    if (userProgress === null) {
        // User is at the beginning of the story
        window.location.href = 'index.html';
    } else if (userProgress === 'stage1') {
        // User has completed stage 1, redirect to the next stage
        window.location.href = 'stage2.html';
    } else if (userProgress === 'stage2') {
        // User has completed stage 2, redirect to the next stage
        window.location.href = 'stage3.html';
    } // Add more conditions as needed
}


// Function to update user progress
function updateUserProgress(nextStage) {
    localStorage.setItem('userProgress', nextStage);
} */

function displayResult(message) {
    // Display the result message
    document.getElementById("resultMessage").textContent = message;
}


function startLaptopStory() {
    window.location.href = 'laptop-story-1.html';
}

function startSpyStory() {
    window.location.href = 'spy-story-1.html';
}

function startExamStory() {
    window.location.href = 'exam-story-1.html';
}




function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}

function emptyInput() {
    document.getElementById('ist').value = '';
    document.getElementById('sec').value = '';
    document.getElementById('third').value = '';
    document.getElementById('fourth').value = '';
    document.getElementById('fifth').value = '';
    document.getElementById('sixth').value = '';
    document.getElementById('ist').focus()
};


function checkPasscodeSs1() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;

    // Combine the username and password into a single string
    var combinedStringSs1 = ist + sec + third + fourth;

    // Logic to check the answer
    if (combinedStringSs1 === '0344') {
        // Allow access to the next stage
        navigateToNextStory('spy-story-2.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
    }
};

function checkPasscodeSs2() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;

    // Combine the username and password into a single string
    var combinedStringSs2 = ist + sec + third + fourth;

    // Logic to check the answer
    if (combinedStringSs2 === '1122') {
        // Allow access to the next stage
        navigateToNextStory('spy-story-3.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
    }
};


function checkPasscodeEs7() {
    var passcodeEs7 = document.getElementById('passcodeEs7').value;

    if (passcodeEs7 === 'SIN(죄)') {
        navigateToNextStory('exam-story-8.html');
    } else {
        alert("비밀번호가 잘못되었습니다.");
        document.getElementById('passcodeEs7').value =''
    }
};

function checkPasscodeEs9() {
    var passcodeEs9 = document.getElementById('passcodeEs9').value;

    if (passcodeEs9 === '한마리양') {
        navigateToNextStory('exam-story-10.html');
    } else {
        alert("비밀번호가 잘못되었습니다.");
        document.getElementById('passcodeEs9').value =''
    }
};

function checkPasscodeLs3() {
    var passcodeLs3 = document.getElementById('passcodeLs3').value;
    var passcodeLs3Upper = passcodeLs3.toUpperCase();

    if (passcodeLs3Upper === 'JOSHUA') {
        navigateToNextStory('laptop-story-4.html');
    } else {
        alert("비밀번호가 잘못되었습니다.");
        document.getElementById('passcodeLs3').value = '';
    }
};


function checkPasscodeLs7() {
    var passcodeLs7 = document.getElementById('passcodeLs7').value;
    var passcodeLs7Upper = passcodeLs7.toUpperCase();

    if (passcodeLs7Upper === 'NISSI') {
        navigateToNextStory('laptop-story-8.html');
    } else {
        alert("비밀번호가 잘못되었습니다.");
        document.getElementById('passcodeLs7').value ='';
    }
};

function checkPasscodeLs1() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;

    // Combine the username and password into a single string
    var combinedStringLs1 = ist + sec + third;
    // Logic to check the answer
    if (combinedStringLs1 === '출79') {
        // Allow access to the next stage
        navigateToNextStory('laptop-story-2.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
    }
};

function checkPasscodeLs5() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;

    // Combine the username and password into a single string
    var combinedStringLs5 = ist + sec;
    // Logic to check the answer
    if (combinedStringLs5 === '52') {
        // Allow access to the next stage
        navigateToNextStory('laptop-story-6.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
    }
};


function checkPasscodeEs1() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;

    // Combine the username and password into a single string
    var combinedStringEs1 = ist + sec + third + fourth;

    // Logic to check the answer
    if (combinedStringEs1 === '1522') {
        // Allow access to the next stage
        navigateToNextStory('exam-story-2.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
    }
}; 


function checkPasscodeEs4() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;
    var fifth = document.getElementById('fifth').value;

    // Combine the username and password into a single string
    var combinedStringEs4 = ist + sec + third + fourth + fifth;

    // Logic to check the answer
    if (combinedStringEs4 === 'MARAH') {
        // Allow access to the next stage
        navigateToNextStory('exam-story-5.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
        document.getElementbyId('fifth').value ='';
    }
}; 

function onlyLetters(input) {
    // allow only A–Z letters and automatically uppercase
    input.value = input.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
};

function checkPasscodeEs8() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;

    // Combine the username and password into a single string
    var combinedStringEs8 = ist + sec + third + fourth;

    // Logic to check the answer
    if (combinedStringEs8 === '0313') {
        // Allow access to the next stage
        navigateToNextStory('exam-story-9.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
    }
}; 

function playMorse() {
    document.getElementById("morseSound").play();
}
