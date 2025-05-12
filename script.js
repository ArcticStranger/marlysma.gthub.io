document.addEventListener('DOMContentLoaded', function() {
    const reportButton = document.querySelector('.report-button');
    const deportButton = document.querySelector('.deport-button');
    const hotNumber = document.querySelector('.hot-number');
    const visionNumber = document.querySelector('.vision-number');

    let hotCount = 47000;
    let visionCount = 20.5;

    reportButton.addEventListener('click', function() {
        hotCount += 1000;
        hotNumber.textContent = `${(hotCount / 1000).toFixed(1)}k`;
        visionNumber.textContent = `${visionCount.toFixed(1)}%`;
    });

    deportButton.addEventListener('click', function() {
        visionCount += 0.1;
        hotNumber.textContent = `${(hotCount / 1000).toFixed(1)}k`;
        visionNumber.textContent = `${visionCount.toFixed(1)}%`;
    });
});
