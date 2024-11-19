document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('progressBar');
    var sections = document.querySelectorAll('section');
    var nextButtons = document.querySelectorAll('#nextButton');
    var currentSection = 0;

    // function updateProgressBar() {
    //     const progressBar = document.querySelector('.progress-bar');
    //     const progress = ((currentSection + 1) / sections.length) * 100;
    //     progressBar.style.width = `${progress}%`;
    // }

    function validateSection(index) {
        var inputs = sections[index].querySelectorAll('input[required]');
        for (var input of inputs) {
            if (!input.value) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                input.focus(); 
                return false;
            }
        }
        return true;
    }

    function showSection(index) {
        sections.forEach(function(section, i) {
            if (i === index) {
                section.classList.remove('hidden-section');
                section.classList.add('active-section');
            } else {
                section.classList.add('hidden-section');
                section.classList.remove('active-section');
            }
        });
        updateProgressBar();
    }

    nextButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            if (validateSection(currentSection)) { 
                if (currentSection < sections.length - 1) {
                    currentSection++;
                    showSection(currentSection);
                }
            }
        });
    });

    var optionButtons = document.querySelectorAll('.botoes-container .botao button');
    
    optionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var container = this.closest('.botoes-container');
            var buttons = container.querySelectorAll('button');
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            var nextButton = container.parentElement.querySelector('#nextButton');
            if (nextButton) {
                nextButton.classList.add('active');
                nextButton.disabled = false;
            }
        });
    });

    showSection(0);
    updateProgressBar();
});

document.querySelector(".concluir").addEventListener("click", function() {
    window.location.href = "../dashboard/index.html";
});
  