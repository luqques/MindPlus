using Microsoft.AspNetCore.Mvc;

namespace MindPlus.Api.DDD.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    public class HomeController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return Redirect("~/swagger");
        }
    }
}
