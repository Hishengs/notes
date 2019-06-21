## video

> 在 HTML5 之前，网页上视频播放都是通过 Flash 来实现的。



**标签** <video></video>

> 在 `<video></video>` 标签中间的内容，是针对浏览器不支持此元素时候的降级处理，当目标浏览器不支持 `<video>` 时，显示其中的内容 。



**属性**

- src

  > src 视频的 URL

- autoplay

  > 准备就绪后是否自动播放

- loop

  > 是否循环播放

- preload

  > 是否对视频预加载
  >
  > - none 不缓冲
  > - auto 自动缓冲
  > - metadata 仅缓冲文件的元数据

- width

  > 播放器宽度，单位 px

- height

  > 播放器高度，单位 px

- controls

  > 是否显示视频控件，如播放、停止等按钮

- poster

  > 封面图 URL

- muted

  > 是否静音

  

**支持的视频格式** Ogg, MPEG 4, WebM

**格式兼容性**

| 格式     | IE   | Firefox | Opera | Chrome | Safari |
| ------ | ---- | ------- | ----- | ------ | ------ |
| Ogg    | No   | 3.5+    | 10.5+ | 5.0+   | No     |
| MPEG 4 | 9.0+ | No      | No    | 5.0+   | 3.0+   |
| WebM   | No   | 4.0+    | 10.6+ | 6.0+   | No     |



**事件**

**[Media Events](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events)**



**接口及方法**

**[HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)** extends from **[HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)**



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
	"none"(不缓冲), "auto"(自动缓冲), "metadata"(仅缓冲文件的元数据)
├── muted 是否静音
├── preload 是否对音频预加载
├── controls 是否显示音频控件，如播放、停止等按钮
├── volume 音频播放的音量。值从0.0 (无声) 到 1.0 (最大声)
```

**支持的格式** Ogg Vorbis, MP3, Wav

**事件**

**[Media Events](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events)**

**接口及方法**

**[HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)** extends from **[HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)**

**格式兼容性**

|            | IE 9 | Firefox 3.5 | Opera 10.5 | Chrome 3.0 | Safari 3.0 |
| ---------- | ---- | ----------- | ---------- | ---------- | ---------- |
| Ogg Vorbis |      | √           | √          | √          |            |
| MP3        | √    |             |            | √          | √          |
| Wav        |      | √           | √          |            | √          |



### 通用方法

`video` 和 `audio` 都有以下通用的方法（继承自 **[HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)**）：

- canPlayType(type: DOMString)

  > 检测某种类型媒体是否支持播放

- fastSeek(time)

  > 快速移动到指定时间

- load()

  > 将进度重置到开头并重新开始加载

- pause()

  > 暂停播放

- play()

  > 播放或恢复播放



### 通用事件

`video` 和 `audio` 都有以下通用的事件（继承自 **[Media Events](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events)**）：

- abort

  > 播放中断，当播放中的视频重新开始播放时会触发这个事件

- canplay

  > 当有足够的缓冲数据可用于播放时触发，对应的 readyState 为：CAN_PLAY

- canplaythrough

  > 当有足够的缓冲数据可用于 **流畅地 **播放时触发，对应的 readyState 为：CAN_PLAY_THROUGH

- durationchange

- emptied

  > 媒体被清空（初始化）时触发

- ended

  > 播放结束时触发

- error

  > 播放出错时触发

- interruptbegin

- interruptend

- [loadeddata](https://developer.mozilla.org/en-US/docs/Web/Events/loadeddata)

  > 媒体的第一帧已经加载完毕

- [loadedmetadata](https://developer.mozilla.org/en-US/docs/Web/Events/loadedmetadata)

  > 在元数据加载完毕时触发

- [loadstart](https://developer.mozilla.org/en-US/docs/Web/Events/loadstart)

  > 在媒体开始加载时触发

- [pause](https://developer.mozilla.org/en-US/docs/Web/Events/pause)

  > 播放暂停时触发

- [play](https://developer.mozilla.org/en-US/docs/Web/Events/play)

  > 在媒体回放被暂停后再次开始时触发。即，在一次暂停事件后恢复媒体回放

- [playing](https://developer.mozilla.org/en-US/docs/Web/Events/playing)

  > 在媒体开始播放时触发（不论是初次播放、在暂停后恢复、或是在结束后重新开始）

- [progress](https://developer.mozilla.org/en-US/docs/Web/Events/progress)

  > 告知媒体相关部分的下载进度时周期性地触发。有关媒体当前已下载总计的信息可以在元素的buffered属性中获取到

- [ratechange](https://developer.mozilla.org/en-US/docs/Web/Events/ratechange)

  > 在回放速率变化时触发

- [seeked](https://developer.mozilla.org/en-US/docs/Web/Events/seeked)

  > 在跳跃操作完成时触发

- [seeking](https://developer.mozilla.org/en-US/docs/Web/Events/seeking)

  > 在跳跃操作开始时触发

- [stalled](https://developer.mozilla.org/en-US/docs/Web/Events/stalled)

  > 在尝试获取媒体数据，但数据不可用时触发

- [suspend](https://developer.mozilla.org/en-US/docs/Web/Events/suspend)

  > 在媒体资源加载终止时触发，这可能是因为下载已完成或因为其他原因暂停

- [timeupdate](https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate)

- [volumechange](https://developer.mozilla.org/en-US/docs/Web/Events/volumechange)

  > 音量变化时触发

- [waiting](https://developer.mozilla.org/en-US/docs/Web/Events/waiting)

  > 在一个待执行的操作（如回放）因等待另一个操作（如跳跃或下载）被延迟时触发



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