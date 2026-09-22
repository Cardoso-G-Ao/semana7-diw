let registros = [];
let totalDespesa = 0;

let renda = prompt("renda:");

while (renda !== null && !isNaN(renda) && renda.trim() !== "" && Number(renda) >= 0) {
    let nome = prompt("nome:");
    let despesa = prompt("despesa:");

    console.log("a");

    if (/^[a-zA-ZÀ-ÿ\s]+$/.test(nome) && !isNaN(despesa) && despesa.trim() !== "") {
        totalDespesa += Number(despesa);
        registros.push({ nome: nome, renda: Number(renda), despesa: Number(despesa) });
        console.log(renda, nome);
    } else {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }

    renda = prompt("renda:");
}

console.log("--- Histórico das Execuções ---");
registros.forEach((reg, index) => {
    console.log(`Rodada ${index + 1} -> Nome: ${reg.nome} | Renda: R$ ${reg.renda.toFixed(2)} | Despesa: R$ ${reg.despesa.toFixed(2)}`);
});

if (registros.length > 0) {
    let ultimoRegistro = registros[registros.length - 1];
    let rendaFinal = ultimoRegistro.renda;
    let nomeFinal = ultimoRegistro.nome;
    let sobra = rendaFinal - totalDespesa;

    console.log("\n--- Relatório Final ---");
    console.log(`Nome: ${nomeFinal}`);
    console.log(`Renda: R$ ${rendaFinal.toFixed(2)}`);
    console.log(`Total de despesas: R$ ${totalDespesa.toFixed(2)}`);
    console.log(`Sobra: R$ ${sobra.toFixed(2)}`);

    if (totalDespesa > rendaFinal) {
        console.log("⚠️ Atenção: você gastou mais do que ganhou.");
    } else {
        if (sobra >= rendaFinal * 0.3) {
            console.log("✅ Ótimo: boa margem de sobra.");
        } else {
            console.log("🙂 Ok: dá para melhorar a sobra.");
        }
    }
}