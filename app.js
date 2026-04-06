// The exact parsed CSV items
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

const people = ["Vishu", "Chris", "Mommy", "Daddy", "Vipul"];
let totalTripSpend = 0;

// Setup dictionaries
const paidTotal = {};
const costShare = {};
const exactLedger = {}; // exactLedger[A][B] = exact array of items where A owes B money 
people.forEach(p => {
    paidTotal[p] = 0;
    costShare[p] = 0;
    exactLedger[p] = {};
    people.forEach(p2 => exactLedger[p][p2] = []);
});

const expenses = [];
const lines = csvData.split('\n').filter(l => l.trim() !== '');
for (let i = 1; i < lines.length; i++) {
    let match = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
    if (!match) match = lines[i].split(',');
    else match = match.map(m => m.replace(/^"|"$/g, ''));
    
    let item = match[0] || 'Unknown';
    let amt = parseFloat(match[1]);
    let paidBy = (match[3] || '').trim();
    let owedRaw = (match[4] || '').replace(/"/g, '').trim();
    
    if (isNaN(amt) || !paidBy) continue;
    if (owedRaw === '') owedRaw = paidBy;
    
    let splitArr = owedRaw.split(',').map(s => s.trim()).filter(s => s);
    
    totalTripSpend += amt;
    if (paidTotal[paidBy] !== undefined) {
        paidTotal[paidBy] += amt;
    }

    let shareAmt = amt / splitArr.length;
    splitArr.forEach(debtor => {
        if (costShare[debtor] !== undefined) {
            costShare[debtor] += shareAmt;
        }
        // If the debtor is not the person who paid it, the debtor owes the payer!
        if (debtor !== paidBy && exactLedger[debtor] && exactLedger[debtor][paidBy]) {
            exactLedger[debtor][paidBy].push({
                item: item,
                fullAmt: amt,
                share: shareAmt
            });
        }
    });

    expenses.push({ item, amount: amt, paidBy, owedPeople: owedRaw });
}

// Net Pairwise Balances calculator
// A positive returned array means "A owes B"
function getExactNetOwed(A, B) {
    let aOwesBItems = exactLedger[A][B];
    let bOwesAItems = exactLedger[B][A];
    
    let aDebt = 0; aOwesBItems.forEach(i => aDebt += i.share);
    let bDebt = 0; bOwesAItems.forEach(i => bDebt += i.share);
    
    if (aDebt > bDebt) {
        return { debtor: A, creditor: B, netAmount: aDebt - bDebt, myDebtItems: aOwesBItems, theirDebtItems: bOwesAItems };
    } else if (bDebt > aDebt) {
        return { debtor: B, creditor: A, netAmount: bDebt - aDebt, myDebtItems: bOwesAItems, theirDebtItems: aOwesBItems };
    }
    return null;
}

// ----------------------------------------------------
// UI Logic
// ----------------------------------------------------
function formatRupee(val) {
    return val.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function renderGlobalView() {
    document.getElementById("total-spend").textContent = `₹${formatRupee(totalTripSpend)}`;
    
    const balGrid = document.getElementById("balances-grid");
    balGrid.innerHTML = '';
    people.forEach(p => {
        const netBal = paidTotal[p] - costShare[p]; // positive = gets back
        const c = document.createElement("div");
        c.className = `balance-card blur-effect ${netBal >= 0 ? "bal-positive" : "bal-negative"}`;
        c.innerHTML = `
            <div class="name">${p}</div>
            <div class="bal">₹${formatRupee(Math.abs(netBal))}</div>
            <div class="status">${netBal >= 0 ? "Gets Back" : "Owes"}</div>
        `;
        balGrid.appendChild(c);
    });

    const barsGrid = document.getElementById("paid-bars");
    barsGrid.innerHTML = '';
    const maxPaid = Math.max(...Object.values(paidTotal));
    // Sort array by amount paid for global view
    let sortedPaid = Object.keys(paidTotal).map(k => ({name: k, val: paidTotal[k]})).sort((a,b)=>b.val-a.val);
    
    sortedPaid.forEach(p => {
        const pct = (p.val / totalTripSpend) * 100;
        const row = document.createElement("div");
        row.className = "bar-row";
        row.innerHTML = `
            <div class="bar-header"><span>${p.name}</span><span>₹${formatRupee(p.val)} (${pct.toFixed(1)}%)</span></div>
            <div class="bar-bg"><div class="bar-fill" style="width: ${(p.val/maxPaid)*100}%"></div></div>
        `;
        barsGrid.appendChild(row);
    });

    const txGrid = document.getElementById("transactions-list");
    txGrid.innerHTML = '';
    expenses.forEach(e => {
        const card = document.createElement("div");
        card.className = "tx-card blur-effect";
        card.innerHTML = `
            <div class="tx-left">
                <div class="tx-icon">📍</div>
                <div class="tx-info"><strong>${e.item}</strong><span>Paid by <b>${e.paidBy}</b></span></div>
            </div>
            <div class="tx-right">
                <div class="tx-amt">₹${formatRupee(e.amount)}</div>
                <div class="tx-split">Splits: <i>${e.owedPeople}</i></div>
            </div>
        `;
        txGrid.appendChild(card);
    });
}

function renderPersonalView(person) {
    document.getElementById("p-paid").textContent = `₹${formatRupee(paidTotal[person])}`;
    document.getElementById("p-share").textContent = `₹${formatRupee(costShare[person])}`;
    
    const netBal = paidTotal[person] - costShare[person];
    const netEl = document.getElementById("p-net");
    const netStatusEl = document.getElementById("p-net-status");
    netEl.textContent = `₹${formatRupee(Math.abs(netBal))}`;
    if (netBal >= 0) {
        netEl.className = "val color-green";
        netStatusEl.textContent = "THE GROUP OWES YOU";
        netStatusEl.className = "color-green";
    } else {
        netEl.className = "val color-red";
        netStatusEl.textContent = "YOU OWE THE GROUP";
        netStatusEl.className = "color-red";
    }

    const oweGrid = document.getElementById("content-you-owe");
    const owedGrid = document.getElementById("content-owes-you");
    oweGrid.innerHTML = '';
    owedGrid.innerHTML = '';

    people.forEach(other => {
        if (other === person) return;
        const rel = getExactNetOwed(person, other);
        // rel could mean person owes other, OR other owes person
        if (!rel) return; 

        const cardHTML = `
            <div class="direct-debt-card">
                <div class="direct-debt-header">
                    <h4>${rel.creditor}</h4>
                    <div class="direct-debt-amt ${rel.debtor === person ? 'color-red' : 'color-green'}">
                        ₹${formatRupee(rel.netAmount)}
                    </div>
                </div>
                <div style="font-size: 0.9rem; margin-bottom:0.5rem; color: #f8fafc">Items proving this debt:</div>
                ${rel.myDebtItems.map(i => `<div class="debt-item-row"><span>${i.item} (They paid)</span><span class="amt">₹${formatRupee(i.share)}</span></div>`).join('')}
                ${rel.theirDebtItems.map(i => `<div class="debt-item-row"><span style="opacity:0.6">${i.item} (You paid)</span><span class="amt" style="opacity:0.6; color:var(--success)">- ₹${formatRupee(i.share)}</span></div>`).join('')}
            </div>
        `;

        if (rel.debtor === person) {
            // I owe them
            oweGrid.innerHTML += cardHTML;
        } else {
            // They owe me
            owedGrid.innerHTML += cardHTML;
        }
    });

    if (oweGrid.innerHTML === '') oweGrid.innerHTML = `<p style="color:var(--text-secondary);font-size:0.9rem">You don't owe any individuals directly.</p>`;
    if (owedGrid.innerHTML === '') owedGrid.innerHTML = `<p style="color:var(--text-secondary);font-size:0.9rem">Nobody owes you directly.</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
    renderGlobalView(); // initialize HTML nodes
    
    const tabs = document.querySelectorAll('.person-tab');
    const globalView = document.getElementById('global-overview');
    const personalStats = document.getElementById('personal-stats');
    const personalBreakdowns = document.getElementById('personal-breakdowns');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // visually update tabs
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');

            const p = e.target.getAttribute('data-person');
            if (p === 'Group') {
                globalView.classList.remove('hidden');
                personalStats.classList.remove('visible');
                personalBreakdowns.classList.remove('visible');
            } else {
                globalView.classList.add('hidden');
                personalStats.classList.add('visible');
                personalBreakdowns.classList.add('visible');
                renderPersonalView(p);
            }
        });
    });
});
