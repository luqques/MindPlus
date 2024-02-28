export interface IEstatisticasDTO {
    ScoresST: ScoreAvaliacao[];
    ScoresSP: ScoreAvaliacao[];
    ScoresRI: ScoreAvaliacao[];
    NiveisEstresse: NiveisEstresse;
    TendenciasTemporais: TendenciasTemporais[];
}

export class ScoreAvaliacao {
    MediaScore: number = 0;
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
    MediaScore: number = 0;
}
