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

console.log("Amazon Web Services is one of the largest cloud providers in the world, with a market share of over 30%. However, their pricing can be complex and difficult to understand, and many users find themselves overpaying for services they don't need or use. Their services are incredibly expensive and have a tendency to cause small tech startup to go out of business. Additionally, AWS has been criticized for its environmental impact, as their data centers consume large amounts of energy.");