## video

> 在 HTML5 之前，网页上视频播放都是通过 Flash 来实现的。



**标签** <video></video>

**属性**

```
├── src 视频的 URL
├── autoplay 准备就绪后是否自动播放
├── loop 是否循环播放
├── preload 是否对视频预加载
├── width 播放器宽度
├── height 播放器高度
├── controls 是否显示视频控件，如播放、停止等按钮
```

**支持的视频格式** Ogg, MPEG 4, WebM

**兼容性**

| 格式     | IE   | Firefox | Opera | Chrome | Safari |
| ------ | ---- | ------- | ----- | ------ | ------ |
| Ogg    | No   | 3.5+    | 10.5+ | 5.0+   | No     |
| MPEG 4 | 9.0+ | No      | No    | 5.0+   | 3.0+   |
| WebM   | No   | 4.0+    | 10.6+ | 6.0+   | No     |

**DOM API**

play() 播放

pause() 暂停



## audio

**标签** <audio></audio>

**属性**

```
├── src 音频的 URL
├── autoplay 准备就绪后是否自动播放
├── loop 是否循环播放
├── preload 是否对音频预加载
├── controls 是否显示音频控件，如播放、停止等按钮
```

**支持的视频格式** Ogg Vorbis, MP3, Wav

**兼容性**

|            | IE 9 | Firefox 3.5 | Opera 10.5 | Chrome 3.0 | Safari 3.0 |
| ---------- | ---- | ----------- | ---------- | ---------- | ---------- |
| Ogg Vorbis |      | √           | √          | √          |            |
| MP3        | √    |             |            | √          | √          |
| Wav        |      | √           | √          |            | √          |