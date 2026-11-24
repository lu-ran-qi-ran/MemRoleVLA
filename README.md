# MemRoleVLA 网页

打开 `index.html` 即可查看。网页为独立静态页面，无需安装依赖。

## 插入一个视频

1. 将视频命名为 `video.mp4`，放入 `assets` 文件夹。
2. 打开 `site-config.js`，将 `videoSrc: ""` 改为 `videoSrc: "assets/video.mp4"`。
3. 刷新页面，预留区域会自动变成带播放控件的视频。

可选：将封面图放入 `assets`，并在 `videoPoster` 中填写相对路径，例如 `assets/poster.jpg`。

## 内容来源

- 页面标题、匿名署名、完整摘要来自提供的 `MemRoleVLA_1121.pdf` 第 1 页。
- 方法图及图注来自第 3 页 Figure 2；图像仅做裁切，没有重绘或修改。
- 实验引导句及结果表来自第 7 页 Section 4.2 / Table 2。结果表保留 Method、Sorting、Food、Drawer、Wiping、Avg. Success (%) 六列；其余两列未展示。图注保留与展示列相关的原文句子。
- 英文正文保留原文，仅合并 PDF 换行断词并恢复数学下标。
- 导航、Paper、Video 和无障碍提示为界面标签。
- `assets/MemRoleVLA.pdf` 是原始 PDF 的完整副本，供 Paper 按钮打开。

## 发布

将本目录内的 `index.html`、`styles.css`、`site-config.js`、`script.js` 及 `assets` 文件夹一起上传到静态网站托管服务即可。支持 GitHub Pages；无需构建步骤。网页没有外部字体、脚本或分析服务依赖。
