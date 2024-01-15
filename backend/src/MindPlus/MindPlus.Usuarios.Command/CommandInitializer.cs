using MindPlus.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Command
{
    public sealed class CommandInitializer : IComponent
    {
        public string Name => "Command-Side Initializer";

        public void Initialize(IInjector injector)
        {
            injector.AddTransient<IEmpresaService, >
        }
    }
}
