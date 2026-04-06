// The exact parsed CSV items are stored here
const csvData = `Item Name,Amount,Share per person,Paid By,Owed People,Owed By,Comments
Vadodara dinner day,630,210,Mommy,"Daddy, Mommy, Vipul",Mommy /Daddy/Vipul,
Vadodara to jaipur bus,2940,1470,Mommy,"Chris, Vishu",Vishu/Chris,
"Airbnb jaipur first day",2650,662.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Kota to jaipur train,200,100,Mommy,"Daddy, Mommy",Mommy /Daddy,
zomato day 0 kishanghar,390,97.5,Vishu,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
stay to station,150,37.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Train,620,155,Daddy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
"Rickshaw 2 way",400,100,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Samose,210,52.5,Vishu,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Bus,900,225,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Scooty (Fuel excluded)(divide vishu and chris),1000,250,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
big tree cafe,750,375,Vishu,"Chris, Mommy",Mommy /Chris,
Thali house,785,196.25,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Gaitor ki chatriya,150,30,Mommy,"Chris, Daddy, Mommy, Vipul, Vishu",Mommy /Daddy/Vishu/Vipul/Chris,
Entry tickets at amber,420,84,Vipul,"Chris, Daddy, Mommy, Vipul, Vishu",Mommy /Daddy/Vishu/Vipul/Chris,
Brunch at jal mahal,950,190,Chris,"Chris, Daddy, Mommy, Vipul, Vishu",Mommy /Daddy/Vishu/Vipul/Chris,
Earing,550,550,Vishu,Daddy,Daddy,
Saare shopping,850,850,Chris,Vipul,Vipul,
Tour guide,300,60,Chris,"Chris, Daddy, Mommy, Vipul, Vishu",Mommy /Daddy/Vishu/Vipul/Chris,
Naharghar cafe entry,500,100,Mommy,"Chris, Daddy, Mommy, Vipul, Vishu",Mommy /Daddy/Vishu/Vipul/Chris,
Kachori and maggie,200,50,Chris,"Chris, Daddy, Mommy, Vipul",Mommy /Daddy/Vipul/Chris,
Car rental advance,750,150,Vipul,"Chris, Daddy, Mommy, Vipul, Vishu",Mommy /Daddy/Vishu/Vipul/Chris,
Car rental payment final,2070,414,Chris,"Chris, Daddy, Mommy, Vipul, Vishu",Mommy /Daddy/Vishu/Vipul/Chris,
Zomato,821,205.25,Vishu,"Chris, Mommy, Vipul, Vishu",Mommy /Vishu/Vipul/Chris,
Scooty rental,1000,250,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Breakfast,1030,257.5,Vishu,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Shopping mommy daddy,850,425,Vishu,"Daddy, Mommy",Mommy /Daddy,
city palace,900,300,Mommy,"Chris, Daddy, Vishu",Daddy/Vishu/Chris,
Shopping with chris (vihshu shirt),400,400,Chris,Vishu,Vishu,
Shopping with chris and vishu(mommy daddy)(4500),800,400,Chris,"Daddy, Mommy",Mommy /Daddy,
Dinner (ghewar),1182,295.5,Vishu,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Vipul/Chris,
Cocunut,150,50,Mommy,"Chris, Mommy, Vishu",Mommy /Vishu/Chris,
Rickshaw(03),130,32.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Zomato,400,100,Daddy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
mithai,130,32.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Car rental,1440,360,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Fuel,1000,250,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Car rental pre payment,500,125,Daddy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Fruits,250,62.5,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
fasttag,170,42.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
bhanghar entry,50,12.5,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
bhanghar tickets,50,12.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Maggie,200,50,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
bhangnhar tour guide,200,50,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
fuel,100,25,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
dal bhati,1420,355,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Train tickets,2127,1063.5,Vishu,"Daddy, Mommy",Mommy /Daddy,
morning rickshaw,150,37.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
boiled corn,210,52.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
zomato lunch,620,155,Daddy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
evening cab,170,42.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
fateh to chad pole,100,25,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Dinner,1470,367.5,Vishu,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
return cab,130,32.5,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
morning cab city palace,123,30.75,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
city palace udaipur vishu,450,450,Chris,Vishu,Vishu,
city palce udaipur,600,200,Chris,"Chris, Daddy, Mommy",Mommy /Daddy/Chris,
fuel scoty udaipur,300,75,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
scooty rental,270,135,Chris,"Chris, Vishu",Vishu/Chris,
mirror room,600,150,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
sahiliyo ki badi,120,30,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
lunch at city palace,500,125,Mommy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
dinner mommy daddy,620,310,Chris,"Daddy, Mommy",Mommy /Daddy,
Moonsoon palace entry,420,210,Vishu,"Daddy, Mommy",Mommy /Daddy,
last rickshaw,350,87.5,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Lunch punjabi dhaba,890,222.5,Vishu,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Idli vada,60,60,Chris,Daddy,Daddy,
pav bhaji,230,57.5,Chris,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
Udaipur to vapi bus,6700,1675,Daddy,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
udaipur stay,6380,1595,Vishu,"Chris, Daddy, Mommy, Vishu",Mommy /Daddy/Vishu/Chris,
jodhpur dorm,1254,627,Mommy,"Chris, Vishu",Vishu/Chris,
Vishu airbnb advance (4),1000,1000,Vishu,,,
Chris Airbnb advance(4),1000,1000,Chris,,,`;

// Parse CSV strings easily handling commas and quotes
function parseCSV(csvText) {
    const lines = csvText.split('\n').filter(l => l.trim() !== '');
    const expenses = [];
    for (let i=1; i<lines.length; i++) {
        let match = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
        if(!match) {
            match = lines[i].split(',');
        } else {
            match = match.map(m => m.replace(/^"|"$/g, ''));
        }
        
        let item = match[0] || 'Unknown';
        let amountStr = match[1];
        let paidBy = match[3] || '';
        let owedPeopleRaw = match[4] || '';
        
        if (!amountStr) continue;
        let amt = parseFloat(amountStr);
        if (isNaN(amt)) continue;
        
        // Clean strings
        let owedPeople = owedPeopleRaw.replace(/"/g, '').trim();
        if (owedPeople === '') {
            owedPeople = paidBy;
        }

        const splitArr = owedPeople.split(',').map(s => s.trim()).filter(s => s);
        
        expenses.push({ 
            item, 
            amount: amt, 
            paidBy: paidBy.trim(), 
            owedPeople,
            splitArr 
        });
    }
    return expenses;
}

const expenses = parseCSV(csvData);

const tripData = {
    totalSpend: 56382.00,
    paidBy: [
        { name: "Vishu", amount: 17070 },
        { name: "Chris", amount: 15110 },
        { name: "Mommy", amount: 14192 },
        { name: "Daddy", amount: 8840 },
        { name: "Vipul", amount: 1170 }
    ],
    balances: [
        { name: "Vishu", bal: 3554.75 },
        { name: "Chris", bal: 1819.75 },
        { name: "Mommy", bal: 715.25 },
        { name: "Vipul", bal: -1173.25 },
        { name: "Daddy", bal: -4916.50 }
    ],
    settlements: [
        { from: "Daddy", to: "Vishu", amount: 3554.75 },
        { from: "Daddy", to: "Chris", amount: 1361.75 },
        { from: "Vipul", to: "Chris", amount: 458.00 },
        { from: "Vipul", to: "Mommy", amount: 715.25 }
    ]
};

// Open Modal with Breakdown Context
function openModal(debtor, creditor, amount) {
    const modal = document.getElementById('settlement-modal');
    document.getElementById('modal-title').innerHTML = `<span class="bad-red">${debtor}</span> → <span class="good-green">${creditor}</span>`;
    
    // Find all exact costs paid by creditor where debtor was involved
    const itemsOwed = [];
    let exactOwedAmt = 0;
    
    expenses.forEach(ex => {
        if (ex.paidBy === creditor && ex.splitArr.includes(debtor)) {
            const share = ex.amount / ex.splitArr.length;
            exactOwedAmt += share;
            itemsOwed.push({
                item: ex.item,
                fullAmt: ex.amount,
                myShare: share
            });
        }
    });

    // Also look for inverse (paid by debtor, creditor split) to find true net
    let debtorPaidForCreditor = 0;
    expenses.forEach(ex => {
        if (ex.paidBy === debtor && ex.splitArr.includes(creditor)) {
            const share = ex.amount / ex.splitArr.length;
            debtorPaidForCreditor += share;
        }
    });

    const netDirect = exactOwedAmt - debtorPaidForCreditor;

    const modalBody = document.getElementById('modal-body');
    let html = `
        <div class="modal-summary-box">
            <h4>Simplified Debt Transfer</h4>
            <p style="font-size: 0.9rem; margin-bottom: 0.8rem">This group repayment simplifies all underlying debts. Both users have an outstanding overall trip balance. To resolve it fastest:</p>
            <strong style="font-size: 1.1rem">Total paid in this transfer: ₹${amount.toLocaleString('en-IN', {minimumFractionDigits:2})}</strong>
        </div>
        <h4 style="margin-top: 1.5rem; margin-bottom: 1rem; color: #f8fafc">Specific items ${creditor} paid for ${debtor}:</h4>
        <div style="margin-bottom: 1rem">
    `;

    if (itemsOwed.length === 0) {
        html += `<p style="color: #94a3b8; font-style: italic">No direct expenses found - this transfer clears general group debt!</p>`;
    } else {
        itemsOwed.forEach(i => {
            html += `
            <div class="modal-tx-item">
                <div class="modal-tx-item-left">
                    <span class="modal-tx-name">${i.item}</span>
                    <span class="modal-tx-sub">Total cost: ₹${i.fullAmt.toLocaleString('en-IN')}</span>
                </div>
                <div class="modal-tx-amt">₹${i.myShare.toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
            </div>`;
        });
    }
    
    html += `</div>`;

    if (exactOwedAmt > 0) {
        html += `<p style="text-align: right; font-size: 0.9rem; color: var(--text-secondary)">Total Direct: <b>₹${exactOwedAmt.toLocaleString('en-IN', {minimumFractionDigits: 2})}</b></p>`;
    }

    modalBody.innerHTML = html;
    modal.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    // Modal Closure logic
    document.getElementById('modal-close').addEventListener('click', () => {
        document.getElementById('settlement-modal').classList.remove('active');
    });
    document.getElementById('settlement-modal').addEventListener('click', (e) => {
        if(e.target.id === 'settlement-modal') {
            document.getElementById('settlement-modal').classList.remove('active');
        }
    });

    // 1) Render Header Totals
    document.getElementById("total-spend").textContent = `₹${tripData.totalSpend.toLocaleString('en-IN', {minimumFractionDigits:2})}`;

    // 2) Render Balances
    const balancesGrid = document.getElementById("balances-grid");
    tripData.balances.forEach(b => {
        const c = document.createElement("div");
        c.className = `balance-card blur-effect ${b.bal >= 0 ? "bal-positive" : "bal-negative"}`;
        c.innerHTML = `
            <div class="name">${b.name}</div>
            <div class="bal">₹${Math.abs(b.bal).toLocaleString('en-IN', {minimumFractionDigits:2})}</div>
            <div class="status">${b.bal >= 0 ? "Gets Back" : "Owes"}</div>
        `;
        balancesGrid.appendChild(c);
    });

    // 3) Render Settlements (now clickable)
    const settlementsList = document.getElementById("settlements-list");
    tripData.settlements.forEach(s => {
        const item = document.createElement("div");
        item.className = "settle-item blur-effect";
        
        // Setup click listener
        item.addEventListener("click", () => openModal(s.from, s.to, s.amount));

        item.innerHTML = `
            <div class="settle-roles">
                <span class="bad-red">${s.from}</span>
                <span class="arrow">→</span>
                <span class="good-green">${s.to}</span>
            </div>
            <div class="settle-amount">₹${s.amount.toLocaleString('en-IN', {minimumFractionDigits:2})}</div>
        `;
        settlementsList.appendChild(item);
    });

    // 4) Render Paid By Bars
    const paidBars = document.getElementById("paid-bars");
    const maxPaid = Math.max(...tripData.paidBy.map(p => p.amount));
    tripData.paidBy.forEach(p => {
        const row = document.createElement("div");
        row.className = "bar-row";
        row.innerHTML = `
            <div class="bar-header">
                <span>${p.name}</span>
                <span>₹${p.amount.toLocaleString('en-IN', {minimumFractionDigits:2})} (${((p.amount/tripData.totalSpend)*100).toFixed(1)}%)</span>
            </div>
            <div class="bar-bg">
                <div class="bar-fill" data-width="${(p.amount/maxPaid)*100}%"></div>
            </div>
        `;
        paidBars.appendChild(row);
    });

    // 5) Generate Detailed Transactions List
    const txContainer = document.getElementById("transactions-list");
    if(txContainer){
        expenses.forEach((e) => {
            const card = document.createElement("div");
            card.className = "tx-card blur-effect";
            card.innerHTML = `
                <div class="tx-left">
                    <div class="tx-icon">📍</div>
                    <div class="tx-info">
                        <strong>${e.item}</strong>
                        <span>Paid by <b>${e.paidBy}</b></span>
                    </div>
                </div>
                <div class="tx-right">
                    <div class="tx-amt">₹${e.amount.toLocaleString('en-IN')}</div>
                    <div class="tx-split">Splits: <i>${e.owedPeople}</i></div>
                </div>
            `;
            txContainer.appendChild(card);
        });
    }

    setTimeout(() => {
        document.querySelectorAll('.bar-fill').forEach(el => {
            el.style.width = el.getAttribute('data-width');
            el.style.transition = "width 1.2s cubic-bezier(0.1, 0.7, 0.1, 1)";
        });
    }, 150);
});
