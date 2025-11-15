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


function checkLoginls1() {
    var usernamels1 = document.getElementById('username').value.toLowerCase();
    var passwordls1 = document.getElementById('password').value;
  
    // Combine the username and password into a single string
    var combinedStringls1 = usernamels1 + passwordls1;
  
    // Logic to check the answer
    if (combinedStringls1 === 'listencafe20201221') {
        // Allow access to the next stage
        navigateToNextStory('laptop-story-2.html');
    } else {
        // Display an error message or take other actions
        alert("아이디나 비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
};



let passcodels3 = document.querySelectorAll("passcodeInput");

console.log(passcodels3);

passcodels3.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInputls3 = input, 
            nextInputls3 = input.nextElementSibling, 
            prevInputls3 = input.previousElementSibling;

            if(currentInputls3.value.length > 1){
                currentInputls3.value = "";
                return;
            }

            if(e.key === "Backspace"){
                passcodels3.forEach((input, index2) => {
                    if(index1 <= index2 && prevInputls3){
                        input.setAttribute("disabled", true);
                        currentInputls3.value   = "";
                        prevInputls3.focus();
                        prevInputls3.value = "";
                    }
                })
            }
    });
});

/* window.addEventListener("load", () => passcodels3[0].focus());

button.addEventListener("click", () => {
    let verifyls3 = ""; 
    passcodels3.forEach((input) => {
        verifyls3 += input.value;
    });
    console.log(verify);
}); */

function checkPasscodels3() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;
    var fifth = document.getElementById('fifth').value;
  
    // Combine the username and password into a single string
    var combinedStringls3 = ist + sec + third + fourth + fifth;
    var combinedStringls3Upper = combinedStringls3.toUpperCase();
  
    // Logic to check the answer
    if (combinedStringls3Upper === 'JACOB') {
        // Allow access to the next stage
        navigateToNextStory('laptop-story-4.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
        document.getElementById('fifth').value = '';
    }
};

function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}

function checkPasscodels5() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;
    var fifth = document.getElementById('fifth').value;
  
    // Combine the username and password into a single string
    var combinedStringls5 = ist + sec + third + fourth + fifth;
    var combinedStringls5Upper = combinedStringls5.toUpperCase();
  
    // Logic to check the answer
    if (combinedStringls5Upper === 'PETER') {
        // Allow access to the next stage
        navigateToNextStory('laptop-story-6.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
        document.getElementById('fifth').value = '';
    }
};

function emptyInput() {
    document.getElementById('ist').value = '';
    document.getElementById('sec').value = '';
    document.getElementById('third').value = '';
    document.getElementById('fourth').value = '';
    document.getElementById('fifth').value = '';
    document.getElementById('sixth').value = '';
    document.getElementById('ist').focus()
}

function checkPasscodels6() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;
    var fifth = document.getElementById('fifth').value;
    var sixth = document.getElementById('sixth').value;
  
    // Combine the username and password into a single string
    var combinedStringls6 = ist + sec + third + fourth + fifth + sixth;
  
    // Logic to check the answer
    if (combinedStringls6 === '624985') {
        // Allow access to the next stage
        navigateToNextStory('laptop-story-7.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
        document.getElementById('fifth').value = '';
        document.getElementById('sixth').value = '';
    }
};

function checkPasscodels8() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;

    // Combine the username and password into a single string
    var combinedStringls8 = ist + sec + third + fourth;

    // Logic to check the answer
    if (combinedStringls8 === '5938') {
        // Allow access to the next stage
        navigateToNextStory('laptop-story-9.html');
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

function checkPasscodels9() {
    var passcodels9 = document.getElementById('last-hint').value;

    if (passcodels9 === '범인은 나사장이야' || passcodels9 === '범인은나사장이야' || passcodels9 === '범인은 나사장이야 ') {
        navigateToNextStory('laptop-story-10.html');
    } else {
        alert("비밀번호가 잘못되었습니다.");
        document.getElementById('last-hint').value =''
    }
}

function checkPasscodeSs1() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;

    // Combine the username and password into a single string
    var combinedStringSs1 = ist + sec + third + fourth;

    // Logic to check the answer
    if (combinedStringSs1 === '2314') {
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

function checkPasscodeSs3() {
    var passcodeSs3 = document.getElementById('passcodeSs3').value;

    if (passcodeSs3 === '야망회') {
        navigateToNextStory('spy-story-4.html');
    } else {
        alert("비밀번호가 잘못되었습니다.");
        document.getElementById('passcodeSs3').value =''
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

function checkPasscodeSs4() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;
    var fifth = document.getElementById('fifth').value;

    // Combine the username and password into a single string
    var combinedStringSs4 = ist + sec + third + fourth + fifth;
    var combinedStringSs4Upper = combinedStringSs4.toUpperCase();

    // Logic to check the answer
    if (combinedStringSs4Upper === 'CHAIR') {
        // Allow access to the next stage
        navigateToNextStory('spy-story-5.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
        document.getElementById('fifth').value = '';
    }
};

function checkPasscodeSs5() {
    var passcodeSs5 = document.getElementById('passcodeSs5').value;

    if (passcodeSs5 === '기술 산업자 후원자 명단' || passcodeSs5 === '기술산업자후원자명단' || passcodeSs5 === '기술산업자 후원자 명단' || passcodeSs5 === '기술 산업자 후원자명단') {
        navigateToNextStory('spy-story-5-2.html');
    } else {
        alert("비밀번호가 잘못되었습니다.");
        document.getElementById('passcodeSs5').value =''
    }
};

function checkPasscodeSs6() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;
    var fifth = document.getElementById('fifth').value;
    var sixth = document.getElementById('sixth').value;

    // Combine the username and password into a single string
    var combinedStringSs6 = ist + sec + third + fourth + fifth + sixth;

    // Logic to check the answer
    if (combinedStringSs6 === '191127') {
        // Allow access to the next stage
        navigateToNextStory('spy-story-7.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
        document.getElementById('fifth').value = '';
        document.getElementById('sixth').value = '';
    }
};

function checkPasscodeSs8() {
    var ist = document.getElementById('ist').value;
    var sec = document.getElementById('sec').value;
    var third = document.getElementById('third').value;
    var fourth = document.getElementById('fourth').value;
    var fifth = document.getElementById('fifth').value;
    var sixth = document.getElementById('sixth').value;

    // Combine the username and password into a single string
    var combinedStringSs8 = ist + sec + third + fourth + fifth + sixth;

    // Logic to check the answer
    if (combinedStringSs8 === '271586') {
        // Allow access to the next stage
        navigateToNextStory('spy-story-9.html');
    } else {
        // Display an error message or take other actions
        alert("비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('ist').value = '';
        document.getElementById('sec').value = '';
        document.getElementById('third').value = '';
        document.getElementById('fourth').value = '';
        document.getElementById('fifth').value = '';
        document.getElementById('sixth').value = '';
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
    var combinedStringEs1 = ist + sec + third + fourth + fifth;

    // Logic to check the answer
    if (combinedStringEs1 === 'MARAH') {
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
        doocument.getElementbyId('fifth').value ='';
    }
}; 

function onlyLetters(input) {
    // allow only A–Z letters and automatically uppercase
    input.value = input.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
};
