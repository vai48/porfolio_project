document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-level');

    const isInViewport = function(elem) {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const checkTimelineItems = function() {
        timelineItems.forEach(function(item) {
            if (isInViewport(item)) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkTimelineItems);
    checkTimelineItems();
});
