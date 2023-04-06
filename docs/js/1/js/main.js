window.addEventListener('DOMContentLoaded', async(event) => {
    const langs = new Set()
    mermaid.initialize({startOnLoad: false, securityLevel: 'loose'})
    markmap.autoLoader.manual = true
    marked.setOptions({async:true, gfm:true, breaks:true})
    /*
    marked.setOptions({async:true, gfm:true, breaks:true, 
        highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            if (!langs.has(language)) {
                const script = document.createElement('script')
                script.setAttribute('src', `lib/highlight/11.7.0/langs/${language}.min.js`)
                document.body.append(script)
                langs.add(language)
            }
            return hljs.highlight(code, { language }).value;
        }
    })
    */
    const renderer = new marked.Renderer();
    renderer.code = function (code, language) {
        //if (language in ['mermaid', 'markmap']) { return `<div class="${language}">${code}\n</div>`; }
        if (language == 'mermaid') { return '<div class="mermaid">' + code + '\n</div>'; }  // mermaid.js
        //else if (language == 'markmap') { return '<div class="markmap">' + markmap.autoLoader.renderAll() + '\n</div>'; }
        else if (language == 'markmap') { return '<div class="markmap">' + code + '\n</div>'; }
        else { return '<pre><code>\n' + hljs.highlightAuto(code).value + '\n</code></pre>'; } // highlight.js
    }
    marked.use({ renderer });
    const res = await fetch(`md/test.md`)
    const html = await marked.parse(await res.text())
    document.getElementById('content').innerHTML = html
    mermaid.init();
    markmap.autoLoader.renderAll()
});

