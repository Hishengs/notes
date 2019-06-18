## video

> 在 HTML5 之前，网页上视频播放都是通过 Flash 来实现的。



**标签** <video></video>

> 在 `<video></video>` 标签中间的内容，是针对浏览器不支持此元素时候的降级处理。

**属性**

```
├── src 视频的 URL
├── autoplay 准备就绪后是否自动播放
├── loop 是否循环播放
├── preload 是否对视频预加载
	"none"(不缓冲), "auto"(不缓冲), "metadata"(仅缓冲文件的元数据)
├── width 播放器宽度
├── height 播放器高度
├── controls 是否显示视频控件，如播放、停止等按钮
├── poster 封面图
├── muted 是否静音
```

**支持的视频格式** Ogg, MPEG 4, WebM

**兼容性**

| 格式     | IE   | Firefox | Opera | Chrome | Safari |
| ------ | ---- | ------- | ----- | ------ | ------ |
| Ogg    | No   | 3.5+    | 10.5+ | 5.0+   | No     |
| MPEG 4 | 9.0+ | No      | No    | 5.0+   | 3.0+   |
| WebM   | No   | 4.0+    | 10.6+ | 6.0+   | No     |

**事件**

<https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events>

**DOM 接口**

**HTMLVideoElement** https://developer.mozilla.org/zh-CN/docs/DOM/HTMLVideoElement

**提供可选视频源**

> 可以通过 <source> 标签为同一个视频提供多个视频源，供浏览器选择支持的格式

```html
<video controls>
  <source src="myVideo.mp4" type="video/mp4">
  <source src="myVideo.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="myVideo.mp4">link to the video</a> instead.</p>
</video>
```

参考：<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video>



## audio

**标签** <audio></audio>

**属性**

```
├── src 音频的 URL
├── autoplay 准备就绪后是否自动播放
├── loop 是否循环播放
├── preload 是否对视频预加载
	"none"(不缓冲), "auto"(不缓冲), "metadata"(仅缓冲文件的元数据)
├── muted 是否静音
├── preload 是否对音频预加载
├── controls 是否显示音频控件，如播放、停止等按钮
├── volume 音频播放的音量。值从0.0 (无声) 到 1.0 (最大声)
```

**支持的格式** Ogg Vorbis, MP3, Wav

**事件**

https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

**接口**

**[HTMLAudioElement](<https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLAudioElement>)**

**兼容性**

|            | IE 9 | Firefox 3.5 | Opera 10.5 | Chrome 3.0 | Safari 3.0 |
| ---------- | ---- | ----------- | ---------- | ---------- | ---------- |
| Ogg Vorbis |      | √           | √          | √          |            |
| MP3        | √    |             |            | √          | √          |
| Wav        |      | √           | √          |            | √          |



### Track

> 通过 <track> 标签为音视频提供字幕文件

```html
<video controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>
```

**属性**

```
├── kind 字幕类型，包括 subtitles, captions, descriptions, chapters, metadata
├── srclang track 字幕脚本的语言
├── src track 的地址
├── label track 标志标签
```

**接口**

**[HTMLTrackElement](<https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement>)**



**[WebVTT](<https://developer.mozilla.org/en-US/docs/Web/API/Web_Video_Text_Tracks_Format>)**

Web Video Text Track

字幕文件



**subtitle**

人物对白字幕



**captions**

解释性字幕