// Add your code here!
// get the main element
let b_node = document.getElementsByTagName("BODY")[0];
let m_node = b_node.getElementsByTagName("main")[0];
let h_node = document.getElementsByTagName("HEAD")[0];

// Adding style sheet to header
createStyleNode("styles.css", undefined, h_node);

// create a new h1 element and append to main
createNewNode("H1", "The best How I Met Your Mother episode (according to fans)", m_node);
createNewNode("P", 
        `As impossible as it seems to name just 1 of the 208
        legendary episodes as the “best”, the fans have
        spoken and the highest rated episode is… wait for
        it…`,
        m_node);
createNewNode("H2", "The Slap Bet (Season 2, Episode 9)", m_node);
createNewNode("P", "IMDB Rating: 9.5", m_node);
createImgNode("images/robin-sparkles.jpg", "Robin Sparkles", m_node);
createNewNode("P", 
        `In this episode, Ted is learning a few secrets about
        Robin, namely that she has an unexplained aversion
        to the mall. Robin refuses to tell Ted and the
        others why she won’t go to the mall, so the gang
        forms their own theories. Marshall believes it’s
        because she got married in a mall and is still
        married. Barney believes it has something to do with
        Robin having performed in a porn video. The two of
        them make a slap bet with each other: whoever is
        right gets to slap the other across the face as hard
        as he can. Lily is named the Slap Bet Commissioner,
        as long as she promises to be unbiased.`,
        m_node);
createNewNode("P", 
        `In the end, Robin’s big secret was revealed- she was
        a Canadian, teen pop sensation named Robin Sparkles.
        Barney finds the music video for her hit single
        “Lets Go To The Mall”. The slap bet takes a few
        turns throughout the episode, but ends with Marshall
        having the right to slap Barney 5 times- available
        for all of eternity (horrible call Barney).`,
        m_node);

createAnchorNode("https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/", 
                "Source", 
                m_node);



// helper functions: create specific element and append it to parent
function createNewNode(type, text, parent){
    // checking input
    if(typeof(type)!=="string"){
        alert("NOT VALID TYPE!!!");
    }

    // create basic element
    let ele = document.createElement(type);

    // handle inner text
    let t = "";
    if(text!==undefined){
        t_node = document.createTextNode(text);
        ele.appendChild(t_node);
    }

    // handle parent
    if(parent!==undefined){
        parent.appendChild(ele);
    }

    // return the element if needed.
    return ele; 
}

function createImgNode(img_link, alt_text, parent){
    let image = createNewNode("img", undefined, parent)
    
    // handle src link
    if(img_link!==undefined){
        image.src = img_link;       // the src link
    }
    // handle alt text
    if(alt_text!==undefined){
        image.alt=alt_text;     // the alt property
    }

    // return image node if needed
    return image;  
}

function createAnchorNode(href_input, text, parent){
    let a_node = createNewNode("A", text, parent);

    // handle href
    if(href_input!==undefined){
        a_node.href = href_input;
    }

    // return anchor node if needed
    return a_node;
}

function createStyleNode(href_input, text, parent){
    let style_node = createNewNode("link", text, parent);

    //handle rel
    style_node.rel = "stylesheet";

    // handle href
    if(href_input!==undefined){
        style_node.href = href_input;
    }

    // return anchor node if needed
    return style_node;
}