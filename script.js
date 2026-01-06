// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "About You - 1975",
        artist: "The 1975",
        album: "Being Funny a Foreign Languange",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c",
        audioSrc: "audio/about you - 1975.mp3",
        videoBgSrc: "videos/about_you.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0.8, text: "There was something about you" },
            { time: 2.5, text: "that now I can`t remember" },
            { time: 5, text: "It`s the same damn thing" },
            { time: 7.8, text: "that made my heart surrender" },
            { time: 10.3, text: "And I`ll miss you on a train" },
            { time: 12.5, text: "I`ll miss you in the morning" },
            { time: 16, text: "I never know what to think about, I think about you" },
        ]
    },
    {
        id: 2,
        title: "Kota Ini Tak Sama Tanpamu",
        artist: "Nadhif Basalamah",
        album: "÷ (Nadhif Basalamah)",
        albumArtUrl: "data:image/jpeg;base64,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",
        audioSrc: "audio/Nadhif Basalamah - kota.mp3",
        videoBgSrc: "videos/kota.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0 , text: "Oh, dengan nya dengan dia" },
            { time: 4.5, text: "Langkah ku sempurna" },
            { time: 11.8, text: "Jatuh cinta memang manis" },
            { time: 17.7, text: "Apalagi ada kamu disini" },
            { time: 22.8, text: "Genggam tangan ku sayang" },
            { time: 28.8, text: "Kota ini tak sama tanpamu" },
            { time: 34, text: "Masih rasa ingin lagi" },
            { time: 37, text: "Habiskan waktu disini" },
            { time: 40, text: "Mungkin tiga atau" },
            { time: 42, text: "Empat hari lagi" },
        ]
    },    
    {
        id: 3,
        title: "We can`t be friends",
        artist: "Ariana Grande",
        album: "Eternal Sunshine",
        albumArtUrl: "https://images.genius.com/787345ba18db728c2de68d4e72502728.1000x1000x1.png",
        audioSrc: "audio/Ariana Grande - friends.mp3",
        videoBgSrc: "videos/friends.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 1.5, text: "We can't be friends" },
            { time: 3.9, text: "But i`d like to just pretend" },
            { time: 9, text: "You cling to your papers and pens" },
            { time: 13, text: "Wait until you like me again" },
            { time: 17.8, text: "Wait for your love" },
            { time: 20.8, text: "Lo-Love" },
            { time: 21.9, text: "I`ll wait for your love" },
            { time: 26.5, text: "I`ll wait for your love" },
            { time: 29.8, text: "Lo-Love" },
            { time: 30.8, text: "I`ll wait for your love" },
            { time: 35, text: "Know that you made me" },
            { time: 39.7, text: "I don`t` like how you paint me," },
            { time: 41.9, text: "Yet i`m still here hanging" },
            { time: 44, text: "No what you made me" },
            { time: 48, text: "It`s somethin` like a daydream" },
            { time: 51, text: "But i feel so seen in the night" },
            { time: 55.5, text: "So for now it`s only me" },
            { time: 59.8, text: "And maybe that`s all i need" },
            { time: 62, text: "Wait for your love" },
            { time: 64.8, text: "Lo-Love" },
            { time: 66, text: "I`ll wait for your love" },
            { time: 70.5, text: "I`ll wait for your love" },
            { time: 73.5, text: "Lo-Love" },
            { time: 75, text: "I`ll wait for your love" },
        ]
    },
    {
        id: 4,
        title: "Penjaga Hati",
        artist: "Nadhif Basalamah",
        album: "Nadhif Basalamah",
        albumArtUrl: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2023/11/20/2607602572.jpg",
        audioSrc: "audio/Nadhif Basalamah - penjaga.mp3",
        videoBgSrc: "videos/penjaga.mp4",
        lyrics: [
            { time: 2.9, text: "Karena bersamamu semua terasa indah" },
            { time: 8.5, text: "Gundah gulana hatiku t`lah hancur sirna" },
            { time: 14, text: "Janji ku tak kan ku lepas wahai" },
            { time: 17, text: "Kau bidadariku dari surga" },
            { time: 21, text: "Tuk selamanya" },
            { time: 26.9, text: "Tuk selamanya" },
            { time: 32.2, text: "Tuk selamanya" },
        ]
    },
    {
        id: 5,
        title: "You Da One",
        artist: "Rihanna",
        album: "Talk That Talk",
        albumArtUrl: "data:image/jpeg;base64,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",
        audioSrc: "audio/you.mp3",
        videoBgSrc: "videos/you.mp4",
        lyrics: [
            { time: 0, text: "I`m so happy" },
            { time: 1, text: "You came in my life" },
            { time: 5.2, text: "Cause you know how to give me that" },
            { time: 7, text: "You know how to pull me back" },
            { time: 8.8, text: "When i go runnin, runnin" },
            { time: 10.3, text: "Tryin` to get away from loving ya" },
            { time: 12.3, text: "You know how to love me hard" },
            { time: 14.5, text: "I won`t lie" },
            { time: 15, text: "I`m falling hard" },
            { time: 16., text: "Yep, i`m falling for ya" },
            { time: 17.4, text: "But there`s nothin wrong with that" },
            { time: 19.3, text: "You da one" },
            { time: 20.3, text: "That i dream about all day" },
            { time: 23, text: "You da one" },
            { time: 24, text: "That i think about always" },
            { time: 26.5, text: "You Are The One" },
            { time: 27.3, text: "So I Make Sure I Behave!" },
        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();