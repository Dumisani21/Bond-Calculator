// variables for calculating

const purchaseAmount = document.getElementById("purchaseAmount")
const deposite = document.getElementById("deposite")
const years = document.getElementById("years")
const interestRate = document.getElementById("interestRate")
const calculaBtn = document.getElementById("calcuale")

// variables for total
const monthlyPayments = document.getElementById("monthlyPayments")
const minGrossIncome = document.getElementById("minGrossIncome")
const totalPayment = document.getElementById("totalPayment")
const totalInterest = document.getElementById("totalInterest")
const resetBtn = document.getElementById("reset")


// functions
function calculateBond(e) {
    // Number Format
    const numberFormat = new Intl.NumberFormat('en-US')

    // M = P[r(1+r)^n / ((1+r)^n) -1]
	if (parseInt(deposite.value) > parseInt(purchaseAmount.value)) {
		e.preventDefault()
		
		alert("Deposite can not be greater than purchase price")
		
	}else {
		const barket = (1 + ((interestRate.value / 100) / 12))
		const power = Math.pow(barket, (years.value * 12))
		const laststep = ((interestRate.value / 100) / 12) * power
		const step2 = power - 1
		const p = (purchaseAmount.value - deposite.value) * (laststep / step2)
		const totalpayment = (p * (years.value * 12))
		const totalinterest = (p * (years.value * 12)) - (purchaseAmount.value - deposite.value)

		monthlyPayments.value = `${numberFormat.format(p.toFixed(2))}`
		totalPayment.value = `${numberFormat.format(totalpayment.toFixed(2))}`
		totalInterest.value = `${numberFormat.format(totalinterest.toFixed(2))}`
		e.onclick = location.href = "#results"
	}
    
}

function resetBond(e) {
    e.onclick = location.href = "#home"
}


// Eventlistener
calculaBtn.addEventListener('click', calculateBond)
resetBtn.addEventListener('click', resetBond)
