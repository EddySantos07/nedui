
function revenue_share_percentage (revenue_amount, loan_amount) {
    let num = (0.156 / 6.2055 / revenue_amount) * (loan_amount * 10)
    return num.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
}

export default revenue_share_percentage;