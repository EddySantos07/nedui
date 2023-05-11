
function revenue_share_percentage (revenue_amount, loan_amount) {
    return (0.156 / 6.2055 / revenue_amount) * (loan_amount * 10);
}

export default revenue_share_percentage;