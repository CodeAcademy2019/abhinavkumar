console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);


function html(sentence,name,comment) {

    
    name = name.replace(/&/g, '&amp;');
    name = name.replace(/>/g, '&gt;');
    name = name.replace(/'/g, '&apos;');
    name = name.replace(/"/g, '&quot;');
    name = name.replace(/</g, '&lt;');
    

    comment = comment.replace(/&/g, '&amp;');
    comment = comment.replace(/'/g, '&apos;');
    comment = comment.replace(/</g, '&lt;');
    comment = comment.replace(/"/g, '&quot;');
    comment = comment.replace(/>/g, '&gt;');
    
    return `${sentence[0]}${name}${sentence[1]}${comment}${sentence[2]}`;
}

module.exports = html;



















