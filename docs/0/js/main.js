window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
    marked.setOptions({async:true, gfm:true, breaks:true})
//    marked.use()
    const res = await fetch(`md/test.md`)
    const html = await marked.parse(await res.text())
    document.getElementById('content').innerHTML = html
});
window.addEventListener('beforeunload', async(event) => {
    console.log('beforeunload!!');
});

