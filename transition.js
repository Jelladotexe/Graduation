export function transitionPage(delay, targetUrl) {
    return new Promise((resolve) => {
        fetch('transition.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('loader-container').innerHTML = html;
                const loader = document.querySelector(".loader");

                // Show the loader
                loader.classList.add("loader-active");
                // Hide the loader after the specified delay and redirect
                setTimeout(() => {
                    window.location.href = targetUrl;
                    resolve(); // Resolve the promise after the delay
                }, delay);
            });
    });
}