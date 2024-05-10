
const cryptos = [
    { name: "Bitcoin", logo: "./img/bitcoin-icon-sign-payment-symbol-600nw-1938997753.webp", price: 35000, date: "2024-05-09", description: "A primeira criptomoeda descentralizada." },
    { name: "Ethereum", logo: "./img/images_ethereum.png", price: 2500, date: "2024-05-09", description: "Uma plataforma para contratos inteligentes e aplicativos descentralizados." },
  ];
  
  function displayCryptos() {
    const cryptoCardsContainer = document.getElementById("cryptoCardsContainer");
    cryptoCardsContainer.innerHTML = "";
    cryptos.forEach(crypto => {
      const card = `
        <div class="crypto-card">
          <img src="${crypto.logo}" alt="${crypto.name}" class="crypto-logo">
          <h2>${crypto.name}</h2>
          <p>Cotação: R$ ${crypto.price.toFixed(2)}</p>
          <p>Data da Cotação: ${crypto.date}</p>
          <p>${crypto.description}</p>
        </div>
      `;
      cryptoCardsContainer.innerHTML += card;
    });
  }
  
  document.getElementById("cryptoFilter").addEventListener("input", function() {
    const filterValue = this.value.toLowerCase();
    const filteredCryptos = cryptos.filter(crypto => crypto.name.toLowerCase().includes(filterValue));
    displayCryptos(filteredCryptos);
  });
  
  displayCryptos();
  
const conversionRates = {
    bitcoin: {
      real: 35000,
    },
    ethereum: {
      real: 2500,
    },
  };
  
  function convertCurrency() {
    const cryptoAmount = parseFloat(document.getElementById("cryptoAmount").value);
    const fromCrypto = document.getElementById("fromCrypto").value;
    const toCrypto = document.getElementById("toCrypto").value;
  
    const rate = conversionRates[fromCrypto][toCrypto];
    const convertedAmount = cryptoAmount * rate;
  
    document.getElementById("conversionResult").textContent = `${cryptoAmount} ${fromCrypto.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCrypto.toUpperCase()}`;
  }
  
  document.getElementById("convertButton").addEventListener("click", convertCurrency);
  