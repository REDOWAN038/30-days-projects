const scriptURL = process.env.SCRIPTURL;
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    msg.innerHTML = "Processing...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You for Subscribing";
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "An error occurred. Please try again later.";
        })
        .finally(() => {
            setTimeout(() => {
                msg.innerHTML = "";
            }, 4000);
        });
});