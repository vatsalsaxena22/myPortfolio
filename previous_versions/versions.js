let versionElement = document.querySelector('.versions-btn');

versionElement.addEventListener('click', versions = ()=>{
    let versionsHtml = `
    <div class="versions-body">
        <div class="version-heading">
            <h2>Previous Versions</h2>
        </div>
        <div class="v1 v-box">
            <a href="./previous_versions/portfolio_v1.html"><h1>Portfolio v1</h1></a>
        </div>
        <div class="v2 v-box">
            <a href="./previous_versions/portfolio_v2.html"><h1>Portfolio v2</h1></a>
        </div>
        <div class="v3 v-box">
            <a href=""><h1>Portfolio v3</h1></a>
        </div>
    </div>
    `;

    document.body.innerHTML = versionsHtml;
});