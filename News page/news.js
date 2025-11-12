// news.js -- different preview and modal descriptions

fetch('news.txt')
    .then(response => response.text())
    .then(data => {
        const container = document.getElementById('newsGrid');
        const newsItems = data.trim().split('---').map(block => {
            const item = {};
            block.split('\n').forEach(line => {
                const parts = line.split(":");
                const key = parts[0] ? parts[0].trim() : "";
                const val = parts.slice(1).join(':').trim();
                if (key && val) item[key] = val;
            });
            return item.heading ? item : null;
        }).filter(Boolean);

        newsItems.forEach(news => {
            const imgSrc = news.image || 'default.jpg';
            const box = document.createElement('div');
            box.className = 'news-card';
            box.innerHTML = `
                <img class="news-img" src="${imgSrc}" alt="News Image">
                <div class="news-content">
                    <div class="news-topic">${news.topic || ''}</div>
                    <div class="news-title">${news.heading || ''}</div>
                    <div class="news-desc">${news.content || ''}</div>
                    <div class="news-time">${news.time || ''}</div>
                </div>
            `;
            box.onclick = function() {
                document.getElementById('modalNewsImg').src = imgSrc;
                document.getElementById('modalNewsTitle').textContent = news.heading || '';
                document.getElementById('modalNewsTopic').textContent = news.topic || '';
                document.getElementById('modalNewsTime').textContent = news.time || '';
                document.getElementById('modalNewsDesc').textContent = news.full || ''; // show only full in modal
                document.getElementById('newsModal').style.display = 'flex';
            };
            container.appendChild(box);
        });
    });

// Modal close logic
function closeNewsModal() {
    document.getElementById('newsModal').style.display = 'none';
}
window.onclick = function(e) {
    if (e.target == document.getElementById('newsModal')) closeNewsModal();
};
document.addEventListener('keydown', function(e){
    if (e.key === "Escape") closeNewsModal();
});
