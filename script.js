// Simplified Tip Calculator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const billInput = document.getElementById('bill-amount');
    const tipButtons = document.querySelectorAll('.tip-buttons button');
    const customBtn = document.getElementById('custom-btn');
    const customInput = document.getElementById('custom-input');
    const customTipInput = document.getElementById('custom-tip');
    const applyCustomBtn = document.getElementById('apply-custom');
    const resultArea = document.getElementById('result');
    const tipAmount = document.getElementById('tip-amount');
    const totalAmount = document.getElementById('total-amount');
    
    // Add event listeners to tip buttons
    tipButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        tipButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Handle custom tip button
        if (this.dataset.tip === 'custom') {
          customInput.classList.add('show');
          resultArea.classList.remove('show');
        } else {
          customInput.classList.remove('show');
          calculateTip(parseFloat(this.dataset.tip));
        }
      });
    });
    
    // Custom tip apply button
    applyCustomBtn.addEventListener('click', function() {
      const customPercent = parseFloat(customTipInput.value);
      
      if (isNaN(customPercent) || customPercent <= 0) {
        alert('Please enter a valid tip percentage');
        return;
      }
      
      calculateTip(customPercent / 100);
    });
    
    // Calculate and display tip and total
    function calculateTip(tipRate) {
      const billAmount = parseFloat(billInput.value);
      
      if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount');
        resultArea.classList.remove('show');
        return;
      }
      
      const tip = billAmount * tipRate;
      const total = billAmount + tip;
      
      tipAmount.textContent = '$' + tip.toFixed(2);
      totalAmount.textContent = '$' + total.toFixed(2);
      
      resultArea.classList.add('show');
    }
  });