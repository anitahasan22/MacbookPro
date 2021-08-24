//settimg updted price
function updatePrice(id, cost) {
    const costMemory = document.getElementById(id);
    costMemory.innerText = cost;
    macCost();
};
//calculation of macbook
function macCost() {
    const memory = document.getElementById('extra-memory-cost');
    const storage = document.getElementById('extra-storage-cost');
    const delivery = document.getElementById('delivary-charge');
    const best = document.getElementById('best-price');
    const total = document.getElementById('total-price');
    const bonus = document.getElementById('total-main-balance');
    const subtotal = parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(best.innerText) + parseInt(delivery.innerText);
    console.log(subtotal)
    bonus.innerText = subtotal;
    total.innerText = subtotal;
    document.getElementById('apply-button').disabled = false;

};
//functions of button function results
function updateTotalText() {
    const Msg = document.getElementById('promo-input');
    if (Msg.value.toLowerCase() == 'stevekaku') {
        //const total = document.getElementById('total-price');
        const bonus = document.getElementById('total-main-balance');
        //total.innerText = parseInt(total.innerText) * 0.8;
        bonus.innerText = parseInt(bonus.innerText) * 0.8;
        document.getElementById('apply-button').disabled = true;

    }
    else {

    }
    Msg.value = '';
};

//clickhandlers
document.getElementById('memory-eight').addEventListener('click', function () {
    updatePrice('extra-memory-cost', 0);
});

document.getElementById('memory-sixteen').addEventListener('click', function () {
    updatePrice('extra-memory-cost', 180);
});
document.getElementById('storage-fiftysix').addEventListener('click', function () {
    updatePrice('extra-storage-cost', 0);
});

document.getElementById('storage-twelve').addEventListener('click', function () {
    updatePrice('extra-storage-cost', 100);
});
document.getElementById('storage-tera').addEventListener('click', function () {
    updatePrice('extra-storage-cost', 180);
});

document.getElementById('delivary-free').addEventListener('click', function () {
    updatePrice('delivary-charge', 0);
});
document.getElementById('delivary-paid').addEventListener('click', function () {
    updatePrice('delivary-charge', 20);
});