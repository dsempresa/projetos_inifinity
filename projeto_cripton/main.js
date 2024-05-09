// Dados de exemplo das criptomoedas
const cryptos = [
    { name: "Bitcoin", logo: "./img/bitcoin-icon-sign-payment-symbol-600nw-1938997753.webp", price: 35000, date: "2024-05-09", description: "A primeira criptomoeda descentralizada." },
    { name: "Ethereum", logo: "./img/images_ethereum.png", price: 2500, date: "2024-05-09", description: "Uma plataforma para contratos inteligentes e aplicativos descentralizados." },
    // Adicione mais criptomoedas conforme necessário
  ];
  
  // Função para exibir as criptomoedas na página
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
  
  // Função para filtrar as criptomoedas conforme o texto digitado no campo de filtro
  document.getElementById("cryptoFilter").addEventListener("input", function() {
    const filterValue = this.value.toLowerCase();
    const filteredCryptos = cryptos.filter(crypto => crypto.name.toLowerCase().includes(filterValue));
    displayCryptos(filteredCryptos);
  });
  
  // Exibir as criptomoedas quando a página carregar
  displayCryptos();
  
// Taxas de conversão de exemplo
const conversionRates = {
    bitcoin: {
      real: 35000,
      // Adicione mais taxas de conversão conforme necessário
    },
    ethereum: {
      real: 2500,
      // Adicione mais taxas de conversão conforme necessário
    },
    // Adicione mais criptomoedas conforme necessário
  };
  
  // Função para realizar a conversão de moeda
  function convertCurrency() {
    const cryptoAmount = parseFloat(document.getElementById("cryptoAmount").value);
    const fromCrypto = document.getElementById("fromCrypto").value;
    const toCrypto = document.getElementById("toCrypto").value;
  
    const rate = conversionRates[fromCrypto][toCrypto];
    const convertedAmount = cryptoAmount * rate;
  
    document.getElementById("conversionResult").textContent = `${cryptoAmount} ${fromCrypto.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCrypto.toUpperCase()}`;
  }
  
  // Adicionar um listener de evento ao botão de conversão
  document.getElementById("convertButton").addEventListener("click", convertCurrency);
  