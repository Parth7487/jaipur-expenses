
const tripData = {"totalSpend": 56382.0, "paidBy": [{"name": "Vishu", "amount": 17070}, {"name": "Chris", "amount": 15110}, {"name": "Mommy", "amount": 14192}, {"name": "Daddy", "amount": 8840}, {"name": "Vipul", "amount": 1170}], "balances": [{"name": "Vishu", "bal": 3554.75}, {"name": "Chris", "bal": 1819.75}, {"name": "Mommy", "bal": 715.25}, {"name": "Vipul", "bal": -1173.25}, {"name": "Daddy", "bal": -4916.5}], "settlements": [{"from": "Daddy", "to": "Vishu", "amount": 3554.75}, {"from": "Daddy", "to": "Chris", "amount": 1361.75}, {"from": "Vipul", "to": "Chris", "amount": 458.0}, {"from": "Vipul", "to": "Mommy", "amount": 715.25}], "expenses": []};
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("total-spend").textContent = `₹${tripData.totalSpend.toLocaleString("en-IN", {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    
    tripData.balances.forEach(b => {
        const c = document.createElement("div");
        c.className = `balance-card blur-effect ${b.bal >= 0 ? "bal-positive" : "bal-negative"}`;
        c.innerHTML = `<div class="name">${b.name}</div><div class="bal">₹${Math.abs(b.bal).toLocaleString("en-IN", {minimumFractionDigits:2})}</div><div class="status">${b.bal >= 0 ? "Gets Back" : "Owes"}</div>`;
        document.getElementById("balances-grid").appendChild(c);
    });

    tripData.settlements.forEach(s => {
        const item = document.createElement("div");
        item.className = "settle-item blur-effect";
        item.innerHTML = `<div class="settle-roles"><span style="color:#ef4444">${s.from}</span><span class="arrow">→</span><span style="color:#10b981">${s.to}</span></div><div class="settle-amount">₹${s.amount.toLocaleString("en-IN", {minimumFractionDigits:2})}</div>`;
        document.getElementById("settlements-list").appendChild(item);
    });

    const maxPaid = Math.max(...tripData.paidBy.map(p => p.amount));
    tripData.paidBy.forEach(p => {
        const row = document.createElement("div");
        row.className = "bar-row";
        row.innerHTML = `<div class="bar-header"><span>${p.name}</span><span>₹${p.amount.toLocaleString("en-IN", {minimumFractionDigits:2})} (${(p.amount/tripData.totalSpend*100).toFixed(1)}%)</span></div><div class="bar-bg"><div class="bar-fill" style="width: ${(p.amount/maxPaid)*100}%"></div></div>`;
        document.getElementById("paid-bars").appendChild(row);
    });

    tripData.expenses.forEach(e => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${e.item}</td><td>₹${e.amount.toLocaleString("en-IN", {minimumFractionDigits:2})}</td><td><span style="color:#3b82f6;font-weight:bold">${e.paidBy}</span></td><td><span style="font-size:0.85em;color:#94a3b8">${e.owedPeople}</span></td>`;
        document.getElementById("expenses-table-body").appendChild(tr);
    });
});
