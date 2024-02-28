using MindPlus.Domain.Entities;
using MindPlus.Domain.Enums;

namespace MindPlus.Application.ViewModels
{
    public class AvaliationViewModel
    {
        public int Score { get; set; }
        public AvaliationType Type { get; set; }
        public Guid UserId { get; set; }
    }
}
