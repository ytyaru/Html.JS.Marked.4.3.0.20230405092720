window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
//    marked.use()
    const langs = new Set()
    marked.setOptions({async:true, gfm:true, breaks:true, 
        highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            if (!langs.has(language)) {
                const script = document.createElement('script')
                script.setAttribute('src', `lib/highlight/11.7.0/langs/${language}.min.js`)
                document.body.append(script)
                langs.add(language)
            }
            //console.debug('setOptions.highlight', lang, language, code, hljs.highlight(code, { language }).value)
            return hljs.highlight(code, { language }).value;
        }
    })
    const hooks = { preprocess(markdown) { return RubyParser.parse(markdown) } }
    marked.use({hooks})
//    marked.use({extensions: [getRubyExtension()]})
    const res = await fetch(`md/test.md`)

    const html = await marked.parse(await res.text())
    document.getElementById('content').innerHTML = html
});
window.addEventListener('beforeunload', async(event) => {
    console.log('beforeunload!!');
});

