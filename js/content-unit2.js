/* Unit 2 content (HTML, CSS, JavaScript, XML). Keys must match topic titles. */
window.CONTENT=window.CONTENT||{};
CONTENT['HTML Lists']={
intro:'Lists group related items. HTML provides ordered, unordered and description lists, and they can be nested.',
obj:['Choose the right list type','Write ol, ul and dl markup','Nest lists correctly','Control numbering with attributes'],
notes:`<h3>Types of lists</h3><div class="tw"><table><tr><th>List<th>Tags<th>Use</tr><tr><td>Ordered<td>&lt;ol&gt; + &lt;li&gt;<td>Sequence matters (steps, rankings)</tr><tr><td>Unordered<td>&lt;ul&gt; + &lt;li&gt;<td>Order does not matter (features, menus)</tr><tr><td>Description<td>&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;<td>Terms with definitions or name–value pairs</tr></table></div>
<h3>Ordered lists</h3><p>Items are numbered automatically. Useful attributes: <code>type</code> (1, a, A, i, I), <code>start</code> (first number) and <code>reversed</code> (count down).</p>
<h3>Unordered lists</h3><p>Items get bullets. The bullet style (disc, circle, square, none) is normally changed with CSS <code>list-style-type</code>. Navigation menus are commonly built as unordered lists.</p>
<h3>Description lists</h3><p><code>&lt;dt&gt;</code> is the term and <code>&lt;dd&gt;</code> its description; one term can have several descriptions.</p>
<h3>Nested lists</h3><p>A list placed <b>inside an li element</b> becomes a sub-list; the browser indents it and changes the bullet style.</p>
<h3>Example</h3><pre>&lt;ol&gt;
  &lt;li&gt;Write HTML&lt;/li&gt;
  &lt;li&gt;Add CSS
    &lt;ul&gt;&lt;li&gt;Colours&lt;/li&gt;&lt;li&gt;Layout&lt;/li&gt;&lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Add JavaScript&lt;/li&gt;
&lt;/ol&gt;
&lt;dl&gt;
  &lt;dt&gt;HTTP&lt;/dt&gt;&lt;dd&gt;Web transfer protocol&lt;/dd&gt;
&lt;/dl&gt;</pre><p><b>Output:</b> a numbered list 1–3 where item 2 contains a bulleted sub-list, followed by the term "HTTP" with its indented definition. Try it in the playground below.</p>
<h3>Common mistakes</h3><ul><li>Putting text or div directly inside ul/ol; only li (and script/template) are allowed.</li><li>Placing a nested list outside the parent li.</li><li>Using br tags to fake a list.</li></ul>`,
short:['ol = ordered, ul = unordered, dl = description','li holds each item in ol/ul','dl uses dt (term) and dd (description)','ol attributes: type, start, reversed','Nested list goes inside li','Bullet style via CSS list-style-type'],
cards:[['Which tag makes an ordered list?','ol, with li elements for items.'],['Which tag makes a bulleted list?','ul, with li elements for items.'],['What are dl, dt and dd?','Description list, description term and description details.'],['How do you start numbering at 5?','Use the start attribute: <ol start="5">.'],['How do you count an ordered list backwards?','Add the reversed attribute to ol.'],['Where must a nested list be placed?','Inside an li of the parent list.'],['How do you remove bullets?','CSS: list-style-type: none (or list-style: none).'],['When should you choose ol over ul?','When the order of the items matters.']],
quiz:[['Which list shows numbered steps?',['ul','ol','dl','li'],1,'ol numbers its items.'],['Which tag defines a term in a description list?',['dd','dt','dl','li'],1,'dt = description term.'],['Where should a nested ul be placed?',['Inside li','After body','Inside head','Between ol items outside li'],0,'Nested lists belong inside a list item.'],['Which attribute changes the first number of an ol?',['begin','start','from','count'],1,'start sets the first value.'],['What is the best way to remove bullets?',['Delete li','CSS list-style-type: none','Use br','Use dl'],1,'Presentation is controlled with CSS.']],
demo:{html:`<ol start="1">
  <li>Write HTML
    <ul><li>Structure</li><li>Content</li></ul>
  </li>
  <li>Add CSS</li>
</ol>
<dl><dt>DOM</dt><dd>Tree of page elements</dd></dl>`,css:`ul{list-style-type:square}dt{font-weight:bold}`,js:''}};
CONTENT['HTML Tables']={
intro:'Tables present data in rows and columns. They should be used for tabular data, not for page layout.',
obj:['Build tables with table, tr, th and td','Group rows with thead, tbody and tfoot','Merge cells with colspan and rowspan','Make tables accessible'],
notes:`<h3>Table elements</h3><div class="tw"><table><tr><th>Element<th>Purpose</tr><tr><td>&lt;table&gt;<td>Container for the table</tr><tr><td>&lt;caption&gt;<td>Title of the table</tr><tr><td>&lt;tr&gt;<td>Table row</tr><tr><td>&lt;th&gt;<td>Header cell (bold and centred by default)</tr><tr><td>&lt;td&gt;<td>Data cell</tr><tr><td>&lt;thead&gt; &lt;tbody&gt; &lt;tfoot&gt;<td>Header, body and footer row groups</tr></table></div>
<h3>colspan and rowspan</h3><p><code>colspan="n"</code> makes a cell stretch across n columns; <code>rowspan="n"</code> across n rows. The cells that are covered must be left out of the markup, otherwise the table gets extra columns.</p>
<h3>Accessible table markup</h3><ul><li>Add a <code>&lt;caption&gt;</code> that describes the table.</li><li>Use <code>&lt;th scope="col"&gt;</code> or <code>scope="row"</code> so screen readers link data cells to headers.</li><li>Use thead/tbody/tfoot to give structure.</li><li>Do not use tables for layout; use CSS Flexbox or Grid.</li></ul>
<h3>Example</h3><pre>&lt;table&gt;
  &lt;caption&gt;Semester marks&lt;/caption&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th scope="col"&gt;Subject&lt;/th&gt;&lt;th scope="col"&gt;Marks&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Web Technology&lt;/td&gt;&lt;td&gt;85&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;DBMS&lt;/td&gt;&lt;td&gt;78&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;&lt;tr&gt;&lt;td colspan="2"&gt;Total: 163&lt;/td&gt;&lt;/tr&gt;&lt;/tfoot&gt;
&lt;/table&gt;</pre><p><b>Output:</b> a captioned table with a header row, two data rows and a footer cell stretching across both columns. Edit the playground below to try rowspan.</p>
<h3>Styling</h3><p>Use CSS <code>border-collapse: collapse</code> to merge borders, <code>padding</code> for spacing, and wrap wide tables in a scrollable container on small screens.</p>
<h3>Common mistakes</h3><ul><li>Using tables for layout.</li><li>Missing th elements and captions.</li><li>Adding extra td cells after colspan/rowspan, which breaks the grid.</li></ul>`,
short:['table > tr > th/td','thead / tbody / tfoot group rows','colspan = across columns; rowspan = down rows','caption + th scope = accessibility','Tables are for data, not layout','CSS border-collapse removes double borders'],
cards:[['Which tag defines a table row?','tr.'],['Difference between th and td?','th is a header cell (bold, centred, with scope for accessibility); td is a data cell.'],['What does colspan do?','Makes a cell span several columns.'],['What does rowspan do?','Makes a cell span several rows.'],['Purpose of thead, tbody and tfoot?','They group header, body and footer rows for structure, styling and accessibility.'],['Why add a caption?','It gives the table an accessible title describing its content.'],['What does scope="col" mean?','The th is a header for the cells below it in that column.'],['Should tables be used for page layout?','No. Use CSS Flexbox or Grid for layout.']],
quiz:[['Which tag creates a header cell?',['td','th','tr','thead'],1,'th marks header cells.'],['Which attribute merges cells horizontally?',['rowspan','colspan','merge','span'],1,'colspan spans multiple columns.'],['Which element gives a table its title?',['title','head','caption','legend'],2,'caption is the table title.'],['Tables should be used for…',['Page layout','Tabular data','Animations','Forms only'],1,'Use CSS for layout.'],['Which CSS property merges adjacent borders?',['border-merge','border-collapse','table-join','border-join'],1,'border-collapse: collapse.']],
demo:{html:`<table>
  <caption>Timetable</caption>
  <thead><tr><th scope="col">Day</th><th scope="col">Subject</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">Mon</td><td>Web Technology</td></tr>
    <tr><td>DBMS</td></tr>
  </tbody>
</table>`,css:`table{border-collapse:collapse}th,td{border:1px solid #888;padding:6px 10px}`,js:''}};
CONTENT['HTML Images']={
intro:'Images make pages informative and attractive, but they must be described for accessibility and optimised for speed.',
obj:['Use the img element with src and alt','Size images and make them responsive','Use figure and figcaption','Apply accessibility and performance practices'],
notes:`<h3>The img element</h3><p><code>&lt;img&gt;</code> is a void element. <code>src</code> gives the file location (relative path or URL) and <code>alt</code> gives replacement text that is shown if the image fails and read by screen readers. Decorative images use an empty <code>alt=""</code>.</p>
<h3>Size and responsiveness</h3><ul><li>Set <code>width</code> and <code>height</code> so the browser reserves space and the page does not jump while loading.</li><li>Use CSS <code>max-width:100%; height:auto</code> so images shrink on small screens.</li><li><code>srcset</code> and <code>sizes</code> let the browser choose the best file for the screen; <code>&lt;picture&gt;</code> lets you serve different formats or crops.</li></ul>
<h3>figure and figcaption</h3><p><code>&lt;figure&gt;</code> wraps self-contained content (image, diagram, code) and <code>&lt;figcaption&gt;</code> gives it a visible caption.</p>
<h3>Image formats</h3><div class="tw"><table><tr><th>Format<th>Best for<th>Notes</tr><tr><td>JPEG<td>Photographs<td>Lossy, small files, no transparency</tr><tr><td>PNG<td>Screenshots, logos<td>Lossless, transparency</tr><tr><td>GIF<td>Simple animations<td>256 colours</tr><tr><td>SVG<td>Icons, diagrams<td>Vector, scales without loss</tr><tr><td>WebP / AVIF<td>Modern photos and graphics<td>Smaller files than JPEG/PNG</tr></table></div>
<h3>Example</h3><pre>&lt;figure&gt;
  &lt;img src="images/campus.jpg" alt="Main building of the engineering college"
       width="600" height="400" loading="lazy"&gt;
  &lt;figcaption&gt;Fig. 1: Campus main building&lt;/figcaption&gt;
&lt;/figure&gt;</pre><p><b>Output:</b> the picture with its caption below. <code>loading="lazy"</code> delays loading until the image is near the viewport.</p>
<h3>Accessibility and performance</h3><ul><li>Write alt text that conveys purpose, not "image of".</li><li>Compress images and choose the right format.</li><li>Use lazy loading for images below the fold, not for the main banner.</li></ul>
<h3>Common mistakes</h3><ul><li>Missing alt attribute.</li><li>Scaling a huge image down with CSS instead of resizing the file.</li><li>Using images of text.</li></ul>`,
short:['img: src + alt (void element)','alt="" for decorative images','width/height prevent layout shift','srcset/sizes/picture = responsive images','figure + figcaption = captioned content','JPEG photos, PNG lossless, SVG vector, WebP/AVIF modern'],
cards:[['Which attribute gives the image file path?','src.'],['Why is alt important?','It gives text for screen readers and when the image cannot load.'],['What should alt be for a purely decorative image?','An empty value: alt="".'],['What are figure and figcaption?','Elements that group self-contained media with a visible caption.'],['What does loading="lazy" do?','Delays loading the image until it is near the viewport.'],['Why set width and height?','So the browser reserves space and avoids layout shift.'],['What is srcset for?','Offering several image files so the browser picks the best one for the device.'],['Best format for logos that must scale?','SVG (vector).']],
quiz:[['Which attribute provides alternative text?',['title','alt','src','name'],1,'alt is read by screen readers.'],['Which format is lossy and best for photographs?',['PNG','JPEG','SVG','GIF'],1,'JPEG compresses photographs well.'],['Which element adds a caption to an image?',['caption','figcaption','legend','label'],1,'figcaption is used inside figure.'],['CSS to make an image shrink on small screens?',['max-width:100%','float:left','display:none','z-index:1'],0,'max-width:100% with height:auto.'],['Which attribute defers offscreen image loading?',['defer','loading="lazy"','async','preload'],1,'loading="lazy" is built in.']],
demo:{html:`<figure>
  <img alt="Blue rectangle sample" width="160" height="80"
   src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='80'><rect width='160' height='80' fill='%234f46e5'/><text x='80' y='46' fill='white' font-size='16' text-anchor='middle'>Sample</text></svg>">
  <figcaption>Fig. 1: An inline SVG image</figcaption>
</figure>`,css:`img{max-width:100%;height:auto;border-radius:8px}figcaption{font-size:.85rem}`,js:''}};
CONTENT['HTML Forms']={
intro:'Forms collect user input and send it to a server. They combine input controls, labels, built-in validation and a submission method.',
obj:['Build a form with common controls','Use labels and built-in validation','Differentiate GET and POST','Explain the form submission workflow'],
notes:`<h3>The form element</h3><p><code>&lt;form action="/register" method="post"&gt;</code> wraps the controls. <code>action</code> is the URL that receives the data and <code>method</code> is GET or POST. Each control needs a <code>name</code>, because the name becomes the key in the submitted data.</p>
<h3>Controls</h3><div class="tw"><table><tr><th>Control<th>Markup<th>Use</tr><tr><td>Text-like<td>input type=text, email, password, number, date, tel, url<td>Single-line values with type-specific keyboards and checks</tr><tr><td>Radio<td>input type=radio (same name)<td>Choose one option</tr><tr><td>Checkbox<td>input type=checkbox<td>Choose zero or more options</tr><tr><td>Dropdown<td>select + option<td>Choose from a list</tr><tr><td>Textarea<td>textarea<td>Multi-line text</tr><tr><td>Buttons<td>button type=submit / reset<td>Send or clear the form</tr></table></div>
<h3>Labels and placeholders</h3><p>A <code>&lt;label for="id"&gt;</code> linked to an input makes the text clickable and readable by screen readers. A <code>placeholder</code> is only a hint and must not replace the label.</p>
<h3>Built-in validation</h3><ul><li><code>required</code>, <code>minlength</code>, <code>maxlength</code></li><li><code>min</code>, <code>max</code> and <code>step</code> for numbers and dates</li><li><code>pattern</code> with a regular expression; <code>type="email"</code> checks the format.</li></ul><p>Browser validation is a convenience; the server must validate again.</p>
<h3>GET vs POST</h3><div class="tw"><table><tr><th>Feature<th>GET<th>POST</tr><tr><td>Data location<td>URL query string<td>Request body</tr><tr><td>Visible/bookmarkable<td>Yes<td>No</tr><tr><td>Size limit<td>URL length limits<td>Practically larger</tr><tr><td>Use for<td>Search, filters (safe reads)<td>Login, registration, changes</tr><tr><td>Sensitive data<td>Never<td>Yes, with HTTPS</tr></table></div>
<h3>Submission workflow</h3><ol><li>The user fills the form and presses submit.</li><li>The browser validates the constraints; invalid fields block submission.</li><li>It encodes the name=value pairs.</li><li>It sends an HTTP request using the chosen method.</li><li>The server processes the data and returns a page or response.</li></ol>
<h3>Example</h3><pre>&lt;form method="post" action="/enroll"&gt;
  &lt;label for="n"&gt;Name&lt;/label&gt;
  &lt;input id="n" name="name" required&gt;
  &lt;label for="e"&gt;Email&lt;/label&gt;
  &lt;input id="e" name="email" type="email" required&gt;
  &lt;select name="course"&gt;&lt;option&gt;CSE&lt;/option&gt;&lt;option&gt;ECE&lt;/option&gt;&lt;/select&gt;
  &lt;button type="submit"&gt;Enroll&lt;/button&gt;
&lt;/form&gt;</pre><p><b>Result:</b> the browser asks for name and a valid email, then sends <code>name=...&amp;email=...&amp;course=CSE</code>. The playground below shows the collected data on screen instead of posting it.</p>
<h3>Common mistakes</h3><ul><li>Missing name attributes (the field is not sent).</li><li>Radio buttons with different names (not grouped).</li><li>Sending passwords with GET.</li><li>Relying only on client-side validation.</li></ul>`,
short:['form: action + method (GET/POST)','name attribute = key of submitted data','label for=id links text and input','Validation: required, pattern, min/max, type=email','Radio: same name; checkbox: multiple values','GET = URL, visible; POST = body, for sensitive/changing data'],
cards:[['What does the action attribute do?','It specifies the URL that receives the submitted form data.'],['GET vs POST?','GET appends data to the URL for safe reads; POST sends it in the body for changes and sensitive data.'],['Why must inputs have a name?','Only named controls are submitted; the name is the data key.'],['What is a label for?','It describes an input, enlarges the click target and helps screen readers.'],['Which attribute makes a field mandatory?','required.'],['How do you group radio buttons?','Give them the same name attribute.'],['Is placeholder a replacement for label?','No. It is only a hint and disappears when typing.'],['Why validate again on the server?','Client-side checks can be bypassed; the server must verify all input.']],
quiz:[['Which attribute sets the HTTP method of a form?',['action','method','type','target'],1,'method is GET or POST.'],['Which input type checks e-mail format?',['text','mail','email','url'],2,'type="email" has built-in validation.'],['What makes a set of radio buttons mutually exclusive?',['Same id','Same name','Same value','Same class'],1,'Radios with the same name form one group.'],['Which method puts data in the URL?',['POST','GET','PUT','DELETE'],1,'GET uses the query string.'],['A field without a name attribute…',['Is submitted twice','Is not submitted','Is encrypted','Is required'],1,'Unnamed controls are skipped.']],
demo:{html:`<form id="f">
  <label for="n">Name</label> <input id="n" name="name" required><br>
  <label for="e">Email</label> <input id="e" name="email" type="email" required><br>
  <label><input type="radio" name="lvl" value="UG" checked> UG</label>
  <label><input type="radio" name="lvl" value="PG"> PG</label><br>
  <select name="course"><option>CSE</option><option>ECE</option></select>
  <button type="submit">Submit</button>
</form>
<pre id="out">Fill the form and submit.</pre>`,css:`input,select{margin:3px}pre{background:#eef;padding:6px}`,js:`document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  var d=Object.fromEntries(new FormData(e.target));
  document.getElementById('out').textContent=JSON.stringify(d,null,2);
});`}};
CONTENT['HTML Frames and Iframes']={
intro:'Frames split a window into independent documents. Old frameset pages are obsolete, but the iframe element is still used to embed other pages.',
obj:['Describe historical frames and framesets','Explain why they were removed in HTML5','Use iframe with src, title and sandbox','Identify iframe security risks'],
notes:`<h3>Historical frames and framesets</h3><p>HTML 4 used <code>&lt;frameset&gt;</code> instead of body to divide the window into rows and columns, and each <code>&lt;frame&gt;</code> loaded a separate document, typically a fixed menu beside a content area. <code>&lt;noframes&gt;</code> gave fallback text.</p><pre>&lt;frameset cols="25%,75%"&gt;
  &lt;frame src="menu.html"&gt;
  &lt;frame src="content.html"&gt;
&lt;/frameset&gt;</pre>
<h3>Why frames are obsolete in HTML5</h3><ul><li>The URL in the address bar did not show the real page, so bookmarking and sharing broke.</li><li>The back button and printing behaved unpredictably.</li><li>Poor accessibility for screen readers and poor search engine indexing.</li><li>Awkward on mobile screens. Layouts are now built with CSS, and shared menus with server templates or JavaScript components.</li></ul>
<h3>Modern iframe usage</h3><p><code>&lt;iframe&gt;</code> embeds another HTML document inside the page, for maps, videos, payment forms and widgets.</p><pre>&lt;iframe src="https://example.com/widget" title="Course widget"
        width="400" height="300" loading="lazy"
        sandbox="allow-scripts"&gt;&lt;/iframe&gt;</pre>
<div class="tw"><table><tr><th>Attribute<th>Purpose</tr><tr><td>src / srcdoc<td>URL of the page, or inline HTML</tr><tr><td>title<td>Accessible name (required for accessibility)</tr><tr><td>loading<td>lazy loads when near the viewport</tr><tr><td>sandbox<td>Restricts what the embedded page may do</tr><tr><td>allow<td>Grants features such as fullscreen or camera</tr></table></div>
<h3>Security considerations</h3><ul><li><b>Untrusted content:</b> embed only trusted sources and always add <code>sandbox</code>, enabling only the permissions needed (avoid combining allow-scripts with allow-same-origin for untrusted pages).</li><li><b>Clickjacking:</b> attackers can frame your site invisibly. Protect pages with the <code>Content-Security-Policy: frame-ancestors</code> header (or X-Frame-Options).</li><li><b>Same-origin policy</b> limits scripts from reading across frames of different origins.</li><li>Third-party frames may track users; use <code>referrerpolicy</code> and permissions carefully.</li></ul><p>This site\'s playground uses a sandboxed iframe in the same way.</p>
<h3>Common mistakes</h3><ul><li>Using framesets in new pages.</li><li>Omitting title on iframes.</li><li>Embedding unknown sites without sandbox.</li></ul>`,
short:['frameset/frame/noframes = HTML 4, removed in HTML5','Problems: bookmarking, back button, SEO, accessibility','iframe embeds another document: src, title, loading, sandbox, allow','sandbox restricts scripts, forms, popups','Clickjacking defence: CSP frame-ancestors / X-Frame-Options','Use CSS layouts instead of frames'],
cards:[['What was a frameset?','An HTML 4 element that divided the browser window into several frames, each showing a separate document.'],['Why were frames removed in HTML5?','They broke bookmarking and navigation, hurt accessibility and SEO, and suit modern layouts poorly.'],['What does iframe do?','Embeds another HTML document inside the current page.'],['What does the sandbox attribute do?','It applies restrictions to the embedded content, which you relax only with specific allow- tokens.'],['What is clickjacking?','Tricking users into clicking a hidden framed page; defended with CSP frame-ancestors or X-Frame-Options.'],['Why give an iframe a title?','It provides an accessible name for assistive technology.'],['Name three common iframe uses.','Embedded maps, videos and third-party widgets such as payment forms.'],['What replaced frames for layouts?','CSS (Flexbox, Grid) and server or JavaScript templating.']],
quiz:[['Which element replaced body in HTML 4 framed pages?',['frameset','iframe','section','layout'],0,'frameset defined the frame layout.'],['Frames are obsolete mainly because…',['They were too fast','They harmed navigation, accessibility and bookmarking','They need a plugin','They do not use HTTP'],1,'The page URL did not reflect what was shown.'],['Which attribute restricts an embedded page\'s abilities?',['sandbox','secure','allow-all','lock'],0,'sandbox applies a restrictive policy.'],['Clickjacking is mitigated by…',['frame-ancestors / X-Frame-Options','Larger fonts','Using GET','Base64'],0,'These headers control who can frame your page.'],['Which attribute provides an iframe\'s accessible name?',['name','alt','title','label'],2,'Use title to describe the frame.']],
demo:{html:`<iframe title="Inner page" sandbox width="300" height="100"
  srcdoc="&lt;h3&gt;Inside an iframe&lt;/h3&gt;&lt;p&gt;This page is sandboxed.&lt;/p&gt;"></iframe>`,css:`iframe{border:2px solid #4f46e5;border-radius:8px}`,js:''}};
CONTENT['Cascading Style Sheets (CSS)']={
intro:'CSS controls how HTML looks: colours, fonts, spacing and layout. It separates presentation from structure so one stylesheet can style many pages.',
obj:['Apply inline, internal and external CSS','Write selectors and calculate specificity','Explain the box model','Use Flexbox, Grid, positioning and media queries'],
notes:`<h3>Ways to add CSS</h3><div class="tw"><table><tr><th>Method<th>Where<th>Use</tr><tr><td>Inline<td>style attribute on an element<td>One-off tweaks; hard to maintain</tr><tr><td>Internal<td>&lt;style&gt; in head<td>Single page</tr><tr><td>External<td>&lt;link rel="stylesheet" href="style.css"&gt;<td>Best: reusable and cacheable</tr></table></div>
<h3>Syntax and selectors</h3><pre>selector { property: value; }
p { color: #333; }          /* type */
.note { margin: 1rem; }     /* class */
#top { font-size: 2rem; }   /* id */
nav a:hover { color: red; } /* descendant + pseudo-class */</pre><p>Other selectors: child <code>ul &gt; li</code>, attribute <code>input[type="text"]</code>, groups <code>h1, h2</code>.</p>
<h3>Specificity and cascade</h3><p>When rules conflict, the browser compares <b>specificity</b>: inline style &gt; id &gt; class/attribute/pseudo-class &gt; element. If equal, the later rule wins; <code>!important</code> overrides but should be avoided. Some properties (colour, font) are <b>inherited</b> by children.</p>
<h3>Box model</h3><figure><svg viewBox="0 0 300 190" role="img" aria-label="CSS box model: content inside padding inside border inside margin"><g fill="none" stroke="currentColor"><rect x="5" y="5" width="290" height="180" rx="4" stroke-dasharray="5 4"/><rect x="40" y="35" width="220" height="120"/><rect x="70" y="60" width="160" height="70" stroke-dasharray="2 3"/><rect x="100" y="80" width="100" height="30"/></g><g fill="currentColor" font-size="12" text-anchor="middle"><text x="150" y="22">Margin</text><text x="150" y="52">Border</text><text x="150" y="76">Padding</text><text x="150" y="99">Content</text></g></svg><figcaption>Every element is a box: content, then padding, border and margin. With <code>box-sizing:border-box</code>, width includes padding and border.</figcaption></figure>
<h3>Colours, fonts, margins, padding, borders</h3><p>Colours: names, hex (#4f46e5), rgb(), hsl(). Fonts: <code>font-family</code>, <code>font-size</code>, <code>font-weight</code>, <code>line-height</code>. Spacing: <code>margin</code> outside the border, <code>padding</code> inside; <code>border: 1px solid #ccc</code>.</p>
<h3>Layout: Flexbox and Grid</h3><div class="tw"><table><tr><th>Feature<th>Flexbox<th>Grid</tr><tr><td>Dimension<td>One-dimensional (row or column)<td>Two-dimensional (rows and columns)</tr><tr><td>Key properties<td>display:flex; justify-content; align-items; gap<td>display:grid; grid-template-columns; gap</tr><tr><td>Best for<td>Navbars, toolbars, aligning items<td>Page layouts, card galleries</tr></table></div>
<h3>Positioning</h3><ul><li><b>static</b> (default), <b>relative</b> (offset from its normal place), <b>absolute</b> (relative to nearest positioned ancestor), <b>fixed</b> (relative to viewport), <b>sticky</b> (switches between relative and fixed on scroll).</li></ul>
<h3>Responsive design</h3><p>Use the viewport meta tag, flexible units (%, rem, fr), flexible images and <b>media queries</b>: <code>@media (max-width: 600px) { ... }</code> to adapt layout. Design mobile-first, then add rules for larger screens.</p>
<h3>Common mistakes</h3><ul><li>Forgetting that margins collapse vertically.</li><li>Overusing !important and ids, which makes overriding hard.</li><li>Using fixed pixel widths that overflow small screens.</li></ul>`,
short:['CSS = presentation; inline < internal < external for maintainability','Specificity: inline > id > class > element','Box model: content + padding + border + margin; use border-box','Flexbox = 1D; Grid = 2D','Positions: static, relative, absolute, fixed, sticky','Responsive: viewport meta + media queries + flexible units'],
cards:[['What does CSS stand for?','Cascading Style Sheets.'],['Three ways to add CSS?','Inline (style attribute), internal (style element) and external (linked .css file).'],['Which rule wins: id selector or class selector?','The id selector, because it has higher specificity.'],['Name the CSS box model layers.','Content, padding, border and margin (inside to outside).'],['What does box-sizing: border-box do?','Makes width and height include padding and border.'],['Flexbox vs Grid?','Flexbox lays out items in one dimension; Grid handles rows and columns together.'],['What is position: absolute relative to?','The nearest ancestor that has a position other than static.'],['What is a media query?','A rule that applies styles only when conditions such as screen width are met.']],
quiz:[['Which CSS method is best for many pages?',['Inline','Internal','External','None'],2,'An external file is reusable and cacheable.'],['Which selector has the highest specificity?',['Element','Class','Id','Universal'],2,'Id beats class and element.'],['Order from inside to outside in the box model:',['Margin, border, padding, content','Content, padding, border, margin','Content, border, padding, margin','Padding, content, margin, border'],1,'Content is innermost, margin outermost.'],['Which property turns on Flexbox?',['display:flex','position:flex','flex:on','layout:flex'],0,'display:flex creates a flex container.'],['Which makes a layout adapt to screen width?',['@media query','@import','!important','z-index'],0,'Media queries apply conditional styles.']],
demo:{html:`<div class="row"><div class="box">1</div><div class="box">2</div><div class="box">3</div></div>`,css:`*{box-sizing:border-box}
.row{display:flex;justify-content:space-between;gap:8px;padding:10px;border:2px solid #4f46e5}
.box{flex:1;padding:16px;margin:4px;background:#c7d2fe;text-align:center;border-radius:8px}
@media (max-width:300px){.row{flex-direction:column}}`,js:''}};
CONTENT['JavaScript Fundamentals']={
intro:'JavaScript is the programming language of the browser. It makes pages interactive by reacting to events, changing the DOM and validating input.',
obj:['Declare variables and use data types and operators','Write functions, arrays and objects','Handle events and manipulate the DOM','Validate a form on the client side'],
notes:`<h3>Introduction</h3><p>JavaScript (JS) is a lightweight, interpreted (JIT-compiled), dynamically typed language that runs in the browser and also on servers (Node.js). It is added with <code>&lt;script src="app.js"&gt;&lt;/script&gt;</code>, usually at the end of body or with <code>defer</code>.</p>
<figure><svg viewBox="0 0 560 140" role="img" aria-label="HTML, CSS and JavaScript all act on the DOM to produce the rendered page"><g fill="none" stroke="currentColor"><rect x="20" y="8" width="160" height="46" rx="8"/><rect x="200" y="8" width="160" height="46" rx="8"/><rect x="380" y="8" width="160" height="46" rx="8"/><rect x="130" y="92" width="300" height="40" rx="8"/><path d="M100 54L180 92M280 54V92M460 54L380 92"/></g><g fill="currentColor" font-size="12" text-anchor="middle"><text x="100" y="28">HTML</text><text x="100" y="44">structure</text><text x="280" y="28">CSS</text><text x="280" y="44">presentation</text><text x="460" y="28">JavaScript</text><text x="460" y="44">behaviour</text><text x="280" y="116">DOM → rendered, interactive page</text></g></svg><figcaption>HTML builds the DOM, CSS styles it and JavaScript changes both in response to user actions.</figcaption></figure>
<h3>Variables and data types</h3><p>Use <code>let</code> (changeable) and <code>const</code> (cannot be reassigned); avoid <code>var</code>. Primitive types: number, string, boolean, null, undefined, symbol, bigint; everything else is an object (arrays, functions, dates). <code>typeof</code> reveals the type.</p>
<h3>Operators and control statements</h3><ul><li>Arithmetic <code>+ - * / % **</code>, comparison <code>=== !==</code> (strict; prefer over <code>==</code>), logical <code>&amp;&amp; || !</code>.</li><li>Decisions: <code>if / else if / else</code>, <code>switch</code>, ternary <code>a ? b : c</code>.</li><li>Loops: <code>for</code>, <code>while</code>, <code>for...of</code>.</li></ul>
<h3>Functions, arrays and objects</h3><pre>function area(w, h) { return w * h; }
const double = n =&gt; n * 2;            // arrow function
const marks = [70, 85, 90];
const best = Math.max(...marks);        // 90
const student = { name: "Asha", cgpa: 8.7 };
const names = marks.map(double);        // [140, 170, 180]</pre>
<h3>Events and DOM manipulation</h3><p>An <b>event</b> (click, input, submit, keydown) triggers a handler. The <b>DOM</b> lets scripts select and change elements.</p><div class="tw"><table><tr><th>Task<th>Code</tr><tr><td>Select<td>document.querySelector("#msg")</tr><tr><td>Change text<td>el.textContent = "Saved"</tr><tr><td>Change style/class<td>el.classList.toggle("active")</tr><tr><td>Create / add<td>document.createElement("li"); list.append(li)</tr><tr><td>Listen<td>btn.addEventListener("click", handler)</tr></table></div>
<h3>Form validation</h3><pre>form.addEventListener("submit", e =&gt; {
  if (name.value.trim() === "") {
    e.preventDefault();
    msg.textContent = "Name is required";
  }
});</pre><p><b>Explanation:</b> the handler stops submission and shows an error. Client-side validation improves usability but the server must validate too. Try the playground below.</p>
<h3>Client-side interactivity examples</h3><p>Menus, sliders, live search, dark-mode toggles, quizzes and loading data with AJAX.</p>
<h3>Common mistakes</h3><ul><li>Using <code>==</code> and being surprised by type conversion.</li><li>Running a script before the elements exist.</li><li>Putting untrusted text into <code>innerHTML</code> (XSS risk); use <code>textContent</code>.</li></ul>`,
short:['JS = behaviour; runs in browser (and Node.js)','let / const; === for comparison','Types: number, string, boolean, null, undefined, symbol, bigint, object','Functions: declaration and arrow','DOM: querySelector, textContent, classList, createElement','Events: addEventListener; preventDefault stops form submit','Validate on client AND server'],
cards:[['What is JavaScript used for in a web page?','Adding behaviour: handling events, changing the DOM, validating forms and fetching data.'],['let vs const?','let allows reassignment; const does not (the binding is fixed).'],['== vs ===?','== converts types before comparing; === compares value and type strictly.'],['Name JavaScript primitive types.','Number, string, boolean, null, undefined, symbol and bigint.'],['What is an arrow function?','A short function syntax such as n => n * 2.'],['What does addEventListener do?','Registers a function to run when a given event occurs on an element.'],['What does event.preventDefault() do?','Stops the browser\'s default action, such as submitting a form.'],['Why use textContent instead of innerHTML for user input?','textContent treats it as plain text and avoids script injection (XSS).']],
quiz:[['Which keyword declares a variable that cannot be reassigned?',['var','let','const','static'],2,'const prevents reassignment.'],['Which operator compares value and type?',['==','=','===','!='],2,'=== is strict equality.'],['Which method selects an element by CSS selector?',['getTag()','querySelector()','selectNode()','findCss()'],1,'document.querySelector returns the first match.'],['What does preventDefault() do on a submit event?',['Submits faster','Cancels the default submission','Clears fields','Encrypts data'],1,'It stops the form from being sent.'],['Which statement about validation is correct?',['Client-side is enough','Server-side is optional','Do both client- and server-side','Only HTML can validate'],2,'Client checks help users; the server enforces rules.']],
demo:{html:`<form id="f"><label>Name <input id="n"></label>
<label>Age <input id="a" type="number"></label>
<button>Check</button></form><p id="msg"></p>`,css:`input{margin:3px}#msg{font-weight:bold}`,js:`document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  var n=document.getElementById('n').value.trim(),a=Number(document.getElementById('a').value),m=document.getElementById('msg');
  if(!n){m.textContent='Name is required';m.style.color='#b91c1c';}
  else if(!(a>=16&&a<=100)){m.textContent='Age must be 16-100';m.style.color='#b91c1c';}
  else{m.textContent='Welcome, '+n+'!';m.style.color='#15803d';}
});`}};
CONTENT['Dynamic HTML (DHTML)']={
intro:'DHTML is not a language; it is the combination of HTML, CSS, JavaScript and the DOM that lets a page change after it has loaded, without asking the server for a new page.',
obj:['Define DHTML and its components','Explain the role of HTML, CSS, JavaScript and the DOM','Compare static HTML with DHTML','Build a simple interactive example'],
notes:`<h3>Definition</h3><p><b>Dynamic HTML</b> is a term from the late 1990s for web pages whose content, style or layout changes in the browser in response to user actions or time. It became possible when browsers exposed the page as an object model that scripts could modify. Today these techniques are simply part of normal front-end development.</p>
<h3>Components</h3><div class="tw"><table><tr><th>Component<th>Role in DHTML</tr><tr><td>HTML<td>Provides the elements and content</tr><tr><td>CSS<td>Defines appearance; changes by switching classes or styles</tr><tr><td>JavaScript<td>Contains the logic that reacts to events</tr><tr><td>DOM<td>The interface through which scripts read and change elements, attributes and styles</tr></table></div>
<h3>Static HTML vs DHTML</h3><div class="tw"><table><tr><th>Feature<th>Static HTML<th>DHTML</tr><tr><td>After loading<td>Page stays fixed<td>Content and style can change</tr><tr><td>User interaction<td>Mainly links and form submission<td>Hover effects, toggles, drag, live updates</tr><tr><td>Server round trips<td>Needed for every change<td>Many changes happen locally</tr><tr><td>Technologies<td>HTML (+CSS)<td>HTML + CSS + JS + DOM</tr></table></div>
<h3>How it works</h3><ol><li>The browser parses the HTML into the DOM.</li><li>JavaScript registers event handlers (click, mouseover, timers).</li><li>When an event occurs, the handler changes the DOM (text, attributes, classes).</li><li>The browser recalculates styles and layout and repaints only what changed.</li></ol>
<h3>Typical uses</h3><ul><li>Dropdown menus and accordions, show/hide sections.</li><li>Image sliders and rollover effects.</li><li>Live clocks, countdowns and character counters.</li><li>Dragging elements and updating forms as the user types.</li></ul>
<h3>Example</h3><pre>&lt;button onclick="toggle()"&gt;Show details&lt;/button&gt;
&lt;p id="box" hidden&gt;DHTML changes the page without reloading.&lt;/p&gt;
&lt;script&gt;
function toggle() {
  const box = document.getElementById("box");
  box.hidden = !box.hidden;
  box.style.color = "#4f46e5";
}
&lt;/script&gt;</pre><p><b>Output:</b> each click shows or hides the paragraph instantly with no page reload. Run it in the playground below.</p>
<h3>Common mistakes</h3><ul><li>Thinking DHTML is a separate language or product.</li><li>Confusing DHTML (client-side changes) with dynamic websites (server-generated pages).</li><li>Forcing the whole page to re-render when only one element needs to change.</li></ul>`,
short:['DHTML = HTML + CSS + JavaScript + DOM','Not a language or W3C standard; a technique/term','Changes happen in the browser without a server request','Static HTML fixed after load; DHTML reacts to events','Examples: menus, toggles, sliders, live counters'],
cards:[['What is DHTML?','A combination of HTML, CSS, JavaScript and the DOM used to create pages that change after loading.'],['Is DHTML a programming language?','No. It is a collection of technologies used together.'],['What role does the DOM play in DHTML?','It lets scripts read and modify page elements, attributes and styles.'],['Static HTML vs DHTML?','Static HTML does not change after loading; DHTML responds to events by changing the DOM and styles.'],['Where do DHTML changes happen?','In the browser (client-side), usually without contacting the server.'],['Give three DHTML examples.','Dropdown menus, image sliders and live character counters.'],['DHTML vs dynamic website?','DHTML changes the page on the client; a dynamic website generates pages on the server.'],['How does CSS take part in DHTML?','Scripts change styles or classes, so appearance changes instantly.']],
quiz:[['DHTML is a combination of…',['HTML, CSS, JavaScript, DOM','Java, SQL, XML','PHP, MySQL, Apache','TCP, IP, DNS'],0,'These four technologies work together.'],['Which interface lets scripts change page content?',['HTTP','DOM','SMTP','DNS'],1,'The DOM exposes the page to JavaScript.'],['A DHTML change usually requires…',['A full page reload','No server round trip','A new domain','A database'],1,'Updates happen locally in the browser.'],['Which is a DHTML example?',['A static brochure page','A toggling dropdown menu','A plain text file','A PDF download'],1,'Menus react to user events.'],['DHTML is best described as…',['A new language','A technique using existing web technologies','A server product','A database'],1,'It is not a separate language.']],
demo:{html:`<button id="b">Show details</button>
<p id="box" hidden>DHTML changes the page without reloading.</p>`,css:`#box{padding:8px;border-left:4px solid #4f46e5}`,js:`var b=document.getElementById('b'),box=document.getElementById('box');
b.addEventListener('click',function(){
  box.hidden=!box.hidden;
  b.textContent=box.hidden?'Show details':'Hide details';
});`}};
CONTENT['XML Fundamentals']={
intro:'XML (eXtensible Markup Language) stores and transports data in a text format that is both human- and machine-readable. You invent your own tags to describe the data.',
obj:['Define XML and state its purpose','Write a well-formed XML document','Explain elements, attributes and namespaces','Distinguish well-formed from valid XML, and XML from HTML'],
notes:`<h3>Definition and purpose</h3><p><b>XML</b> is a W3C markup language for describing <i>data</i>. Its tags are user-defined and self-describing, so different systems can exchange information independent of platform and programming language. XML is widely used in configuration files, document formats, SOAP web services, RSS feeds and SVG.</p>
<h3>Document structure</h3><pre>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!-- student record --&gt;
&lt;students&gt;
  &lt;student id="101"&gt;
    &lt;name&gt;Asha&lt;/name&gt;
    &lt;branch&gt;CSE&lt;/branch&gt;
  &lt;/student&gt;
&lt;/students&gt;</pre><ul><li><b>Prolog:</b> optional XML declaration with version and encoding.</li><li><b>Root element:</b> exactly one top-level element (<code>students</code>).</li><li><b>Elements:</b> start tag, content, end tag; they may contain text and child elements.</li><li><b>Attributes:</b> name="value" in the start tag (<code>id="101"</code>).</li><li><b>Other parts:</b> comments, CDATA sections for raw text, processing instructions.</li></ul>
<h3>Rules for well-formed XML</h3><ol><li>Exactly one root element.</li><li>Every start tag has an end tag (or is self-closing: <code>&lt;br/&gt;</code>).</li><li>Elements are properly nested.</li><li>Tag names are case-sensitive.</li><li>Attribute values are quoted.</li><li>Special characters are escaped: <code>&amp;lt; &amp;gt; &amp;amp; &amp;quot; &amp;apos;</code>.</li></ol>
<h3>Namespaces</h3><p>Namespaces prevent name clashes when documents mix vocabularies. A prefix is bound to a URI: <code>&lt;h:table xmlns:h="http://www.w3.org/TR/html4/"&gt;</code>. The URI is only a unique identifier, not necessarily a web page.</p>
<h3>Well-formed vs valid</h3><div class="tw"><table><tr><th>Term<th>Meaning</tr><tr><td>Well-formed<td>Obeys XML syntax rules; every XML parser requires this</tr><tr><td>Valid<td>Well-formed <b>and</b> follows a DTD or XML Schema that defines allowed elements, order and data types</tr></table></div><p>A document can be well-formed but not valid, but never valid without being well-formed.</p>
<h3>XML vs HTML</h3><div class="tw"><table><tr><th>Aspect<th>XML<th>HTML</tr><tr><td>Purpose<td>Describe and transport data<td>Display data in browsers</tr><tr><td>Tags<td>User-defined<td>Predefined</tr><tr><td>Syntax<td>Strict (must be well-formed)<td>Forgiving</tr><tr><td>Case<td>Case-sensitive<td>Tags case-insensitive</tr><tr><td>Closing tags<td>Mandatory<td>Optional for some elements</tr></table></div>
<h3>Common mistakes</h3><ul><li>Two root elements or a missing end tag.</li><li>Mismatched case: <code>&lt;Name&gt;...&lt;/name&gt;</code>.</li><li>Using &amp; or &lt; directly in text.</li><li>Believing XML displays or processes data by itself; it only describes it.</li></ul>`,
short:['XML = eXtensible Markup Language; describes data, user-defined tags','Well-formed: one root, nested, closed, quoted attributes, case-sensitive','Valid = well-formed + conforms to DTD/XSD','Namespace (xmlns) avoids name conflicts','XML = data; HTML = presentation','Entities: &lt; &gt; &amp; &quot; &apos;'],
cards:[['What does XML stand for?','eXtensible Markup Language.'],['Main purpose of XML?','Storing and transporting data in a platform-independent, self-describing text format.'],['What is a well-formed XML document?','One that follows XML syntax rules: single root, proper nesting, closed tags, quoted attributes.'],['What is a valid XML document?','A well-formed document that also conforms to a DTD or XML Schema.'],['How many root elements can XML have?','Exactly one.'],['Why are namespaces used?','To avoid element name conflicts when combining vocabularies.'],['XML vs HTML in one line?','XML describes data with user-defined strict tags; HTML displays content with predefined forgiving tags.'],['How do you write < inside XML text?','Use the entity &lt;.']],
quiz:[['Which is a mandatory rule of well-formed XML?',['Use only lowercase tags','A single root element','Use DTD','Use CSS'],1,'Every document needs exactly one root.'],['XML tags are…',['Predefined','User-defined','Only block-level','Case-insensitive'],1,'You define your own tags.'],['A valid XML document must…',['Be well-formed and match a DTD/schema','Contain an image','Use HTTP','Have no attributes'],0,'Validity adds schema conformance.'],['Which entity represents the ampersand?',['&and;','&amp;','&amp','&ampers;'],1,'&amp; is the correct escape.'],['What is the purpose of xmlns?',['Styling','Declaring a namespace','Linking CSS','Encoding'],1,'It binds a prefix or default namespace to a URI.']],
demo:{html:`<textarea id="x" rows="6" style="width:100%"><students><student id="101"><name>Asha</name></student></students></textarea>
<button id="b">Check well-formedness</button><p id="r"></p>`,css:`#r{font-weight:bold}`,js:`document.getElementById('b').addEventListener('click',function(){
  var d=new DOMParser().parseFromString(document.getElementById('x').value,'application/xml');
  var e=d.getElementsByTagName('parsererror')[0],r=document.getElementById('r');
  r.textContent=e?'Not well-formed: '+e.textContent.split('\\n')[0]:'Well-formed. Root: <'+d.documentElement.nodeName+'>';
  r.style.color=e?'#b91c1c':'#15803d';
});`}};
CONTENT['XML Document Type Definition (DTD)']={
intro:'A DTD defines the legal structure of an XML document: which elements and attributes are allowed, how they nest and in what order.',
obj:['Explain why DTDs are used','Differentiate internal and external DTDs','Write element and attribute declarations','State DTD limitations'],
notes:`<h3>Purpose</h3><p>XML only requires well-formedness. A <b>DTD (Document Type Definition)</b> adds rules so that documents from different sources follow the same structure. A document that is well-formed and obeys its DTD is <b>valid</b>. Validating parsers report violations.</p>
<h3>Internal and external DTD</h3><div class="tw"><table><tr><th>Feature<th>Internal<th>External</tr><tr><td>Location<td>Inside the XML file in DOCTYPE brackets<td>Separate .dtd file</tr><tr><td>Declaration<td>&lt;!DOCTYPE note [ ... ]&gt;<td>&lt;!DOCTYPE note SYSTEM "note.dtd"&gt;</tr><tr><td>Reuse<td>Single document<td>Shared by many documents</tr></table></div>
<h3>Element declarations</h3><ul><li><code>&lt;!ELEMENT note (to, from, body)&gt;</code> – sequence: children in this order.</li><li><code>(a | b)</code> – choice; suffixes: <code>?</code> zero or one, <code>*</code> zero or more, <code>+</code> one or more.</li><li><code>(#PCDATA)</code> – text only; <code>EMPTY</code> – no content; <code>ANY</code> – anything.</li></ul>
<h3>Attribute declarations</h3><p><code>&lt;!ATTLIST note id CDATA #REQUIRED&gt;</code>: attribute types include CDATA (text), ID (unique), and enumerations <code>(low|high)</code>. Defaults: <code>#REQUIRED</code>, <code>#IMPLIED</code> (optional), <code>#FIXED "value"</code> or a default value.</p>
<h3>Example</h3><pre>&lt;?xml version="1.0"?&gt;
&lt;!DOCTYPE note [
  &lt;!ELEMENT note (to, from, body)&gt;
  &lt;!ELEMENT to (#PCDATA)&gt;
  &lt;!ELEMENT from (#PCDATA)&gt;
  &lt;!ELEMENT body (#PCDATA)&gt;
  &lt;!ATTLIST note priority (low|high) "low"&gt;
]&gt;
&lt;note priority="high"&gt;
  &lt;to&gt;Ravi&lt;/to&gt;&lt;from&gt;Asha&lt;/from&gt;
  &lt;body&gt;Submit the lab record.&lt;/body&gt;
&lt;/note&gt;</pre><p><b>Explanation:</b> note must contain to, from and body in that order, each text-only; priority may be low or high (default low). <b>Result:</b> the document is valid. Swapping the order of <code>to</code> and <code>from</code>, or using priority="urgent", would make it invalid.</p>
<h3>Limitations of DTD</h3><ul><li>Not written in XML syntax.</li><li>Only a few data types (no integer, date, etc.).</li><li>Weak support for namespaces.</li><li>Limited control over occurrence counts and constraints.</li><li>These gaps led to XML Schema (XSD).</li></ul>
<h3>Common mistakes</h3><ul><li>Declaring an element but forgetting its children or attributes.</li><li>Wrong child order in a sequence model.</li><li>Confusing well-formed with valid.</li></ul>`,
short:['DTD defines allowed elements, attributes and structure','Internal: inside DOCTYPE; external: SYSTEM "file.dtd"','ELEMENT: (a,b) sequence, (a|b) choice, ? * +','ATTLIST: CDATA, ID, enumeration; #REQUIRED / #IMPLIED / #FIXED','#PCDATA = parsed text; EMPTY; ANY','Limits: not XML, no data types, weak namespaces'],
cards:[['What does DTD stand for?','Document Type Definition.'],['What is the purpose of a DTD?','To define the legal structure of an XML document so it can be validated.'],['Internal vs external DTD?','Internal DTD sits inside the XML file; external DTD is a separate .dtd file referenced with SYSTEM or PUBLIC.'],['What does #PCDATA mean?','Parsed character data: the element contains text only.'],['What do ?, * and + mean?','Zero or one, zero or more, and one or more occurrences.'],['What does #REQUIRED mean for an attribute?','The attribute must be present in every instance of the element.'],['Declare an element with children to, from, body.','<!ELEMENT note (to, from, body)>'],['Name two DTD limitations.','It is not XML syntax and has almost no data types.']],
quiz:[['Which declaration defines an element?',['<!ATTLIST>','<!ELEMENT>','<!ENTITY>','<!DOCTYPE>'],1,'ELEMENT declares an element and its content model.'],['What does (a | b) mean?',['a then b','a or b','a and b','neither'],1,'The vertical bar is a choice.'],['Which keyword marks an optional attribute?',['#REQUIRED','#IMPLIED','#FIXED','#PCDATA'],1,'#IMPLIED means the attribute is optional.'],['An external DTD is referenced using…',['SYSTEM','LINK','IMPORT','HREF'],0,'<!DOCTYPE root SYSTEM "file.dtd">.'],['A major limitation of DTD is…',['It is written in XML','Few data types','It supports all namespaces','It cannot be external'],1,'XSD was created to add data types.']]};
CONTENT['XML Schemas (XSD)']={
intro:'XML Schema (XSD) describes the structure and data types of an XML document. It is the more powerful, XML-based replacement for the DTD.',
obj:['Explain why XSD is needed','Declare elements, attributes and data types','Apply restrictions and occurrence rules','Compare DTD and XSD and validate a document'],
notes:`<h3>Purpose</h3><p><b>XML Schema Definition (XSD)</b> is a W3C language for defining which elements and attributes may appear, in what order, how often and with which <b>data types</b>. A schema is itself an XML document, so the same tools can process it. Documents that satisfy the schema are <b>schema-valid</b>.</p>
<h3>Building blocks</h3><div class="tw"><table><tr><th>Concept<th>Meaning</tr><tr><td>Simple type<td>Text-only value: xs:string, xs:integer, xs:decimal, xs:boolean, xs:date</tr><tr><td>Complex type<td>Element with child elements and/or attributes</tr><tr><td>Sequence / choice / all<td>Ordered children, one of several, or any order</tr><tr><td>minOccurs / maxOccurs<td>How many times an element may appear (default 1)</tr><tr><td>Restriction (facets)<td>minInclusive, maxInclusive, length, pattern, enumeration</tr><tr><td>Attribute<td>xs:attribute with use="required" or "optional"</tr></table></div>
<h3>Example schema</h3><pre>&lt;xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;
  &lt;xs:element name="student"&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name="name" type="xs:string"/&gt;
        &lt;xs:element name="age"&gt;
          &lt;xs:simpleType&gt;
            &lt;xs:restriction base="xs:integer"&gt;
              &lt;xs:minInclusive value="16"/&gt;
              &lt;xs:maxInclusive value="60"/&gt;
            &lt;/xs:restriction&gt;
          &lt;/xs:simpleType&gt;
        &lt;/xs:element&gt;
      &lt;/xs:sequence&gt;
      &lt;xs:attribute name="id" type="xs:integer" use="required"/&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
<h3>Validation examples</h3><pre>&lt;student id="101"&gt;&lt;name&gt;Asha&lt;/name&gt;&lt;age&gt;19&lt;/age&gt;&lt;/student&gt;   valid
&lt;student id="abc"&gt;&lt;name&gt;Asha&lt;/name&gt;&lt;age&gt;19&lt;/age&gt;&lt;/student&gt;   invalid: id is not an integer
&lt;student id="101"&gt;&lt;name&gt;Asha&lt;/name&gt;&lt;age&gt;12&lt;/age&gt;&lt;/student&gt;   invalid: age below 16</pre><p><b>Explanation:</b> a validating parser checks the instance against the schema and reports the first rule broken. An instance links to its schema with <code>xsi:noNamespaceSchemaLocation</code> or <code>xsi:schemaLocation</code>.</p>
<h3>DTD vs XSD</h3><div class="tw"><table><tr><th>Feature<th>DTD<th>XSD</tr><tr><td>Syntax<td>Special non-XML syntax<td>XML syntax</tr><tr><td>Data types<td>Almost none<td>Rich built-in and custom types</tr><tr><td>Namespaces<td>Poor support<td>Full support</tr><tr><td>Occurrence control<td>? * + only<td>Exact minOccurs/maxOccurs</tr><tr><td>Extensibility<td>Limited<td>Types can be reused and extended</tr><tr><td>Complexity<td>Simple and compact<td>Verbose but powerful</tr></table></div>
<h3>Common mistakes</h3><ul><li>Forgetting the xs namespace declaration.</li><li>Putting children in the wrong order inside xs:sequence.</li><li>Confusing well-formed (syntax) with schema-valid (structure and types).</li></ul>`,
short:['XSD = XML Schema Definition; written in XML','Simple types (xs:string, integer, date) vs complex types','Facets: minInclusive, maxInclusive, pattern, enumeration','minOccurs / maxOccurs control repetition','Better than DTD: data types, namespaces, XML syntax','Valid = well-formed + conforms to schema'],
cards:[['What does XSD stand for?','XML Schema Definition.'],['Why was XSD created?','To overcome DTD limits by adding data types, namespace support and XML syntax.'],['Simple type vs complex type?','A simple type holds only text values; a complex type has child elements and/or attributes.'],['What is a restriction in XSD?','A rule that limits a base type, e.g. an integer between 16 and 60.'],['What do minOccurs and maxOccurs do?','Set the minimum and maximum number of times an element can occur.'],['Name three built-in XSD types.','xs:string, xs:integer, xs:date (also decimal, boolean).'],['How do you make an attribute mandatory?','Use use="required" on xs:attribute.'],['DTD vs XSD in one line?','XSD is XML-based with rich data types and namespaces; DTD is older, compact and weakly typed.']],
quiz:[['An XSD file is written in…',['DTD syntax','XML syntax','CSS','JSON'],1,'Schemas are XML documents.'],['Which XSD feature is missing in DTD?',['Elements','Data types','Attributes','Comments'],1,'DTD has almost no data types.'],['Which facet limits the maximum number?',['maxInclusive','maxLength only','pattern','whiteSpace'],0,'maxInclusive sets the upper bound.'],['Which element defines an ordered group of children?',['xs:choice','xs:sequence','xs:all','xs:group only'],1,'xs:sequence enforces order.'],['Schema validation checks…',['Only well-formedness','Structure and data types','Only CSS','Network speed'],1,'It verifies elements, order and types.']]};
CONTENT['XML Object Models']={
intro:'An XML parser can turn a document into an object model: a tree of nodes that programs can navigate and change. The W3C DOM defines this model.',
obj:['Describe the XML document tree and node types','Explain how the XML DOM relates to the HTML DOM','Navigate an XML tree','Create, change and remove nodes'],
notes:`<h3>XML document tree</h3><p>The parser represents every XML document as a <b>tree</b>. The top is the <b>document node</b>; the single root element is its child; below are elements, attributes, text and comments.</p>
<figure><svg viewBox="0 0 560 200" role="img" aria-label="Tree: students contains student with attribute id, which contains name and branch elements with text nodes Asha and CSE"><g fill="none" stroke="currentColor"><rect x="215" y="5" width="130" height="28" rx="6"/><rect x="215" y="55" width="130" height="28" rx="6"/><rect x="110" y="110" width="110" height="28" rx="6"/><rect x="340" y="110" width="110" height="28" rx="6"/><rect x="110" y="165" width="110" height="28" rx="6"/><rect x="340" y="165" width="110" height="28" rx="6"/><path d="M280 33V55M250 83L165 110M310 83L395 110M165 138V165M395 138V165"/></g><g fill="currentColor" font-size="12" text-anchor="middle"><text x="280" y="24">&lt;students&gt;</text><text x="280" y="74">&lt;student id="101"&gt;</text><text x="165" y="129">&lt;name&gt;</text><text x="395" y="129">&lt;branch&gt;</text><text x="165" y="184">text: "Asha"</text><text x="395" y="184">text: "CSE"</text></g></svg><figcaption>XML tree: elements are parents of other elements and of text nodes; id is an attribute node attached to student.</figcaption></figure>
<div class="tw"><table><tr><th>Node type<th>Example</tr><tr><td>Document<td>Whole document (entry point)</tr><tr><td>Element<td>&lt;student&gt;</tr><tr><td>Attribute<td>id="101" (belongs to an element, not a child)</tr><tr><td>Text<td>Asha</tr><tr><td>Comment<td>&lt;!-- note --&gt;</tr></table></div>
<p>Relationships: <b>parent</b>, <b>child</b>, <b>sibling</b>, <b>ancestor</b>, <b>descendant</b>.</p>
<h3>XML and the DOM</h3><p>The <b>Document Object Model</b> is a language-neutral API. The HTML DOM adds HTML-specific features (document.body, element.style), while the XML DOM is generic: any tag names, no built-in behaviour. The same methods work on both, so skills transfer between them.</p>
<h3>Navigating and manipulating</h3><div class="tw"><table><tr><th>Task<th>Method / property</tr><tr><td>Root<td>doc.documentElement</tr><tr><td>Find elements<td>getElementsByTagName("name")</tr><tr><td>Children / parent<td>childNodes, firstChild, parentNode, nextSibling</tr><tr><td>Read text / attribute<td>textContent, getAttribute("id")</tr><tr><td>Create / add<td>createElement, appendChild, setAttribute</tr><tr><td>Remove<td>removeChild, remove()</tr><tr><td>Convert back to text<td>XMLSerializer.serializeToString(doc)</tr></table></div><p>The playground below parses a small document, reads values, adds a branch element and prints the updated XML. Other tools: <b>XPath</b> selects nodes with path expressions such as <code>/students/student[@id='101']/name</code>.</p>
<h3>Common mistakes</h3><ul><li>Treating attributes as child nodes.</li><li>Forgetting that whitespace between tags creates text nodes in childNodes.</li><li>Forgetting that DOM changes are in memory; you must serialize and save the result.</li></ul>`,
short:['XML is parsed into a tree of nodes (DOM)','Node types: document, element, attribute, text, comment','Relationships: parent, child, sibling','Navigate: documentElement, getElementsByTagName, childNodes','Modify: createElement, appendChild, setAttribute, removeChild','XPath selects nodes; XMLSerializer writes XML back'],
cards:[['What is the XML DOM?','A tree-based API that represents an XML document as nodes that programs can read and modify.'],['Name the DOM node types.','Document, element, attribute, text and comment (also processing instruction).'],['Is an attribute a child node?','No. It is attached to its element but is not part of childNodes.'],['What does documentElement return?','The root element of the document.'],['How do you add a new element?','createElement() then appendChild() on the parent.'],['XML DOM vs HTML DOM?','Same core API; HTML DOM adds HTML-specific properties, XML DOM is generic.'],['What is XPath?','A language for selecting nodes in an XML tree with path expressions.'],['How do you convert a DOM back to text?','Use XMLSerializer.serializeToString().']],
quiz:[['What is at the top of an XML DOM tree?',['Root element','Document node','Text node','Attribute'],1,'The document node contains the root element.'],['Which method creates a new element?',['createElement','newNode','makeTag','addElement'],0,'document.createElement(name).'],['Attributes are…',['Child nodes','Properties of element nodes','Comments','Root nodes'],1,'They are attached to elements.'],['Which property returns the root element?',['rootNode','documentElement','topNode','firstRoot'],1,'document.documentElement.'],['XPath is used to…',['Style XML','Select nodes','Encrypt XML','Compress XML'],1,'XPath navigates the tree with path expressions.']],
demo:{html:`<pre id="o"></pre>`,css:`pre{white-space:pre-wrap}`,js:`var xml='<students><student id="101"><name>Asha</name></student></students>';
var d=new DOMParser().parseFromString(xml,'application/xml');
var s=d.getElementsByTagName('student')[0],out=[];
out.push('Root: '+d.documentElement.nodeName);
out.push('id attribute: '+s.getAttribute('id'));
out.push('name: '+s.getElementsByTagName('name')[0].textContent);
var b=d.createElement('branch');b.textContent='CSE';s.appendChild(b);
out.push('Updated XML:\\n'+new XMLSerializer().serializeToString(d));
document.getElementById('o').textContent=out.join('\\n');`}};
CONTENT['Presenting XML']={
intro:'XML describes data but says nothing about how it should look. CSS and XSLT are the two classic ways to present XML.',
obj:['Explain why XML needs a presentation layer','Style XML with CSS','Describe XSLT and how it transforms XML','Compare CSS and XSLT'],
notes:`<h3>The presentation problem</h3><p>An XML file such as <code>&lt;book&gt;&lt;title&gt;...&lt;/title&gt;&lt;/book&gt;</code> contains no display information, so a browser cannot know how to show <code>title</code>. Data and presentation are deliberately separate; a stylesheet supplies the presentation.</p>
<h3>CSS for XML</h3><p>Link a stylesheet with a processing instruction and style the custom tags, usually setting <code>display</code> because XML elements have no default display.</p><pre>&lt;?xml version="1.0"?&gt;
&lt;?xml-stylesheet type="text/css" href="books.css"?&gt;
&lt;books&gt;&lt;book&gt;&lt;title&gt;Web Technology&lt;/title&gt;&lt;/book&gt;&lt;/books&gt;

/* books.css */
books { display: block; }
title { display: block; font-size: 1.4em; color: #4f46e5; }</pre><p>CSS can only style existing content: it cannot reorder, filter, sort or generate new text.</p>
<h3>XSLT</h3><p><b>XSLT (Extensible Stylesheet Language Transformations)</b> is an XML-based language that transforms an XML document into another format: HTML, plain text or different XML. An <b>XSLT processor</b> reads the XML source tree and the stylesheet and produces a result tree. It uses <b>XPath</b> to select nodes and <b>templates</b> to describe the output.</p>
<div class="tw"><table><tr><th>XSLT element<th>Purpose</tr><tr><td>xsl:template match="/"<td>Template applied to the document root</tr><tr><td>xsl:for-each select="..."<td>Loop over selected nodes</tr><tr><td>xsl:value-of select="..."<td>Output a node's text</tr><tr><td>xsl:sort, xsl:if, xsl:choose<td>Sort and conditional output</tr><tr><td>xsl:apply-templates<td>Process child nodes with matching templates</tr></table></div>
<h3>Example</h3><pre>&lt;xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"&gt;
  &lt;xsl:template match="/"&gt;
    &lt;html&gt;&lt;body&gt;&lt;ul&gt;
      &lt;xsl:for-each select="books/book"&gt;
        &lt;xsl:sort select="title"/&gt;
        &lt;li&gt;&lt;xsl:value-of select="title"/&gt;&lt;/li&gt;
      &lt;/xsl:for-each&gt;
    &lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;
  &lt;/xsl:template&gt;
&lt;/xsl:stylesheet&gt;</pre><p><b>Result:</b> an HTML list of all book titles in alphabetical order, generated from the XML data.</p>
<h3>Transformation workflow</h3><p>XML data + XSLT stylesheet → XSLT processor → HTML page (or other output) → browser displays it. The same XML can produce web, mobile or print outputs with different stylesheets. XSLT can run on a server or in tools; because some browser vendors have announced plans to remove built-in XSLT, check browser support before relying on client-side transformations.</p>
<h3>CSS vs XSLT</h3><div class="tw"><table><tr><th>Feature<th>CSS<th>XSLT</tr><tr><td>Type<td>Styles existing nodes<td>Transforms the document structure</tr><tr><td>Reorder / sort / filter<td>No<td>Yes</tr><tr><td>Generate new content<td>Very limited<td>Yes (HTML, text, XML)</tr><tr><td>Complexity<td>Simple<td>More complex (programming-like)</tr></table></div>
<h3>Common mistakes</h3><ul><li>Expecting browsers to know how to display custom XML tags.</li><li>Forgetting display: block in CSS for XML.</li><li>Using CSS when sorting or filtering is required.</li></ul>`,
short:['XML = data only; presentation via CSS or XSLT','CSS: link with xml-stylesheet; set display:block','XSLT = XML-based language that transforms XML to HTML/text/XML','XSLT uses XPath + templates (for-each, value-of, sort)','CSS cannot reorder or generate content; XSLT can','Same XML can have many stylesheets'],
cards:[['Why can a browser not display custom XML tags by default?','XML has no predefined meaning or display; a stylesheet must supply it.'],['How is a CSS file linked to XML?','With <?xml-stylesheet type="text/css" href="file.css"?>.'],['What does XSLT stand for?','Extensible Stylesheet Language Transformations.'],['What does XSLT output?','HTML, plain text or other XML, via a result tree.'],['Which language selects nodes in XSLT?','XPath.'],['Which element loops over nodes in XSLT?','xsl:for-each.'],['Which element prints a node\'s value?','xsl:value-of.'],['Main advantage of XSLT over CSS?','It can sort, filter, reorder and generate new content.']],
quiz:[['What is the main limitation of CSS for XML?',['It cannot colour text','It cannot reorder or filter data','It needs Java','It needs a database'],1,'CSS only styles what is already there.'],['Which element selects and loops over nodes?',['xsl:value-of','xsl:for-each','xsl:text','xsl:output'],1,'for-each iterates over the selection.'],['XSLT stylesheets are written in…',['CSS','XML','JSON','SQL'],1,'XSLT is an XML-based language.'],['Which language does XSLT use to select nodes?',['XPath','SQL','Regex','SAX'],0,'XPath expressions go in select/match.'],['An XSLT processor takes…',['XML + stylesheet','CSS + HTML','Only DTD','Only JSON'],0,'Source XML and XSLT produce the result.']]};
CONTENT['XML Processors: DOM and SAX']={
intro:'An XML processor (parser) reads XML and makes it available to an application. DOM and SAX are the two main parsing models, with very different memory use.',
obj:['Describe the DOM and SAX parsing models','Compare memory use and access patterns','Explain a SAX event workflow','Choose the right parser for a task'],
notes:`<h3>What is an XML processor?</h3><p>A processor checks that the document is well-formed (and optionally valid) and gives the application access to its content. It can build a tree (DOM), generate events (SAX), or let the program pull items one at a time (StAX).</p>
<figure><svg viewBox="0 0 560 160" role="img" aria-label="DOM loads the whole XML file into a tree in memory for the application; SAX streams events to a handler"><g fill="none" stroke="currentColor"><rect x="5" y="15" width="112" height="46" rx="6"/><rect x="151" y="15" width="112" height="46" rx="6"/><rect x="297" y="15" width="112" height="46" rx="6"/><rect x="443" y="15" width="112" height="46" rx="6"/><rect x="5" y="95" width="112" height="46" rx="6"/><rect x="151" y="95" width="112" height="46" rx="6"/><rect x="297" y="95" width="112" height="46" rx="6"/><rect x="443" y="95" width="112" height="46" rx="6"/><path d="M117 38H151M263 38H297M409 38H443M117 118H151M263 118H297M409 118H443"/></g><g fill="currentColor" font-size="11" text-anchor="middle"><text x="61" y="42">XML file</text><text x="207" y="42">DOM parser</text><text x="353" y="35">Whole tree</text><text x="353" y="50">in memory</text><text x="499" y="35">Application</text><text x="499" y="50">navigates / edits</text><text x="61" y="122">XML file</text><text x="207" y="122">SAX parser</text><text x="353" y="112">Events: start,</text><text x="353" y="127">characters, end</text><text x="499" y="112">Handler</text><text x="499" y="127">callbacks</text></g><text x="5" y="10" font-size="11" fill="currentColor">DOM (top row)</text><text x="5" y="90" font-size="11" fill="currentColor">SAX (bottom row)</text></svg><figcaption>DOM builds a complete tree before the program starts; SAX streams the document once and calls handler methods as it meets each item.</figcaption></figure>
<h3>DOM parser</h3><p>Loads the entire document into a tree of objects. The program can move in any direction, search, insert, delete and save. Memory use grows with document size (often several times the file size).</p>
<h3>SAX parser</h3><p><b>SAX (Simple API for XML)</b> is an event-driven, forward-only, <b>push</b> parser. It reads once from start to end and calls your methods: <code>startElement</code>, <code>characters</code>, <code>endElement</code>. Memory use is small and constant, but you must remember any data you need and you cannot go back or modify the document.</p><pre>import xml.sax
class H(xml.sax.ContentHandler):
    def startElement(self, name, attrs):
        print("start:", name)
    def characters(self, text):
        if text.strip(): print("text:", text.strip())
    def endElement(self, name):
        print("end:", name)
xml.sax.parseString(b"&lt;a&gt;&lt;b&gt;Hi&lt;/b&gt;&lt;/a&gt;", H())</pre><p><b>Output:</b> start: a, start: b, text: Hi, end: b, end: a — events arrive in document order.</p>
<h3>DOM vs SAX</h3><div class="tw"><table><tr><th>Feature<th>DOM<th>SAX</tr><tr><td>Model<td>Tree-based<td>Event-based</tr><tr><td>Memory<td>High (whole document)<td>Low (streaming)</tr><tr><td>Access<td>Random, any direction<td>Sequential, forward only</tr><tr><td>Modify document<td>Yes<td>No (read-only)</tr><tr><td>Speed on large files<td>Slower, memory-bound<td>Fast</tr><tr><td>Complexity<td>Simpler logic<td>Harder: you track state</tr><tr><td>Use cases<td>Small/medium files, editing, XPath<td>Huge files, one-pass reading, feeds</tr></table></div>
<h3>Choosing</h3><ul><li>Use <b>DOM</b> when you need to modify the document, search it repeatedly or navigate back and forth.</li><li>Use <b>SAX</b> (or StAX) when the file is very large or you need one quick pass.</li></ul>
<h3>Common mistakes</h3><ul><li>Loading a multi-gigabyte file with DOM.</li><li>Expecting SAX to give you a tree or let you edit the XML.</li><li>Assuming characters() is called once per text node; text may arrive in several chunks.</li></ul>`,
short:['DOM = tree in memory, random access, editable, high memory','SAX = events (startElement, characters, endElement), forward-only, low memory','SAX is read-only; DOM can modify','Use DOM for editing/small files; SAX for large streams','StAX = pull parser alternative','Both check well-formedness; validation optional'],
cards:[['What is the DOM parser?','A parser that builds the whole document as a tree in memory for random access and modification.'],['What is SAX?','Simple API for XML: an event-driven, forward-only parser that streams the document.'],['Which uses less memory, DOM or SAX?','SAX.'],['Can SAX modify an XML document?','No. It is read-only and sequential.'],['Name three SAX callbacks.','startElement, characters and endElement.'],['When choose DOM?','For small or medium documents when you need to edit, search or move around in the document.'],['When choose SAX?','For very large documents or single-pass processing where memory matters.'],['What is a push parser?','A parser that calls your code with events as it reads (SAX), instead of you asking for the next item.']],
quiz:[['Which parser loads the entire document into memory?',['SAX','DOM','Both','Neither'],1,'DOM builds a full tree.'],['Which is event-based?',['DOM','SAX','XPath','XSLT'],1,'SAX reports events during parsing.'],['Best choice for a 5 GB XML log file?',['DOM','SAX','CSS','XSLT only'],1,'SAX streams with low memory.'],['Which of these can edit the XML tree?',['SAX','DOM','Neither','Both equally'],1,'DOM supports insert, delete and update.'],['Which callback receives text content in SAX?',['startElement','characters','endDocument','processingInstruction'],1,'characters() delivers text data.']]};
