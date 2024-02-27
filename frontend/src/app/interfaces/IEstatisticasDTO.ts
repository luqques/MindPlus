export interface IEstatisticasDTO {
    EscoresST: EscoreAvaliacao[];
    EscoresSP: EscoreAvaliacao[];
    EscoresRI: EscoreAvaliacao[];
    NiveisEstresse: NiveisEstresse;
    TendenciasTemporais: TendenciasTemporais[];
}

export class EscoreAvaliacao {
    MediaEscore: number = 0;
    NumeroPessoas: number = 0;
}

export class NiveisEstresse {
    MediaGeral: number = 0;
    MediaGST: number = 0;
    MediaGSP: number = 0;
    MediaGRI: number = 0;
}

export class TendenciasTemporais {
    Mes: number = 0;
    MediaEscore: number = 0;
}
