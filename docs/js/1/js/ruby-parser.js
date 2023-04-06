//export default class EmParser {
//class RubyParser {
class _RubyParser {
//  #REGEX = /《《([^\n]{1,50}?)》》/g;
    // 以下だとABC《えびし》もルビが振られてしまう
    //#REGEX = /(?:((?:[一-龠々仝〆〇ヶ]|[-_@0-9a-zA-Z]|[—―＿＠０-９Ａ-Ｚａ-ｚ])+)|[|｜]([^｜《》\n\r]+))《([^｜《》\n\r]+)》/g;
    #REGEX_SHORT = /([一-龠々仝〆〇ヶ]{1,50})《([^|｜《》\n\r]{1,20})》/g; // 漢字《かんじ》
    #REGEX_LONG = /[|｜]([^一-龠々仝〆〇ヶ|｜《》\n\r]{1,50})《([^|｜《》\n\r]{1,20})》/g; // ｜ABC《えーびーしー》
    format(rb, rt) { return `<ruby>${rb}<rp>（</rp><rt>${rt}</rt><rp>）</rp></ruby>`; }
    parse(text) {
        text = text.replace(this.#REGEX_LONG, (match, rb, rt)=>{
            console.debug('ruby', rb, rt)
            return this.format(rb, rt)
        });
        return text.replace(this.#REGEX_SHORT, (match, rb, rt)=>{
            console.debug('ruby', rb, rt)
            return this.format(rb, rt)
        });
    }
}
RubyParser = new _RubyParser()
//export default RubyParser = new RubyParser()

