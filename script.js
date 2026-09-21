document.addEventListener('DOMContentLoaded', () => {
    const weekGrid = document.getElementById('week-grid');
    const currentActiveWeek = 11; 
    const totalWeeks = 17;
    const githubBaseUrl = "https://github.com/pattaradanais151/Modern-Web-ENGSE611/tree/main";
    let cardsHtml = '';
    for (let i = 1; i <= totalWeeks; i++) {
        const weekNum = i.toString().padStart(2, '0');
        const isActive = i <= currentActiveWeek;
        const tryItLink = isActive ? `Try-it/Week-${weekNum}/index.html` : `#`;
        const labsLink = isActive ? `Labs/Week-${weekNum}/index.html` : `#`;
        const sourceCodeLink = isActive ? `${githubBaseUrl}/Labs/Week-${weekNum}` : `#`;
        
        const btnTryClass = isActive ? `btn outline` : `btn outline disabled`;
        const btnLabClass = isActive ? `btn` : `btn disabled`;
        const btnSourceClass = isActive ? `btn github-btn` : `btn disabled`;
        const badgeHtml = isActive 
            ? `<span class="badge active">Available</span>` 
            : `<span class="badge upcoming">Coming Soon</span>`;
        const highlightClass = (i === currentActiveWeek) ? 'highlight' : '';
        cardsHtml += `
            <article class="card ${highlightClass}">
                <div class="card-header">
                    <h3>Week ${weekNum}</h3>
                    ${badgeHtml}
                </div>
                <div class="card-body">
                    <div class="link-group">
                        <a href="${tryItLink}" class="${btnTryClass}" ${!isActive ? 'onclick="return false;"' : ''}>
                            Try-it (ลองทำ)
                        </a>
                        <a href="${labsLink}" class="${btnLabClass}" ${!isActive ? 'onclick="return false;"' : ''}>
                            Labs (งานที่สั่ง)
                        </a>
                        <a href="${sourceCodeLink}" target="_blank" class="${btnSourceClass}" ${!isActive ? 'onclick="return false;"' : ''}>
                            Source Code (GitHub)
                        </a>
                    </div>
                </div>
            </article>
        `;
    }
    weekGrid.innerHTML = cardsHtml;
});