using MindPlus.Domain.Entities.Base;
using MindPlus.Domain.Enums;

namespace MindPlus.Domain.Entities
{
    public class Avaliation : Entity
    {
        private Avaliation() { }

        public Avaliation(int score, AvaliationType type, DateTime avaliatedAt, Guid userId)
        {
            SetScore(score);
            SetAvaliatedAt(avaliatedAt);
            SetUserId(userId);
            SetAvaliationType(type);
        }

        public int Score { get; private set; }
        public AvaliationType Type { get; private set; }
        public DateTime AvaliatedAt { get; private set; }

        public Guid UserId { get; private set; }
        public User User { get; private set; }

        public Avaliation SetUserId(Guid userId)
        {
            UserId = userId;
            return this;
        }

        public Avaliation SetScore(int score)
        {
            Score = score;
            return this;
        }

        public Avaliation SetAvaliationType(AvaliationType avaliationType)
        {
            Type = avaliationType;
            return this;
        }

        public Avaliation SetAvaliatedAt(DateTime avaliatedAt)
        {
            AvaliatedAt = avaliatedAt;
            return this;
        }
    }
}
