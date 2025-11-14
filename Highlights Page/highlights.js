// List your video clips here
const highlightVideos = [
    { file: 'highlights_videos/video1.mp4', title: 'Highlight 1' },
    { file: 'highlights_videos/video2.mp4', title: 'Highlight 2' },
    { file: 'highlights_videos/video3.mp4', title: 'Highlight 3' },
    { file: 'highlights_videos/video4.mp4', title: 'Highlight 4' },
    { file: 'highlights_videos/video5.mp4', title: 'Highlight 5' },
    // Add every file you want to show
];

// Shuffle the videos for randomness
highlightVideos.sort(() => 0.5 - Math.random());

const shortsGrid = document.getElementById('shortsGrid');
highlightVideos.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'shorts-card';
    card.innerHTML = `
        <video src="${item.file}" class="shorts-thumb" muted loop playsinline></video>
        <div class="shorts-title">${item.title || 'Highlight ' + (idx + 1)}</div>
    `;
    card.onclick = function() {
        const mvideo = document.getElementById('modalShortsVideo');
        mvideo.src = item.file;
        mvideo.play();
        document.getElementById('modalShortsTitle').textContent = item.title;
        document.getElementById('shortsModal').style.display = 'flex';
    };
    shortsGrid.appendChild(card);
});

function closeShortsModal() {
    const mvideo = document.getElementById('modalShortsVideo');
    mvideo.pause();
    mvideo.src = '';
    document.getElementById('shortsModal').style.display = 'none';
}
window.onclick = function(e) {
    if (e.target === document.getElementById('shortsModal')) closeShortsModal();
};
document.addEventListener('keydown', function(e){
    if (e.key === "Escape") closeShortsModal();
});
