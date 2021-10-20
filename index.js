const api = require('./api')
console.log('Monitoring started')
setInterval(async () => {
    console.log('Mercado')
    const mercado = await api.depth('BNBBUSD')
    console.log(mercado.bids.length ? `Compra: ${mercado.bids[0][0]}` : 'Sem Compras')
    console.log(mercado.asks.length ? `Venda: ${mercado.asks[0][0]}` : 'Sem Vendas')
    console.log('Carteira')
    const carteira = await api.accountInfo()
    const coins = carteira.balances.filter(b => b.asset === 'BNB' || b.asset === 'BTC')
    console.log(coins)

}, process.env.CRAWLER_INTERVAL)