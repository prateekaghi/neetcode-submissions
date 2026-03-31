class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
    let billMap = {
      5: 0,
      10: 0,
      20: 0,
    };
    function addBill(amount) {
      billMap[amount]++;
    }
    function removeBill(amount) {
      billMap[amount]--;
    }
    function checkBill(amount) {
      return billMap[amount];
    }
    for (let i = 0; i < bills.length; i++) {
      addBill(bills[i]);
      let billAmount = bills[i];
      if (billAmount === 10) {
        if (checkBill(5)) {
          removeBill(5);
        } else {
          return false;
        }
      }
      if (billAmount === 20) {
        if (checkBill(10) && checkBill(5)) {
          removeBill(10);
          removeBill(5);
        } else if (checkBill(5) >= 3) {
          removeBill(5);
          removeBill(5);
          removeBill(5);
        } else {
          return false;
        }
      }
    }
    return true;
  }
}
