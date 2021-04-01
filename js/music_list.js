const ap = new APlayer({
    container:document.getElementById('aplayer'),
    fixed:true,
    autoplay:true,
    loop:"all",
    
    audio:[{
        name:'龙脊雪山BGM',
        artist:'童嘎',
        url:'http://music.163.com/song/media/outer/url?id=1807478678.mp3',
        cover:'https://cdn.jsdelivr.net/gh/ink-soul/blog_images/cover1.jpg'
    }]
    
})

