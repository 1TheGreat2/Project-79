document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('menuModal');
    var btn = document.getElementById('menuBtn');
    var span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    var vegOptions = ['Margherita', 'Vegetarian', 'Paneer Tikka'];
    var nonVegOptions = ['Pepperoni', 'Chicken BBQ', 'Meat Feast'];

    var vegList = document.getElementById('vegList');
    var nonVegList = document.getElementById('nonVegList');

    vegOptions.forEach(function(option) {
        var li = document.createElement('li');
        li.textContent = option;
        vegList.appendChild(li);
    });

    nonVegOptions.forEach(function(option) {
        var li = document.createElement('li');
        li.textContent = option;
        nonVegList.appendChild(li);
    });

    var submitBtn = document.getElementById('submitSuggestion');
    var suggestionBox = document.getElementById('suggestionBox');

    submitBtn.addEventListener('click', function() {
        var suggestion = suggestionBox.value.trim();
        if (suggestion !== '') {
            alert('Thank you for your suggestion: ' + suggestion);
            suggestionBox.value = '';
        } else {
            alert('Please enter a suggestion before submitting.');
        }
    });
});
