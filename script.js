// Add interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    const habitBoxes = document.querySelectorAll('.habit-box');
    const neuroBoxes = document.querySelectorAll('.neuro-box');

    // Add click handlers for habit boxes
    habitBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Remove active class from all boxes
            habitBoxes.forEach(b => b.classList.remove('active'));
            // Add active class to clicked box
            this.classList.add('active');
            
            const habitName = this.querySelector('.habit-name').textContent;
            const impactLevel = this.dataset.impact;
            const habitType = this.dataset.type;
            
            console.log('Selected habit:', {
                name: habitName,
                impact: impactLevel,
                type: habitType
            });
        });
    });

    // Add hover effects
    habitBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        box.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1)';
            }
        });
    });

    // Neurotransmitter box interactions
    neuroBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const neuroType = this.classList[1].replace('-box', '');
            
            // Highlight all habit boxes of this neurotransmitter type
            habitBoxes.forEach(hBox => {
                if (hBox.classList.contains(neuroType)) {
                    hBox.style.opacity = '1';
                    hBox.style.transform = 'scale(1.05)';
                } else {
                    hBox.style.opacity = '0.3';
                    hBox.style.transform = 'scale(1)';
                }
            });
        });
    });
});

// Optional: Add animation on load
window.addEventListener('load', function() {
    const boxes = document.querySelectorAll('.habit-box, .neuro-box');
    boxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        setTimeout(() => {
            box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, index * 50);
    });
});

