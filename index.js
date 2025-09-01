
// mobile menu

document.querySelector('.mobile-menu-icon').addEventListener('click', function(){
            document.querySelector('.header_nav').classList.toggle('active')
        });


// tab animation

document.addEventListener("DOMContentLoaded", function(){
    const tabs = document.querySelectorAll(".code-container_tab");
    const codeBlocks = document.querySelectorAll (".code-container_code");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const language = this. getAttribute("data-language");

            // remove active class from all tabs and code blocks
            tabs.forEach(t => t.classList.remove("code-container_tab-active"));
            codeBlocks.forEach(c => c.classList.remove('code-container_code-active'));

            // add active class to the clicked tab and corresponding code block
            this.classList.add('code-container_tab-active');
            document.querySelector(`.code-container_code-${language}`).classList.add('code-container_code-active');

            // re-highlight code block for prism.js
            Prism.highlightElement(document.querySelector(`.code-container_code-${language} code`));
        });
    });
});

// copy code 

function copyCode() {
    const copyText = document.querySelector('.code-container_code-active code');
    if (copyText) {
        navigator.clipboard.writeText(copyText.textContent)
            .then(() => {
                alert('Code copied to clipboard!');
                console.log('copied');
            })
            .catch(err => {
                alert('Failed to copy code.');
                console.error(err);
            });
    } else {
        alert('No code block found to copy.');
    }
}

// footer animation 

const footer = document.querySelector('.footer_inner');
const footerSpans = footer.querySelectorAll('span');
const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            footerSpans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('animate');
                }, index * 100); // delay each letter by 100ms
            });
            observer.unobserve(footer); // unobserve after animation triggers
        }
    });
}, {
    threshold: 0.1
});

observer.observe(footer);