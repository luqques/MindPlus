namespace MindPlus.Application.ViewModels
{
    public class AvaliationGoalViewModel
    {
        public int TotalUsers { get; set; }
        public int TotalAvaliations { get; set; }
        public List<FilledInfoDTO> Infos { get; set; }
    }

    public class FilledInfoDTO
    {
        public int Total { get; set; }
        public double Number { get; set; }
        public FilledInfoType Type { get; set; }
    }

    public enum FilledInfoType
    { 
        Day = 0,
        Month = 1,
        Year = 2
    }
}
