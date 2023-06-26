let donateDiv = document.createElement("div");
donateDiv.innerHTML = `
    <!-- Modal -->
    <div class="modal donate-modal hidden">
        <div class="card">
            <h2>Want to help me create more awesome projects?<br />Donate now &hearts;</h2>
            <div class="icon-area">
                <a href="https://www.patreon.com/user?u=35613105" onclick="plausible('patreon')" target="_blank"><i
                        class="fab fa-patreon fa-3x"></i></a>
                <!--<a href=" " onclick="plausible('crypto')" target="_blank"><i
                        class="fab fa-btc fa-3x"></i></a>-->
            </div>
        </div>
    </div>
`;
document.getElementsByTagName("html")[0].appendChild(donateDiv);
let donateBtn = document.getElementById('donate');
let donateModal = document.getElementsByClassName('donate-modal')[0];
donateBtn.onclick = function () {
    donateModal.classList.remove("hidden");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.style.opacity = 0.2;
};

donateModal.onclick = function (evt) {
    if (evt.target == donateModal) {
        donateModal.classList.add("hidden");
        document.body.style.opacity = 1;
    }
};