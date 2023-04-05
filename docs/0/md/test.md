<!---
title: Markdownのパースをテストする
summary: 
description: 
series: 
categories: ['', '']
tags: ['', '']
dates: yyyy-mm-ddT00:00:00, yyyy-mm-ddT00:00:00, yyyy-mm-ddT00:00:00
slug: 
-->

# Markdownのパースをテストする

これは日本語《にほんご》です。

これは｜HTML《はいぱーてきすとまーくあっぷらんげーじ》です。

# 情報源《じょうほうげん》

ライブラリ|概要
----------|----
[marked.js][]|MarkdownをHTMLに変換する

規格|概要
----|----
[CommonMark][]|最小限のMarkdown規格
[GMF][]|[CommonMark][]を拡張した（テーブル、タスクリスト、取り消し線、自動リンク）

[marked.js]:https://marked.js.org/
[CommonMark]:https://spec.commonmark.org/
[GMF]:https://github.github.com/gfm/

# 構文

## インライン要素

### br

１行目
２行目

### em

\*で囲んだ*ここを強調*する。

### strong

\*\*で囲んだ**ここを強調**する。

### code-span

\`で囲んだ`ここをフラグメント化`する。

<a id="link"></a>
### [a](#link)

<!--
* [URLそのまま](#destination-link)
* [インライン型](#inline-link)
* [リファレンス型](#reference-link)
	* [shortcut](#shortcut-reference-link)
	* [collapsed](#collapsed-reference-link)
	* [full](full-reference-link)
-->
<!--
<table>
<tr><th colspan="2">Type</th><th>Markdown</th><th>HTML</th><th>表示結果</th></tr>
<tr><th colspan="2">destination</th><td></td><td></td><td></td></tr>
<tr><th colspan="2">inline</th><td></td><td></td><td></td></tr>
<tr><th rowspan="3">reference</th><th>full</th><td></td><td></td><td></td></tr>
<tr><th>collapsed</th><td></td><td></td><td></td></tr>
<tr><th>shortcut</th><td></td><td></td><td></td></tr>
</table>

<table>
<tr><th colspan="2">Type</th><th>Markdown</th><th>表示結果</th></tr>
<tr><th colspan="2">destination</th><td></td><td></td></tr>
<tr><th colspan="2">inline</th><td></td><td></td></tr>
<tr><th rowspan="3">reference</th><th>full</th><td></td><td></td></tr>
<tr><th>collapsed</th><td></td><td></td></tr>
<tr><th>shortcut</th><td></td><td></td></tr>
</table>
-->

<table>
<tr><th colspan="2">Type</th><th>Markdown</th><th>表示結果</th></tr>
<tr><th colspan="2">destination</th>
<td>

```markdown a-i-m-format.md
<URL>
```
---
```markdown a-d-m-example.md
<https://spec.commonmark.org/0.30/#link-destination>
```

</td>
<td>

<https://spec.commonmark.org/0.30/#link-destination>
<https://spec.commonmark.org/0.30/#autolink>

</td>
</tr>

<tr><th colspan="2">inline</th>
<td>

```markdown a-i-format.md
[TEXT](URL)
```
---
```markdown a-i-example.md
[inline](https://spec.commonmark.org/0.30/#inline-link)
```

</td>
<td>

[inline](https://spec.commonmark.org/0.30/#inline-link)

</td>
</tr>

<tr><th rowspan="3">reference</th><th>full</th>
<td>

```markdown a-f-format.md
[TEXT][ID]

[ID]:URL
```
---
```markdown a-f-example.md
[full reference link][FULL]

[FULL]:https://spec.commonmark.org/0.30/#full-reference-link
```

</td>
<td>

[full reference link][FULL]

[FULL]:https://spec.commonmark.org/0.30/#full-reference-link

</td>
</tr>

<tr><th>collapsed</th>
<td>

```markdown a-c-format.md
[ID][]

[ID]:URL
```
---
```markdown a-c-example.md
[collapsed][]

[collapsed]:https://spec.commonmark.org/0.30/#collapsed-reference-link
```

</td>
<td>

[collapsed][]

[collapsed]:https://spec.commonmark.org/0.30/#collapsed-reference-link

</td>
</tr>

<tr><th>shortcut</th>
<td>

```markdown a-s-format.md
[ID]

[ID]:URL
```
---
```markdown a-s-example.md
[shortcut]

[shortcut]:https://spec.commonmark.org/0.30/#shortcut-reference-link
```

</td>
<td>

[shortcut]

[shortcut]:https://spec.commonmark.org/0.30/#shortcut-reference-link

</td>
</tr>
</table>

### img

<table>
<tr><th colspan="2">Type</th><th>Markdown</th><th>表示結果</th></tr>
<tr><th colspan="2">inline</th>
<td>

```markdown a-i-format.md
![alt属性値](URL)
```
---
```markdown a-i-example.md
![some-image](asset/image/pexels-timo-volz-3643714_1071x1606-min.jpg)
```

</td>
<td>

![some-image](asset/image/pexels-timo-volz-3643714_1071x1606-min.jpg)

</td>
</tr>

<tr><th rowspan="3">reference</th><th>full</th>
<td>

```markdown a-f-format.md
![alt属性値][ID]

[ID]:URL
```
---
```markdown a-f-example.md
![alt属性値][some-image-0]

[some-image-0]:asset/image/pexels-timo-volz-3643714_1071x1606-min.jpg
```

</td>
<td>

![alt属性値][some-image-0]

[some-image-0]:asset/image/pexels-timo-volz-3643714_1071x1606-min.jpg

</td>
</tr>

<tr><th>collapsed</th>
<td>

```markdown a-c-format.md
![ID][]

[ID]:URL
```
---
```markdown a-c-example.md
![some-image-1][]

[some-image-1]:asset/image/pexels-timo-volz-3643714_1071x1606-min.jpg
```

</td>
<td>

![some-image-1][]

[some-image-1]:asset/image/pexels-timo-volz-3643714_1071x1606-min.jpg

</td>
</tr>

<tr><th>shortcut</th>
<td>

```markdown a-s-format.md
![ID]

[ID]:URL
```
---
```markdown a-s-example.md
![some-image-2]

[some-image-2]:asset/image/pexels-timo-volz-3643714_1071x1606-min.jpg
```

</td>
<td>

![some-image-2]

[some-image-2]:asset/image/pexels-timo-volz-3643714_1071x1606-min.jpg

</td>
</tr>
</table>

### text


## ブロック要素

* 

