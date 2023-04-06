window.addEventListener('DOMContentLoaded', async(event) => {
    const res = await fetch(`md/test.md`)
    const html = await marked.parse(await res.text())
    document.getElementById('content').innerHTML = html
});

