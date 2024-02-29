export interface IMetasDTO {
    ColaboradorTotalAtual: number,
    PreenchimentoTotalAtual: number,
    PreenchimentosMes: PreenchimentoMes[],
    PreenchimentosAno: PreenchimentoAno[]
}

export class PreenchimentoMes {
    Preenchimento: number = 0;
    Mes: number = 0;
}

export class PreenchimentoAno {
    Preenchimento: number = 0;
    Ano: number = 0;
}
