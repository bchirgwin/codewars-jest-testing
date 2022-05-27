const generateBC = require('./breadcrumb-gen');


describe('breadcrumb generator', ()=> {

    it('should parse url', () => {
        expect(generateBC('mysite.com/pictures/holidays.html')).toEqual(['mysite.com', 'pictures','holidays.html'])
    });

    it('should parse url', () => {
        expect(generateBC('mysite.com/songs/holidays.html')).toEqual(['mysite.com', 'songs','holidays.html'])
    });


})


//  generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
// generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
// generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'