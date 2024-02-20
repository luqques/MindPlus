export interface IEstatisticasDTO {
    EscoresST: EscoreAvaliacao[],
    EscoresSP: EscoreAvaliacao[],
    EscoresRI: EscoreAvaliacao[],
    NiveisEstresse: NiveisEstresse,
    TendenciasTemporais: TendenciasTemporais[]
    //EquilibrioVida: EquilibrioVida
}

export interface EscoreAvaliacao
{
    MediaEscore: number,
    NumeroPessoas: number
}

export interface NiveisEstresse 
{
    MediaGeral: number, 
    MediaGST: number,
    MediaGSP: number,
    MediaGRI: number
}

export interface TendenciasTemporais 
{
    Mes: string, 
    MediaEscore: number
}

/*
export interface E      quilibrioVida 
{
    Preenchimento: number, 
    Ano: number
} ***A REVISAR UTILIDADE DE CLASSE
*/