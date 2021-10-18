
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.control-btn')
const tabNav = $$('.navbar-item')
const songList = $('.song-list')
const songList2 = $('.song-list2')
const playBtn = $('.btn-toggle-play')
const audio = $('#audio')
const mymuicSection = $$('.mymusic-section')
const heading = $('.music-textname h3')
const sub = $('.music-textname p')
const cdThumb = $('.music-img')
const progress = $('.progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const repeatBtn = $('.btn-repeat')
const randomBtn = $('.btn-random')

tabNav.forEach(function(tab, index) {
    var mymusic = mymuicSection[index]
    tab.onclick = function() {
        const tabActive = $('.navbar-item.active')
        const mymusicActive = $('.mymusic-section.active')
        tabActive.classList.remove('active')
        mymusicActive.classList.remove('active')

        tab.classList.add('active')
        mymusic.classList.add('active')
    }
})

const app = {
    currentIndex: 0, // lấy ra chỉ mục đầu tiên của mảng
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name:'Tiếng hét nghĩa tình',
            singer: 'Đăng Quý',
            path: './assets/ListMusic/song1.mp3',
            image: './assets/img/song1.jpg'
        },
        {
            name:'Nhớ lời cha mẹ dặn',
            singer: 'Cao Trung',
            path: './assets/ListMusic/song2.mp3',
            image: './assets/img/song2.jpg'
        },
        {
            name:'Nếu một ngày',
            singer: 'Reddy',
            path: './assets/ListMusic/song3.mp3',
            image: './assets/img/song3.jpg'
        },
        {
            name:'Kiếp đỏ đen',
            singer: 'Duy Mạnh',
            path: './assets/ListMusic/song4.mp3',
            image: './assets/img/song4.jpg'
        },
        {
            name:'Gửi tình yêu nhỏ',
            singer: 'Trịnh Đình Quang',
            path: './assets/ListMusic/song5.mp3',
            image: './assets/img/song5.jpg'
        },
        {
            name:'Em xứng đáng bình yên',
            singer: 'Xuân Đức',
            path: './assets/ListMusic/song6.mp3',
            image: './assets/img/song6.jpg'
        },
        {
            name:'Đâu còn đây',
            singer: 'Lee Ken, NaI',
            path: './assets/ListMusic/song7.mp3',
            image: './assets/img/song7.jpg'
        },
        {
            name:'Cưới thôi',
            singer: 'Masew, Masiu',
            path: './assets/ListMusic/song8.mp3',
            image: './assets/img/song8.jpg'
        },
        {
            name:'Có anh ở đây rồi',
            singer: 'Anh Quân Idol',
            path: './assets/ListMusic/song9.mp3',
            image: './assets/img/song9.jpg'
        },
        {
            name:'Chia cách bình yên',
            singer: 'Quốc Thiên',
            path: './assets/ListMusic/song10.mp3',
            image: './assets/img/song10.jpg'
        },
        {
            name:'Kém duyên',
            singer: 'Rum, NIT, Masew',
            path: './assets/ListMusic/song11.mp3',
            image: './assets/img/song11.jpg'
        },
        {
            name:'Cứ ngỡ(Edm remix)',
            singer: 'NB3 Hoài Bảo, Hoàng Ly',
            path: './assets/ListMusic/song12.mp3',
            image: './assets/img/song12.jpg'
        },
        {
            name:'Có duyên không nợ remix',
            singer: 'NB3 Hoài Bảo',
            path: './assets/ListMusic/song13.mp3',
            image: './assets/img/song13.jpg'
        },
        {
            name:'Người lạ thoáng qua',
            singer: 'Thương Võ',
            path: './assets/ListMusic/song14.mp3',
            image: './assets/img/song14.jpg'
        },
        {
            name:'Yêu đừng sợ đau remix',
            singer: 'Ngô Lan Hương',
            path: './assets/ListMusic/song15.mp3',
            image: './assets/img/song15.jpg'
        },
        {
            name:'Thay Lòng',
            singer: 'Đại Mèo',
            path: './assets/ListMusic/song16.mp3',
            image: './assets/img/song16.jpg'
        },
        {
            name:'Tình thương phu thê',
            singer: 'Thái Học',
            path: './assets/ListMusic/song17.mp3',
            image: './assets/img/song17.jpg'
        },
        {
            name:'Anh lại một mình',
            singer: 'Keyo',
            path: './assets/ListMusic/song18.mp3',
            image: './assets/img/song18.jpg'
        },
        {
            name:'Đừng bắt anh mạnh mẽ',
            singer: 'Hồ Quang Hiếu',
            path: './assets/ListMusic/song19.mp3',
            image: './assets/img/song19.jpg'
        },
        {
            name:'Phận duyên lỡ làng',
            singer: 'Phát Huy T4, Truzg',
            path: './assets/ListMusic/song20.mp3',
            image: './assets/img/song20.jpg'
        },
        {
            name:'Dạ Vũ',
            singer: 'Tăng Duy Tân x Phong Max',
            path: './assets/ListMusic/song21.mp3',
            image: './assets/img/song21.jpg'
        },
        {
            name:'Chưa bao giờ em quên',
            singer: 'Hương Ly',
            path: './assets/ListMusic/song22.mp3',
            image: './assets/img/song22.jpg'
        },
        
    ],

    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
             <div class="playlist ${index === this.currentIndex ? 'active': ''}" data-index = "${index}">
                <div class="playlist-left">
                    <div class="playlist-info">
                        <div class="playlist-thumb" style="background-image: url('${song.image}')">
                        </div>
                        <div class="playlist-name">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                        </div>
                    </div>                                     
                </div>
                <div class="playlist-content">
                    <div class="song-time">
                            05:22
                    </div>
                </div>
                <div class="playlist-right">
                    <i class="ti-microphone-alt"></i>
                    <i class="ti-heart"></i>
                    <i class="ti-more-alt"></i>
                </div>           
            </div>
            `
        })
        songList.innerHTML = htmls.join('')
        songList2.innerHTML = htmls.join('')
    },
    defineProperies: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this = this
        //Xử lý CD quay/dừng
        const cdThumAnimate = cdThumb.animate([
            {transform:'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumAnimate.pause()
         //Xử lý khi click nút play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                _this.isPlaying = false
                audio.pause()
                player.classList.remove('playing')
                cdThumAnimate.pause()
            } 
            else {
                _this.isPlaying = true
                audio.play()
                player.classList.add('playing')
                cdThumAnimate.play()
            }

        }
        //Lắng nghe hành vi click vào songList
        songList.onclick = function(e) {
            //console.log(e.target)
            const songNode = e.target.closest('.playlist:not(.active)')
            if(songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.render()
                audio.play()
                player.classList.add('playing')
                cdThumAnimate.play()

            }
        }
        songList2.onclick = function(e) {
            const songNode = e.target.closest('.playlist:not(.active)')
            if(songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.render()
                audio.play()
                player.classList.add('playing')
                cdThumAnimate.play()

            }
        }
        //Khi tiến độ bài hát thay đổi : ontimeupdate
        audio.ontimeupdate = function() {
            if(audio.duration) { 
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        //Xử lý khi tua bài hát
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100*e.target.value
            audio.currentTime = seekTime
        }
        //Khi next bài
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render() 
        }
        //khi prev bài
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()
        }
        //xử lý bật / tắt random
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }
        //Xử lý lặp lại 1 bài
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }
        //Xử lý next bài hát khi audio ended
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click() 
            }
        }
        
    },
    loadCurrentSong: function() {
        //console.log(heading, sub,cdThumb)
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0      
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1      
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    start:function() {
        //Định nghĩa các thuộc tính cho object
        this.defineProperies()
        //Lắng nghe xử lý các sự kiện
        this.handleEvents()
        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()
        //render lại songlist
        this.render()
    }

}
app.start()

