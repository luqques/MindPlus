namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Identifica o tipo de uma mensagem.
    public enum MessageType
    {
        //
        // Resumo:
        //     Comando - algo que será executado (uma ação).
        Command = 1,
        //
        // Resumo:
        //     Evento de domínio - algo que aconteceu no domínio interno do microsserviço.
        DomainEvent,
        //
        // Resumo:
        //     Evento de integração - algo que aconteeu no domínio do microsserviço que deve
        //     ser publicado no mensageiro.
        IntegrationEvent,
        //
        // Resumo:
        //     Query - consulta.
        Query,
        //
        // Resumo:
        //     Evento avro de domínio - evento kafka em avro no domínio interno do microsserviço.
        AvroEvent,
        //
        // Resumo:
        //     Evento de Kafka de integração - algo que aconteeu na aplicação que deve ser publicado
        //     no mensageiro.
        KafkaEvent
    }
}