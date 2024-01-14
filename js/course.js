document.addEventListener('DOMContentLoaded', function () {
    const pageLinks = document.querySelectorAll('.course-pages p');
    const contentDivs = document.querySelectorAll('.pages-content > div');

    contentDivs[0].classList.add('active', 'show-content');
    pageLinks[0].classList.add('show-content');

    pageLinks.forEach(function (link, index) {
      link.addEventListener('click', function () {
        contentDivs.forEach(function (div) {
          div.classList.remove('active');
        });

        contentDivs[index].classList.add('active');

        pageLinks.forEach(function (p) {
          p.classList.remove('show-content');
        });

        link.classList.add('show-content');
      });
    });
  });