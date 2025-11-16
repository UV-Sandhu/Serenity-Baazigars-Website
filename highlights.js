// List your video clips here
const highlightVideos = [
    { file: 'highlights_videos/video1.mp4'},
    { file: 'highlights_videos/video2.mp4'},
    { file: 'highlights_videos/video3.mp4'},
    { file: 'highlights_videos/video4.mp4'},
    { file: 'highlights_videos/video5.mp4'},
    { file: 'highlights_videos/video6.mp4'},
    { file: 'highlights_videos/video7.mp4'},
    { file: 'highlights_videos/video8.mp4'},
    { file: 'highlights_videos/video9.mp4'},
    { file: 'highlights_videos/video10.mp4'},
    { file: 'highlights_videos/video11.mp4'},
    { file: 'highlights_videos/video12.mp4'},
    { file: 'highlights_videos/video13.mp4'},
    { file: 'highlights_videos/video14.mp4'},
    { file: 'highlights_videos/video15.mp4'},
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
    `;
    card.onclick = function() {
        const mvideo = document.getElementById('modalShortsVideo');
        mvideo.src = item.file;
        mvideo.play();
        document.getElementById('modalShortsTitle').textContent = ""; // No title
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
