function getElement(id) {
    const elemnent = document.getElementById(id);
    return elemnent;
}
const sidberContainer = getElement("sidebarCartContainer");
getElement("card-container").addEventListener("click", function (e) {
    if (e.target.className.includes("fa-heart")) {
        const heartCountDisply = getElement("heartCountDisplay");
        const heartCountDisplyconvert = parseInt(heartCountDisply.innerText);
        heartCountDisply.innerText = heartCountDisplyconvert + 1;
    }
    if (e.target.className.includes("callBtn")) {
        const coin = getElement("coinDisplay");
        const coinNumber = parseInt(coin.innerText);
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";

        if (coinNumber > 0) {
            const callBtn = e.target;
            const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;
            const contactCategory =
                callBtn.parentNode.parentNode.children[2].innerText;
            const contactNumber =
                callBtn.parentNode.parentNode.children[3].innerText;
            alert(
                `${cardTitle} \n 📞 calling ${contactCategory} ${contactNumber}...`
            );
            let coinDecrementRes = coinNumber - 20;
            coin.innerText = coinDecrementRes;

            const newSidberCard = document.createElement("div");
            newSidberCard.innerHTML = `
          <div
            class="flex justify-between p-1 md:p-3 bg-slate-200 rounded-md mt-2 gap-2"
          >
            <div class="">
              <h1 class="text-[10px] md:text-sm">${cardTitle}</h1>
              <p class="text-gray-400 text-[10px] md:text-sm">${contactNumber}</p>
            </div>
            <div class="text-[10px] md:text-sm">${hours}:${minutes}:${seconds} ${ampm}</div>
          </div>`;
            sidberContainer.appendChild(newSidberCard);
        } else {
            alert(
                "❌You don't have enough coins! You need at least 20 coins to make a call."
            );
        }
    }

    if (e.target.className.includes("copyBtn")) {
        const copyCounterDisply = getElement("copyCounterDisplay");
        const copyResConvertNum = parseInt(copyCounterDisply.innerText);
        copyCounterDisply.innerText = copyResConvertNum + 1;
        const cardInnerItems = e.target;
        const cardTitle =
            cardInnerItems.parentNode.parentNode.children[1].innerText;
        const contactNumber =
            cardInnerItems.parentNode.parentNode.children[3].innerText;
        alert(` ${cardTitle} \n Number copied: ${contactNumber}`);
        navigator.clipboard.writeText(contactNumber);
    }
});

const clearBtn = getElement("clearBtn");
clearBtn.addEventListener("click", function () {
    sidberContainer.innerHTML = "";
});
