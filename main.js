var aws = document.getElementById('hero-maintext');
aws.addEventListener("mouseover", function() {
    aws.textContent = "Start losing money with Automatic Wealth Siphoning today";
});
aws.addEventListener("mouseout", function() {
    aws.textContent = "Start losing money with AWS today";
});

var leftButton = document.querySelector('.left-button');
leftButton.addEventListener("click", function() {
    alert("Congratulations! You've just taken the first step towards financial ruin with AWS's overpriced and convoluted services. Enjoy the journey to bankruptcy!");
});

var rightButton = document.querySelector('.right-button');
rightButton.addEventListener("click", function() {
    alert("You've successfully contacted our greedy salesmen! Prepare for an onslaught of pushy calls, confusing pricing models, and relentless upselling that will leave your head spinning and your wallet empty. Welcome to the world of AWS!");
});