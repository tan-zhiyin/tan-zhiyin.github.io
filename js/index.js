/*
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}


<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "publisher": {
        "@type": "Organization",
        "name": "Sebastian Ruder",
        "url": "https://ruder.io/",
        "logo": {
            "@type": "ImageObject",
            "url": {
                "@type": "ImageObject",
                "url": "https://ruder.io/favicon.ico",
                "width": 48,
                "height": 48
            }
        }
    },
      "url": "https://ruder.io/",
      "image": {
          "@type": "ImageObject",
          "url": "https://ruder.io/content/images/2017/05/imageedit_8_8459453433.jpg",
          "width": 1000,
          "height": 563
      },
      "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://ruder.io/"
      },
      "description": "I&#x27;m a research scientist in the Language team at DeepMind. I blog about natural language processing, machine learning, and deep learning."
  }
</script>
*/