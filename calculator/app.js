// Listen for submit
document.getElementById('loan-form').addEventListener('submit',function (e) {
    
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block'
    
    setTimeout(calculateResults, 2000);
    e.preventDefault();
});

// Calcualte resluts

function calculateResults() {
    // Ui vars
    const amount =  document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;
    
    
    // Compute monthly payment
    
    const x = Math.pow(1+ calculateInterest, calculatePayments );
    const monthly = (principal*x*calculateInterest) / (x-1);
    
    
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);
        
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
        
    }else{
        shoeError('Please check your numbers !');        
    }    
}

// Show error function

function shoeError(error) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    errorDiv.appendChild(document.createTextNode(error));
    
    card.insertBefore(errorDiv, heading)
    
    // Clear after 3 secondes
    
    setTimeout(clearError, 3000);
    
    
}

function clearError() {
    document.querySelector('.alert').remove();
}