const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	  {
        name: '幻化成风',
        artist: '动漫原声',
        url: 'http://www.ytmp3.cn/down/51356.mp3',
        cover: 'http://img.ytmp3.cn/image/45.jpg',
      },
      {
        name: "山外小楼夜听雨",
        artist: '任然',
        url: 'http://www.ytmp3.cn/down/51529.mp3',
        cover: 'http://img.ytmp3.cn/image/14.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});