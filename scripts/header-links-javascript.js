// go through every element with an ID
const elementsWithId = document.body.querySelectorAll('[id]');

elementsWithId.forEach(idElement => {
    // creates the following hyperlink in the element:
    // <a class="headerlink" href="#barebones-and-philosophy" title="Link to this heading">¶</a>
    
    // ignore the main title and expand/collapse all button
    if (idElement.id=='frequently-asked-questions-and-misconceptions'
     || idElement.id=='expAll') {
        return
    }

    // create hyperlink element
    const headerlink = document.createElement('a');

    // give text symbol
    headerlink.textContent = "¶";

    // give class for styles
    headerlink.classList.add('headerlink');

    // give clickable link properties
    headerlink.href = `#${idElement.id}`;

    // give hover flavourtext
    headerlink.title = "Link to this heading";

    // put in correct place in flow
    idElement.appendChild(headerlink);
});