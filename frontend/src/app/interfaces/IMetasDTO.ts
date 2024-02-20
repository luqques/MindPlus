export interface IMetasDTO {
    ColaboradorTotalAtual: number,
    PreenchimentoTotalAtual: number,
    PreenchimentosMes: PreenchimentoMes[],
    PreenchimentosAno: PreenchimentoAno[]
}

export interface PreenchimentoMes
{
    Preenchimento: number,
    Mes: string
}

export interface PreenchimentoAno 
{
    Preenchimento: number, 
    Ano: number
}